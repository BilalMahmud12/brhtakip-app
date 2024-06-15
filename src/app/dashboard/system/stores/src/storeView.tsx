'use client'
import React, { useEffect, useRef } from 'react'
import { Button } from '@aws-amplify/ui-react';
import StoresDataTable from './storesDataTable';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { AppDispatch, RootState } from '@/lib/store';
import CreateOrUpdateForm from './createOrUpdateForm';
import { useDataModal } from '@/contexts/DataModalContext';
import { resetFormValues, setStores } from '@/lib/features/storeSlice';
import * as Repo from '@/repository/index';
import { Store } from '@/API';


const ModalCustomFooter = (
    props: {
        type: 'create' | 'update'
        handleCreate?: (data: any) => void;
        handleUpdate?: (data: any) => void;
        handleCancel?: () => void;
    }
) => {
    const {
        type,
        handleCreate = () => { },
        handleUpdate = () => { },
        handleCancel = () => { },
    } = props;

    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-3'>
                <Button
                    variation="primary"
                    colorTheme="success"
                    size="small"
                    loadingText=""
                    onClick={handleCancel}
                    className='rounded-none bg-transparent text-gray-800 px-6 font-bold'
                >
                    <span>İPTAL ET</span>
                </Button>

                <Button
                    variation="primary"
                    colorTheme="success"
                    size="small"
                    loadingText=""
                    onClick={handleCreate}
                    className='rounded-none bg-amber-500 text-zinc-800 font-bold px-6'
                >
                    <span className='flex items-center space-x-2'>
                        <span>ONAYLA</span>
                    </span>
                </Button>
            </div>
        </div>
    )
}

const StoreView: React.FC = () => {
    const { showDataModal, hideDataModal } = useDataModal();
    const dispatch = useAppDispatch<AppDispatch>();

    const stores = useAppSelector((state: RootState) => state.store.stores);
    const storeForm = useAppSelector((state: RootState) => state.store.storeForm);

    const storeFormRef = useRef(storeForm);

    useEffect(() => {
        storeFormRef.current = storeForm;
    }, [storeForm])

    const handleCreateForm = () => {
        showDataModal(
            <div><span className='text-base font-bold'>Yeni Mağaza Ekle</span></div>,
            <CreateOrUpdateForm
                isCreate={true}
            />,
            <ModalCustomFooter
                type='create'
                handleCancel={handleCancelForm}
                handleCreate={handleCreateStore}
            />

        );
    };

    const handleCreateStore = async () => {
        try {
            const createStore = await Repo.StoreRepository.create(storeFormRef.current);

            if (createStore && createStore.data) {
                const newStore = await Repo.StoreRepository.getAllStores();
                dispatch(setStores(newStore as unknown as Store[]))
                console.log('new created store', newStore);
                hideDataModal();
                dispatch(resetFormValues());
            }
        } catch (error) {
            console.log('Faield to create store', error);
        }
    }

    const handleCancelForm = () => {
        dispatch(resetFormValues());
        hideDataModal();
    };

    return (
        <div className='px-6 py-3'>
            <div className='mt-1.5 shadow bg-white'>
                <div className='px-6 py-3 mb-3 flex items-center justify-between'>
                    <div className='flex items-center space-x-2'>
                        <div className='flex items-center space-x-2'>
                            <Button
                                variation="primary"
                                colorTheme="success"
                                size="small"
                                loadingText=""
                                onClick={handleCreateForm}
                                className='rounded-none bg-amber-500 text-gray-800 px-6'
                            >
                                <span>Mağaza Ekle</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-8 bg-white shadow'>
                <StoresDataTable
                    dataPayload={stores}
                // onDelete={ }
                // handleEdit={ }
                />
            </div>
        </div>
    )
}

export default StoreView