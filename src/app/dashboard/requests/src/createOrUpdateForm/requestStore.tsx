'use client'
import React, { useEffect, useState, useMemo } from 'react';
import * as Repo from '@/repository/index';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { handleFormChange } from '@/reduxStore/features/requestSlice';
import AutoComplete from '@/components/core/autoComplete';
import { AutocompleteChangeReason } from '@mui/material';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';

type StoreOption = {
    label: string;
    value: string;
    address: string | null | undefined;
};

const RequestStore: React.FC = () => {
    const dispatch = useAppDispatch<AppDispatch>();
    const requestForm = useAppSelector((state: RootState) => state.request.requestForm);

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [stores, setStores] = useState<StoreOption[]>([]);
    const [selectedStore, setSelectedStore] = useState<StoreOption | null>(null);

    const storeOptions = useMemo(() => {
        return stores || [];
    }, [stores]);

    useEffect(() => {
        let isMounted = true;  // To ensure we only set state if the component is still mounted

        const getAndSetStoreOptions = async () => {
            try {
                setIsLoading(true); // Start loading
                const fetchedStores = await Repo.StoreRepository.getAllStores();

                const storeOptions = fetchedStores?.map(store => ({
                    value: store.id,
                    label: store.name,
                    address: store.address
                })) || [];

                if (isMounted) {
                    setStores(storeOptions);

                    // Set the store based on requestForm.storeID after stores have been updated
                    const currentStore = storeOptions.find(store => store.value === requestForm.storeID) || null;

                    console.log('Fetched and selected currentStore:', currentStore);
                    setSelectedStore(currentStore);
                }
            } catch (error) {
                console.error("Error fetching stores:", error);
            } finally {
                if (isMounted) {
                    setIsLoading(false);  // End loading
                }
            }
        };

        getAndSetStoreOptions();

        // Cleanup to avoid setting state on unmounted component
        return () => {
            isMounted = false;
        };

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
            <h2 className='text-base font-semibold mb-12'>Mağaza Bilgileri</h2>

            <div className='relative'>
                {isLoading && (
                    <div className='absolute z-50 w-full h-full top-0 left-0 bg-white/50'>
                        <div className='flex items-center justify-center h-full w-full'>
                            <CircularProgress size={40} />
                        </div>
                    </div>
                )}

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8 mb-4'>
                    <div className='input-group w-full col-span-2'>
                        <label htmlFor="storeName" className='block text-xs font-medium text-zinc-500 mb-1.5'>Mağaza Adı</label>

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
            </div>
        </React.Fragment>
    )
}

export default RequestStore;
