'use client'
import React, { useEffect, useRef } from 'react';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { handleFormChange } from '@/reduxStore/features/userSlice';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import PasswordForm from './passwordForm';
import { Button } from '@mui/material';
import { UserProfile } from '@/API';

const UpdateForm: React.FC = () => {
    const dispatch = useAppDispatch<AppDispatch>();
    const currentUserProfile = useAppSelector((state: RootState) => state.global.currentUserProfile);
    const currentUserProfileRef = useRef(currentUserProfile);
    currentUserProfileRef.current = currentUserProfile;

    const setUserForm = (user: typeof currentUserProfile) => {
        if (user) {
            const { id, firstName, lastName, email, role } = user;
            dispatch(handleFormChange({ key: 'id', value: id }));
            dispatch(handleFormChange({ key: 'firstName', value: firstName as string }));
            dispatch(handleFormChange({ key: 'lastName', value: lastName as string }));
            dispatch(handleFormChange({ key: 'email', value: email as string }));
            dispatch(handleFormChange({ key: 'role', value: role as string }));
        }
    };

    useEffect(() => {
        setUserForm(currentUserProfile);
    }, [currentUserProfile]);

    return (
        <div>
            <form>
                <div className='h-full p-6 bg-white shadow'>
                    <div className='flex flex-col items-center mb-4'>
                        <Avatar
                            alt={currentUserProfile?.firstName || 'User Profile'}
                            sx={{ width: 100, height: 100 }}
                        />
                        <p className='mt-2 text-center text-s font-medium'>{currentUserProfile?.email}</p>
                    </div>

                    <div className='my-2 pt-3' />

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                        <div className='col-span-2 sm:col-span-1'>
                            <div className='input-group w-full'>
                                <label htmlFor="firstName" className='block text-xs font-medium mb-1.5'>First Name</label>
                                <TextField
                                    id='firstName'
                                    variant="standard"
                                    sx={{ width: '100%' }}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        const value = event.target.value;
                                        dispatch(handleFormChange({ key: 'firstName', value }));
                                    }}
                                    defaultValue={currentUserProfile?.firstName}
                                />
                            </div>
                        </div>

                        <div className='col-span-2 sm:col-span-1'>
                            <div className='input-group w-full'>
                                <label htmlFor="lastName" className='block text-xs font-medium mb-1.5'>Last Name</label>
                                <TextField
                                    id='lastName'
                                    variant="standard"
                                    sx={{ width: '100%' }}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        const value = event.target.value;
                                        dispatch(handleFormChange({ key: 'lastName', value }));
                                    }}
                                    defaultValue={currentUserProfile?.lastName}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdateForm;
