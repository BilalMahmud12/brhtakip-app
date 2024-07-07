'use client'
import React, { useEffect, useRef } from 'react';
import { permissions } from '@/config/index';
import * as Repo from '@/repository';
import { useAppDispatch, useAppSelector } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { setUsers, setIsFetching } from '@/reduxStore/features/userSlice';
import UpdateForm from './updateForm';
import { useRouter } from 'next-nprogress-bar';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { toast } from 'sonner';
import PasswordForm from './passwordForm';

const UserProfileView: React.FC = () => {
    const router = useRouter();
    const dispatch = useAppDispatch<AppDispatch>();
    const userForm = useAppSelector((state: RootState) => state.user.userForm);
    const userFormRef = useRef(userForm);
    userFormRef.current = userForm;

    const handleUpdateUser = async () => {
        const { password, confirmPassword, ...userProfile } = userFormRef.current;
        try {
            const updateUser = await Repo.UserRepository.update(userProfile);
            if (updateUser) {
                toast.success('Kullanıcı bilgileri güncellendi');
                router.refresh();
            }
        } catch (error) {
            console.log('Error', error);
        }
    };

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


    return (
        <div>
            <div className="mb-8">
                <div className='mb-4 space-y-5'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center space-x-3'>
                            <h1 className='text-2xl font-semibold'>Profilim</h1>
                        </div>
                        <div className='flex items-center space-x-3'>
                            <div className='flex items-center space-x-2'>
                                <Button
                                    variant="contained"
                                    startIcon={<AddIcon />}
                                    onClick={handleUpdateUser}
                                >
                                    Kaydı Et
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className='mt-8 bg-white shadow'>
                        <UpdateForm />
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <div className='mb-4 space-y-5'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center space-x-3'>
                            <h1 className='text-2xl font-semibold'>Şifreyi güncelle</h1>
                        </div>
                        <div className='flex items-center space-x-3'>
                            <div className='flex items-center space-x-2'>
                                <Button
                                    variant="contained"
                                    startIcon={<AddIcon />}
                                    onClick={handleUpdatePassword}
                                >
                                    Kaydı Et
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className='mt-8 bg-white shadow'>
                        <PasswordForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfileView;
