'use client'
import React, { useEffect, useState } from 'react';
import * as Repo from '@/repository/index';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { handleFormChange } from '@/reduxStore/features/requestSlice';
import AutoComplete from '@/components/core/autoComplete';
import { AutocompleteChangeReason } from '@mui/material';
import Alert from '@mui/material/Alert';

type StoreOption = {
    label: string;
    value: string;
    address: string | null | undefined;
};

const RequestStore: React.FC = () => {
    const dispatch = useAppDispatch<AppDispatch>();
    const requestForm = useAppSelector((state: RootState) => state.request.requestForm);

    const [storeOptions, setStoreOptions] = useState<StoreOption[]>([]);
    const [selectedStore, setSelectedStore] = useState<StoreOption | null>(null);

    useEffect(() => {
        const getStoreOptions = async () => {
            const stores = await Repo.StoreRepository.getAllStores();
            const storeOptions = stores?.map(store => ({
                value: store.id,
                label: store.name,
                address: store.address
            })) || [];
            setStoreOptions(storeOptions);

            const currentStore = storeOptions.find(store => store.value === requestForm.storeID) || null;
            setSelectedStore(currentStore);
        };
        getStoreOptions();
    }, [requestForm.storeID]);

    const handleStoreChange = (option: StoreOption | null, reason: AutocompleteChangeReason) => {
        if (reason === 'clear' || !option) {
            setSelectedStore(null);
            dispatch(handleFormChange({ key: 'storeID', value: '' }));
        } else {
            setSelectedStore(option);
            dispatch(handleFormChange({ key: 'storeID', value: option.value }));
        }
    };

    const renderStoreOption = (props: any, option: StoreOption) => (
        <div {...props} key={option.value}>
            <div className='flex flex-col'>
                <div>{option.label}</div>
                <div>
                    <small>{option.address}</small>
                </div>
            </div>
        </div>
    );

    return (
        <React.Fragment>
            <h2 className='text-base font-semibold mb-6'>Mağaza Bilgileri</h2>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8 mb-4'>
                <div className='input-group w-full col-span-2'>
                    <label htmlFor="storeName" className='block text-xs font-medium mb-1.5'>Mağaza Adı</label>

                    <AutoComplete<StoreOption>
                        id='storeName'
                        options={storeOptions}
                        value={selectedStore ? selectedStore.value : ''}
                        variant="standard"
                        handleOnChange={handleStoreChange}
                        renderOption={renderStoreOption}
                    />
                </div>
            </div>

                {selectedStore && (
                    <Alert severity="success">
                        <div>
                            <div className='font-semibold'>{selectedStore.label}</div>
                            <div>{selectedStore.address}</div>
                        </div>
                    </Alert>
                )}
        </React.Fragment>
    )
}

export default RequestStore;
