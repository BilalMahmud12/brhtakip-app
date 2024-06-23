'use client'
import React, { useEffect, useRef } from 'react'
import StoresDataTable from './storesDataTable';
import { useAppDispatch, useAppSelector } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import CreateOrUpdateForm from './createOrUpdateForm';
import { useDataModal } from '@/contexts/DataModalContext';
import { resetFormValues, setStores } from '@/reduxStore/features/storeSlice';
import * as Repo from '@/repository/index';
import { Store } from '@/API';
import { useRouter } from 'next/navigation';

import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';


const StoreView: React.FC = () => {
    const { showDataModal, hideDataModal } = useDataModal();
    const dispatch = useAppDispatch<AppDispatch>();
    const router = useRouter();
    const stores = useAppSelector((state: RootState) => state.store.stores);
    const storeForm = useAppSelector((state: RootState) => state.store.storeForm);

    const storeFormRef = useRef(storeForm);
    storeFormRef.current = storeForm;

    const handleDeleteStore = async (data: any) => {
        try {
            const deleteStore = await Repo.StoreRepository.softDelete(data.originalData.id);
            if (deleteStore && deleteStore.data) {
                const newStores = await Repo.StoreRepository.getAllStores();
                dispatch(setStores(newStores as unknown as Store[]))
            }
        } catch (error) {
            console.log('Failed to delete store', error);
        }
    }

    return (
        <div className='px-6 py-3'>
            <div className='mt-1.5 shadow bg-white'>
                <div className='px-6 py-3 mb-3 flex items-center justify-between'>
                    <div className='flex items-center space-x-3'>
                        <h1 className='text-2xl font-semibold'>Mağazalar</h1>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <div className='flex items-center space-x-2'>
                            <Button
                                variant="contained"
                                startIcon={<AddIcon />}
                                onClick={() => router.push('/dashboard/system/stores/create')}
                            >
                                Mağaza Ekle
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-8 bg-white shadow'>
                <StoresDataTable
                    dataPayload={stores}
                    onDelete={handleDeleteStore}
                // handleEdit={ }
                />
            </div>
        </div>
    )
}

export default StoreView