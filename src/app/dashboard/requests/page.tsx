'use client';
import React, { useEffect } from 'react';
import { useStore } from '@/stores/useStore';
import { observer } from 'mobx-react-lite';
import RequestsView from './src/requestsView';
import { Breadcrumbs } from '@aws-amplify/ui-react'
import { requests } from '@/data';

const Request: React.FC = observer(() => {
    const { requestStore } = useStore();

    useEffect(() => {
        requestStore.setRequests(requests);
    }, []);

    return (
        <div>
            <title>Talepler Yönetimi - BRH Takip</title>

            <div className='px-6 py-3 bg-zinc-50 shadow mb-4'>
                <Breadcrumbs
                    items={[
                        {
                            href: '/dashboard',
                            label: 'Panel Girişi',
                        },
                        {
                            href: '/dashboard/requests',
                            label: 'Talepler',
                        }
                    ]}
                    className='text-sm font-medium'
                />
            </div>

            <RequestsView />
        </div>
    );
})

export default Request;