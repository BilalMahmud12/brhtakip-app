'use client'
import React, { useEffect } from 'react'
import * as Repo from '@/repository/index'
import type { ClientProfile } from '@/API';
import { useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch } from '@/reduxStore/store';
import { setClientProfiles } from '@/reduxStore/features/clientSlice'

export default function ClientProfileLayout({ children }: { children: React.ReactNode }) {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const clientProfileData = await Repo.ClientProfileRepository.getClientProfiles();
                dispatch(setClientProfiles(clientProfileData as unknown as ClientProfile[]));
                console.log('client profile data', clientProfileData);
            } catch (error) {
                console.error('Failed to fetch client profile', error);
            }
        }
        fetchData();
    }, [dispatch])

    return (
        <div>
            {children}
        </div>
    )
}