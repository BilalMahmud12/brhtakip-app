'use client'
import React, { useEffect, useRef } from 'react';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { handleFormChange } from '@/reduxStore/features/userSlice';
import TextField from '@mui/material/TextField';

const PasswordForm: React.FC = () => {
    const dispatch = useAppDispatch<AppDispatch>();
    return (
        <form className='h-full p-6 bg-white shadow'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                <div className='input-group w-full'>
                    <label htmlFor="password" className='block text-xs font-medium mb-1.5'>Password *</label>
                    <TextField
                        id='password'
                        variant="standard"
                        sx={{ width: '100%' }}
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
                    <label htmlFor="confirmPassword" className='block text-xs font-medium mb-1.5'>Confirm Password *</label>
                    <TextField
                        id='confirmPassword'
                        variant="standard"
                        sx={{ width: '100%' }}
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
        </form>
    );
};

export default PasswordForm;
