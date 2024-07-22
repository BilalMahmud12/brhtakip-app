'use client'
import React, { useEffect } from 'react'
import * as Repo from '@/repository/index'
import type { ClientProfile } from '@/API';
import { useAppDispatch } from '@/reduxStore/hooks';
import { setClientProfiles, setIsFetching } from '@/reduxStore/features/clientSlice'

export default function ClientProfileLayout({ children }: { children: React.ReactNode }) {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchData = async () => {
            dispatch(setIsFetching(true));
            try {
                const clientProfileData = await Repo.ClientProfileRepository.getClientProfiles();

                if (clientProfileData) {
                    dispatch(setClientProfiles(clientProfileData as unknown as ClientProfile[]));
                    console.log('client profile data', clientProfileData);
                }
            } catch (error) {
                console.error('Failed to fetch client profile', error);
            }
            dispatch(setIsFetching(false));
        }
        fetchData();
    }, [])

    return (
        <div>
            {children}
        </div>
    )
}