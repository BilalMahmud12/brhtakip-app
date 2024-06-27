'use client'
import React, { useEffect } from 'react'
import * as Repo from '@/repository/index'
import type { ApplicationArea } from '@/API';
import { useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch } from '@/reduxStore/store';
import { setApplicationAreas } from '@/reduxStore/features/applicationAreaSlice'


export default function ApplicationAreaLayout(
    { children }: { children: React.ReactNode }
) {

    const dispatch = useAppDispatch<AppDispatch>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const applicationAreaData = await Repo.ApplicationAreaRepository.getApplicationAreas();
                dispatch(setApplicationAreas(applicationAreaData as unknown as ApplicationArea[]));
                console.log('application Area Data', applicationAreaData);
            } catch (error) {
                console.error('Failed to fetch brands', error);
            }
        };
        fetchData();
    }, [dispatch])

    return (
        <div>
            {children}
        </div>
    );
}