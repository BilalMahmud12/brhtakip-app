'use client'
import React, { useEffect } from "react";
import { Breadcrumbs } from '@aws-amplify/ui-react';
import type { Store } from '@/API';
import * as Repo from '@/repository/index';

import { useAppDispatch } from '@/lib/hooks';
import { AppDispatch } from '@/lib/store';
import { setStores } from '@/lib/features/storeSlice';


const Store: React.FC = () => {
    const dispatch = useAppDispatch<AppDispatch>();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const storeData = await Repo.StoreRepository.getAllStores();
                dispatch(setStores(storeData as unknown as Store[]));
                console.log('store data', storeData);
            } catch (error) {
                console.error('Failed to fetch store', error);
            }
        };
        fetchData();
    }, [dispatch, Store])

    return (
        <div>
            <title>Mağazalar</title>
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
                            href: '/dashboard/system/mağazalar',
                            label: 'Mağazalar',
                        }
                    ]}
                    className='text-sm font-medium'
                />
            </div>
        </div>
    )
}

export default Store

// Mağazalar


// mağazalar