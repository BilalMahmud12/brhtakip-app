'use client';
import React, { useEffect, useRef } from 'react';
import CreateOrUpdateForm from '../src/createOrUpdateForm'
import { useRouter } from 'next-nprogress-bar';
import * as Repo from '@/repository/index';
import { resetFormValues, setStores, handleFormChange } from '@/reduxStore/features/storeSlice';

import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useAppDispatch, useAppSelector } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { Store } from '@/API';

const CreateStorePage: React.FC = () => {
    const router = useRouter();
    const dispatch = useAppDispatch<AppDispatch>();
    const stores = useAppSelector((state: RootState) => state.store.stores);
    const storeForm = useAppSelector((state: RootState) => state.store.storeForm);
    const errors = useAppSelector((state: RootState) => state.store.errors);
    const storeFormRef = useRef(storeForm);
    storeFormRef.current = storeForm;

    const handleCreateStore = async () => {
        if (
            !errors.name && storeFormRef.current.name.trim() !== '' &&
            !errors.address && storeFormRef.current.address?.trim() !== '' &&
            !errors.email && storeFormRef.current.email?.trim() !== '' &&
            !errors.phones && storeFormRef.current.phones?.trim() !== ''
        ) {
            try {
                const createStore = await Repo.StoreRepository.create(storeFormRef.current);

                if (createStore && createStore.data) {
                    const newStore = await Repo.StoreRepository.getAllStores();
                    dispatch(setStores(newStore as unknown as Store[]));
                    router.back();
                    dispatch(resetFormValues());
                }
            } catch (error) {
                console.log('Failed to create store', error);
            }
        } else {
            dispatch(handleFormChange({ key: 'name', value: storeFormRef.current.name }));
            dispatch(handleFormChange({ key: 'address', value: storeFormRef.current.address || '' }));
            dispatch(handleFormChange({ key: 'email', value: storeFormRef.current.email || '' }));
            dispatch(handleFormChange({ key: 'phones', value: storeFormRef.current.phones || '' }));
        }
    };


    return (
        <div>
            <title>Mağaza Ekle - BRH Takip</title>

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
                <CreateOrUpdateForm isCreate={true} />
            </div>
        </div>
    );
}

export default CreateStorePage
