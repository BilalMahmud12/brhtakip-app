'use client'
import React, { useRef, useState } from 'react';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { handleFormChange } from '@/reduxStore/features/userSlice';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { uploadProfilePhoto } from '@/repository/user.repository';

const UserProfilePhoto: React.FC = () => {
    const dispatch = useAppDispatch<AppDispatch>();
    const currentUserProfile = useAppSelector((state: RootState) => state.global.currentUserProfile);
    const currentUserProfileRef = useRef(currentUserProfile);
    currentUserProfileRef.current = currentUserProfile;
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        setUploading(true);

        try {
            const profilePhotoPath = await uploadProfilePhoto(
                currentUserProfile?.id,
                file,
                (progress) => setProgress(progress)
            );

            console.log('Succeeded: ', profilePhotoPath);
            dispatch(handleFormChange({ key: 'profilePhoto', value: profilePhotoPath }));
        } catch (error) {
            console.log('Error: ', error);
        } finally {
            setUploading(false);
            setProgress(0);
        }
    };

    return (
        <div>
            <div className='flex flex-col items-center mb-4'>
                <Avatar
                    alt={currentUserProfile?.firstName || 'User Profile'}
                    src={currentUserProfile?.profilePhoto || ''}
                    sx={{ width: 100, height: 100 }}
                />
                <p className='mt-2 text-center text-s font-medium'>{currentUserProfile?.email}</p>
            </div>
            <Button
                variant="contained"
                component="label"
                disabled={uploading}
            >
                {uploading ? 'Uploading...' : 'Upload Photo'}
                <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleFileChange}
                />
            </Button>
            {uploading && <p>Uploading: {progress}%</p>}
        </div>
    );
};

export default UserProfilePhoto;
