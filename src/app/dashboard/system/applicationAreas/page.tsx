'use client'
import { Breadcrumbs } from '@aws-amplify/ui-react';
import React, { useEffect } from 'react';
import ApplicationAreaView from './src/applicationAreaView';
import * as Repo from '@/repository/index';
import type { ApplicationArea } from '@/API';

import { useAppDispatch } from '@/lib/hooks';
import { AppDispatch } from '@/lib/store';
import { setApplicationAreas } from '@/lib/features/applicationAreaSlice';

const ApplicationArea: React.FC = () => {

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
    }, [dispatch, ApplicationArea])

    return (
        <div>
            <title>Uygulama Alanları</title>
            <div className='px-6 py-3 bg-zinc-50 shadow mb-4'>
                <Breadcrumbs
                    items={[
                        {
                            href: '/dashboard',
                            label: 'Panel Girişi',
                        },
                        {
                            href: '/dashboard/system',
                            label: 'System',
                        },
                        {
                            href: '/dashboard/system/applicationArea',
                            label: 'Uygulama Alanları',
                        }
                    ]}
                    className='text-sm font-medium'
                />
            </div>
            <div>
                <ApplicationAreaView />
            </div>
        </div>
    )
}

export default ApplicationArea;

//ApplicationArea