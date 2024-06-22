'use client'
import React, { useEffect } from "react";
import { Breadcrumbs } from '@aws-amplify/ui-react';
import type { Store } from '@/API';
import * as Repo from '@/repository/index';

import { useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch } from '@/reduxStore/store';
import { setStores } from '@/reduxStore/features/storeSlice';
import StoreView from "./src/storeView";


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
    }, [])

    return (
        <div>
            <title>Mağazalar</title>

            <div><StoreView /></div>
        </div>
    )
}

export default Store