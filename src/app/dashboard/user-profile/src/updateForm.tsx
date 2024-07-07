'use client'
import React, { useEffect, useRef, useState } from 'react';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { handleFormChange } from '@/reduxStore/features/userSlice';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';
import { UserProfile } from '@/API';

interface UpdateFormProps { }

const UpdateForm: React.FC<UpdateFormProps> = () => {
    const dispatch = useAppDispatch<AppDispatch>();
    // const userForm = useAppSelector((state: RootState) => state.user.userForm);
    const currentUserProfile = useAppSelector((state: RootState) => state.global.currentUserProfile);
    const currentUserProfileRef = useRef(currentUserProfile);
    currentUserProfileRef.current = currentUserProfile;
    // Function to set user form fields
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

    // Update form fields when currentUserProfile changes
    useEffect(() => {
        setUserForm(currentUserProfile);
    }, [currentUserProfile]);

    return (
        <div className='h-full p-6 bg-white shadow'>
            <div className='flex flex-col items-center mb-4'>
                <Avatar
                    alt={currentUserProfile?.firstName || 'User Profile'}
                    sx={{ width: 100, height: 100 }}
                />
                <p className='mt-2 text-center text-s font-medium'>{currentUserProfile?.email}</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>

                <div className='col-span-2 sm:col-span-1'>
                    <div className='input-group w-full'>
                        <label htmlFor="firstName" className='block text-xs font-medium mb-1.5'>Ad</label>
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
                        <label htmlFor="lastName" className='block text-xs font-medium mb-1.5'>Soyad</label>
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

                <div className='input-group w-full'>
                    <label htmlFor="password" className='block text-xs font-medium mb-1.5'>Şifre *</label>
                    <TextField
                        id='password'
                        variant="standard"
                        sx={{ width: '100%' }}
                        helperText={''}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            dispatch(handleFormChange({
                                key: 'password',
                                value: event.target.value
                            }))
                        }}
                        type='password'
                        autoComplete='new-password'
                    />
                </div>

                <div className='input-group w-full'>
                    <label htmlFor="confirmPassword" className='block text-xs font-medium mb-1.5'>Şifre Tekrar *</label>
                    <TextField
                        id='confirmPassword'
                        variant="standard"
                        sx={{ width: '100%' }}
                        helperText={''}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            dispatch(handleFormChange({
                                key: 'confirmPassword',
                                value: event.target.value
                            }))
                        }}
                        type='password'
                        autoComplete='new-password'
                    />
                </div>
            </div>
        </div>
    );
};

export default UpdateForm;
