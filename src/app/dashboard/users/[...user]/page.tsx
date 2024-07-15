'use client';
import React, { useEffect, useRef } from 'react';
import { toast } from 'sonner';
import { useRouter } from 'next-nprogress-bar';
import { usePathname } from 'next/navigation';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { RootState, AppDispatch } from '@/reduxStore/store';
import { setUserForm } from '@/reduxStore/features/userSlice';
import CreateOrUpdateForm from '../src/createOrUpdateForm';
import * as Repo from '@/repository';
import withAuthorization from '../../../withAuthorization';
import { permissions } from '@/config/index';
import type { UserProfile } from '@/API';
import { idID } from '@mui/material/locale';

const UpdateUser: React.FC = () => {
    const router = useRouter();
    const pathname = usePathname();
    const dispatch = useAppDispatch<AppDispatch>();
    const users = useAppSelector((state: RootState) => state.user.users);
    const userForm = useAppSelector((state: RootState) => state.user.userForm);
    const userFormRef = useRef(userForm);

    useEffect(() => {
        const userID = pathname.split('/').pop();
        const targetUser = users.find(user => user.id === userID);

        if (targetUser) {
            userFormRef.current = { ...targetUser };
            dispatch(setUserForm({ ...targetUser }));
        }
    }, [pathname]);

    const handleUpdatePassword = async () => {
        const { password, confirmPassword } = userFormRef.current;

        if (password !== confirmPassword) {
            console.error('Passwords do not match');
            toast.error('Passwords do not match');
            return;
        }

        try {
            await Repo.UpdatePassword({ oldPassword: '', newPassword: password });
            toast.success('Password updated successfully');
        } catch (error) {
            console.error('Failed to update password', error);
            toast.error('Failed to update password');
        }
    };

    const handleOnSubmit = async () => {
        try {
            const { password, confirmPassword, ...userProfile } = userFormRef.current;

            const updateUser = await Repo.UserRepository.update(userFormRef.current);
            if (updateUser) {
                toast.success('Kullanıcı bilgileri güncellendi');
                router.push('/dashboard/users');
            }


            // if (!cognitoUser?.userId) {
            //     toast.error('Failed to create user');
            //     return;
            // }

            // userProfile.cognitoID = cognitoUser.userId;
            // const response = await Repo.UserRepository.create(userProfile);

            // if (response?.id) {
            //     toast.success('User created successfully');
            //     router.push('/dashboard/users');
            // }


            // handleUpdatePassword();
        } catch (error) {
            console.error('Error updating user:', error);
            toast.error('Failed to update user');
        }
    };

    return (
        <div>
            <title>Kullanıcı Güncelle - BRH Takip</title>
            <div className='space-y-3'>
                <CreateOrUpdateForm isCreate={false} onSubmitted={handleOnSubmit} />
            </div>
        </div>
    );
};

export default withAuthorization([permissions.UPDATE_USERS])(UpdateUser);
