'use client'
import React, { useEffect } from 'react'
import { permissions } from '@/config/index';
import * as Repo from '@/repository'
import { useAppDispatch, useAppSelector } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { setUsers, setIsFetching } from '@/reduxStore/features/userSlice';
import { UserProfile } from '@/API';

export default function UserProfileLayout({ children }: { children: React.ReactNode }) {
    const dispatch = useAppDispatch<AppDispatch>();
    const currentUserProfile = useAppSelector((state: RootState) => state.global.currentUserProfile);
    return (
        <>
            {children}
        </>
    )
}