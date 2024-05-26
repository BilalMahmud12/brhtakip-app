'use client';
import * as Repo from '@/repository/index'
import React, { useEffect } from 'react';
import { useStore } from '@/stores/useStore';
import { observer } from 'mobx-react-lite';
import RequestsView from './src/requestsView';
import { Breadcrumbs } from '@aws-amplify/ui-react'
import { requests } from '@/data';
import type { Brand, Request } from '@/API';


import { generateRequestNumber } from '@/utils/helpers';

import { client } from '@/repository';
import { listClientProfiles } from '@/graphql/queries';


const Request: React.FC = observer(() => {
    const { requestStore } = useStore();

    useEffect(() => {
        const fetchData = async () => {
            const requestsData = await Repo.RequestRepository.getAllRequests();
            requestStore.initStore({ requests: [...requests, ...requestsData as unknown as Request[]] });

            console.log('requests', [...requests, ...requestsData as unknown as Request[]]);
            console.log('requests Numer', generateRequestNumber());
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await client.graphql({ query: listClientProfiles });
            console.log('listClientProfiles', data);
        };
        fetchData();
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