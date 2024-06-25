'use client';
import React, { useEffect, useRef } from 'react';
import CreateOrUpdateForm from '../src/createOrUpdateForm'
import { useRouter } from 'next-nprogress-bar';
import * as Repo from '@/repository/index';
import { resetFormValues, setStores } from '@/reduxStore/features/storeSlice';

import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useAppDispatch, useAppSelector } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { Store } from '@/API';

const UpdateStorePage: React.FC = () => {
    const router = useRouter();
    const dispatch = useAppDispatch<AppDispatch>();
    const stores = useAppSelector((state: RootState) => state.store.stores);
    const storeForm = useAppSelector((state: RootState) => state.store.storeForm);
    const storeFormRef = useRef(storeForm);
    storeFormRef.current = storeForm;

    const handleCreateStore = async () => {
        try {
            const updateStore = await Repo.StoreRepository.update(storeFormRef.current);

            if (updateStore && updateStore.data) {
                const newStore = await Repo.StoreRepository.getAllStores();
                dispatch(setStores(newStore as unknown as Store[]))

                console.log('new updated store', newStore);

                dispatch(resetFormValues());
            }
        } catch (error) {
            console.log('Faield to create store', error);
        }
    }

    return (
        <div>
            <title>Mağaza Güncelle - BRH Takip</title>

            <div className='h-full'>
                <div className='h-full col-span-2'>
                    <div className='flex items-center justify-between'>
                        <Button
                            variant="text"
                            startIcon={<ArrowBackIosIcon />}
                            onClick={() => router.push('/dashboard/system/stores')}
                        >
                            Mağazalara Geri Dön
                        </Button>

                        <Button
                            variant="contained"
                            startIcon={<SaveIcon />}
                            onClick={handleCreateStore}
                        >
                            Kaydı Et
                        </Button>
                    </div>
                </div>
            </div>

            <div className='space-y-3'>
                <CreateOrUpdateForm isCreate={false} />
            </div>
        </div>
    );
}

export default UpdateStorePage
