'use client';
import React, { useEffect, useRef } from 'react';
import * as Repo from '@/repository';
//import WithAuthorization from '../../../withAuthorization';
//import { permissions } from '@/config/index';
import { useRouter } from 'next-nprogress-bar';
import { usePathname } from 'next/navigation';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { RootState, AppDispatch } from '@/reduxStore/store';
import { setValidationErrors, resetUserForm, resetValidationErrors, setUserForm, setUsers } from '@/reduxStore/features/userSlice';
import CreateOrUpdateForm from '../src/createOrUpdateForm';
import validateUserFormInputs from '../src/validateUserFormInputs';
import { toast } from 'sonner';

import type { UserProfile } from '@/API';


const UserUpdatePage: React.FC = () => {
    const router = useRouter();
    const pathname = usePathname();
    const dispatch = useAppDispatch<AppDispatch>();
    const users = useAppSelector((state: RootState) => state.user.users);
    
    const [validationIsEnabled, setValidationIsEnabled] = React.useState(false);
    const validationErrors = useAppSelector((state: RootState) => state.user.validationErrors);
    const validationErrorsRef = React.useRef(validationErrors);
    validationErrorsRef.current = validationErrors;

    const userForm = useAppSelector((state: RootState) => state.user.userForm);
    const userFormRef = useRef(userForm);
    userFormRef.current = userForm;

    const [isFetchingData, setIsFetchingData] = React.useState<boolean>(false);

    useEffect(() => {
        const userID = pathname.split('/').pop();
        const targetUser: UserProfile | undefined = users.find(user => user.id === userID) as UserProfile | undefined;

        console.log('targetUser', targetUser);

        if (targetUser) {
            const { 
                __typename,
                createdAt,
                updatedAt,
                createdBy,
                updatedBy,
                cognitoID,
                profilePhoto,
                ...userProfile 
            } = targetUser

            dispatch(setUserForm({ 
                ...userProfile,
                password: '',
                confirmPassword: '', 
            }));
        }
    }, [pathname]);

    React.useEffect(() => {
        if (validationIsEnabled) {
            dispatch(setValidationErrors(validateUserFormInputs(userFormRef.current)));
        }
    }, [userFormRef.current, validationIsEnabled])

    const handleUpdatePassword = async (oldPassword: string, newPassword: string) => {
        try {
            await Repo.UserRepository.updatePassword({
                oldPassword: oldPassword,
                newPassword: newPassword,
            });
        } catch (error) {
            console.error('Failed to update password', error);
            toast.error('Failed to update password');
        }
    };

    const handleOnSubmit = async () => {
        console.log('handleOnSubmit', userFormRef.current);
        setIsFetchingData(true);
        setValidationIsEnabled(true);

        let isFormValid = false;
        const formData = Object.assign({}, userFormRef.current);

        if (formData.password === '' && formData.confirmPassword === '') {
            delete formData.password;
            delete formData.confirmPassword;
        }

        if (formData.profilePhoto === '') {
            delete formData.profilePhoto;
        }

        const { password, confirmPassword, ...userProfileData } = formData;

        isFormValid =
            Object.values(validationErrorsRef.current).every(value => value === null)
            && Object.values(userProfileData).every(value => value !== '');

        if (!isFormValid && password !== '' && confirmPassword !== '') {
            setIsFetchingData(false);
            toast.error('Formda hatalar var. Lütfen düzeltin');
            return;
        }

        if (password !== confirmPassword) {
            setIsFetchingData(false);
            toast.error('Şifreler eşleşmiyor');
            return;
        }

        console.log('userProfileData', userProfileData);

        
        try {
            if (password && confirmPassword) {
                console.log('updating password', password, confirmPassword);
                await handleUpdatePassword(
                    password as string,
                    confirmPassword as string
                );
            }

            await Repo.UserRepository.update(userProfileData);
            toast.success('User updated successfully');
            dispatch(resetUserForm());
            dispatch(resetValidationErrors());
            setIsFetchingData(false);
            setValidationIsEnabled(false);

            const users = await Repo.UserRepository.getAllUsers();
            dispatch(setUsers(users as UserProfile[]));
            router.push('/dashboard/users');
        } catch (error) {
            console.error('Error updating user:', error);
            toast.error('Failed to update user');
        }
    };

    return (
        <div>
            <title>Kullanıcı Güncelle - BRH Takip</title>
            <div className='space-y-3'>
                <CreateOrUpdateForm 
                    isCreate={false} 
                    onSubmitted={handleOnSubmit}
                    isFetching={isFetchingData} 
                />
            </div>
        </div>
    );
};

export default UserUpdatePage

//export default WithAuthorization([permissions.UPDATE_USERS])(UserUpdatePage);
