'use client'
import React, { useEffect, useRef } from 'react';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { handleFormChange } from '@/reduxStore/features/userSlice';
import Avatar from '@mui/material/Avatar';
const UserProfilePhoto: React.FC = () => {
    const dispatch = useAppDispatch<AppDispatch>();
    const currentUserProfile = useAppSelector((state: RootState) => state.global.currentUserProfile);
    const currentUserProfileRef = useRef(currentUserProfile);
    currentUserProfileRef.current = currentUserProfile;

    return (
        <div>
            <div className='flex flex-col items-center mb-4'>
                <Avatar
                    alt={currentUserProfile?.firstName || 'User Profile'}
                    sx={{ width: 100, height: 100 }}
                />
                <p className='mt-2 text-center text-s font-medium'>{currentUserProfile?.email}</p>
            </div>
        </div>
    );
};

export default UserProfilePhoto;
