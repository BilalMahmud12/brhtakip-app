'use client'
import React, { useEffect } from 'react'
import * as Repo from '@/repository/index'
import type { Store } from '@/API';
import { useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch } from '@/reduxStore/store';
import { setStores, setFetching } from '@/reduxStore/features/storeSlice'

export default function StoreLayout(
    { children }: { children: React.ReactNode }
) {
    const dispatch = useAppDispatch<AppDispatch>();
    useEffect(() => {
        const fetchData = async () => {
            dispatch(setFetching(true));
            try {
                const storeData = await Repo.StoreRepository.getAllStores();

                if (storeData) {
                    dispatch(setStores(storeData as unknown as Store[]));
                    console.log('store data', storeData);
                }

                dispatch(setFetching(false));
            } catch (error) {
                console.error('Failed to fetch store', error);
            }
        }
        fetchData();
    })
    return (
        <div>
            {children}
        </div>
    )
}