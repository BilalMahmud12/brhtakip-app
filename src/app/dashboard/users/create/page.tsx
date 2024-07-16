'use client'
import React from 'react';
import { permissions } from '@/config/index';
import withAuthorization from '../../../withAuthorization';
import { useAppDispatch, useAppSelector } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import CreateOrUpdateForm from '../src/createOrUpdateForm';
import * as Repo from '@/repository';
import { toast } from 'sonner';
import { useRouter } from 'next-nprogress-bar';
import { validateForm } from '@/reduxStore/features/userSlice';

const UserCreatePage: React.FC = () => {
    const router = useRouter();
    const dispatch = useAppDispatch<AppDispatch>();
    const userForm = useAppSelector((state: RootState) => state.user.userForm);
    const userFormRef = React.useRef(userForm);
    userFormRef.current = userForm;

    const isValidForm = Object.values(userFormRef.current).every(value => value === null);

    const handleOnSubmit = async () => {
        dispatch(validateForm());
        const { password, confirmPassword, ...userProfile } = userFormRef.current;
        if (password !== confirmPassword) {
            toast.error('Şifreler eşleşmiyor');
            return;
        }

        if (!isValidForm) {
            toast.error('Lütfen formu eksiksiz doldurunuz');
            return;
        }

        try {
            // Sign up user
            const cognitoUser = await Repo.UserRepository.signUserUp({
                username: userProfile.email as string,
                password: password as string,
                email: userProfile.email as string,
                name: `${userProfile.firstName} ${userProfile.lastName}`
            });

            if (!cognitoUser?.userId) {
                toast.error('Kullanıcı oluşturulurken bir hata oluştu');
                return;
            }

            userProfile.cognitoID = cognitoUser.userId;

            // Create user profile
            const { id, ...cleanedUserProfile } = userProfile;
            const response = await Repo.UserRepository.create(cleanedUserProfile);

            if (response?.id) {
                toast.success('Kullanıcı başarıyla oluşturuldu');
                router.push('/dashboard/users');
            }
        } catch (error) {
            console.error(error);
            toast.error('Kullanıcı oluşturulurken bir hata oluştu');
        }
    }

    return (
        <div>
            <title>Kullanıcı Ekle - BRH Takip</title>

            <div className='space-y-3'>
                <CreateOrUpdateForm isCreate={true} onSubmitted={handleOnSubmit} />
            </div>
        </div>
    )
}

export default withAuthorization([permissions.CREATE_USERS])(UserCreatePage);
