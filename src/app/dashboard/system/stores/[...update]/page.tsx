'use client';
import React, { useEffect, useRef } from 'react';
import CreateOrUpdateForm from '../src/createOrUpdateForm'
import { useRouter } from 'next-nprogress-bar';
import * as Repo from '@/repository/index';
import { resetFormValues, setStores, setStoreForm, validateForm } from '@/reduxStore/features/storeSlice';
import { toast } from 'sonner'
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useAppDispatch, useAppSelector } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { Store } from '@/API';
import { usePathname } from 'next/navigation';

const UpdateStorePage: React.FC = () => {
    const pathName = usePathname();
    const router = useRouter();
    const dispatch = useAppDispatch<AppDispatch>();
    const stores = useAppSelector((state: RootState) => state.store.stores);
    const storeForm = useAppSelector((state: RootState) => state.store.storeForm);
    const storeFormRef = useRef(storeForm);
    storeFormRef.current = storeForm;

    const validationErrors = useAppSelector((state: RootState) => state.store.validationErrors);
    const validationErrorsRef = React.useRef(validationErrors);
    validationErrorsRef.current = validationErrors;

    const isValidForm = Object.values(validationErrorsRef.current).every(value => value === null);

    useEffect(() => {
        const storeID = pathName.split('/').pop();
        const targetStore = stores.find((store) => store.id === storeID);

        if (targetStore) {
            const { updatedAt, createdAt, __typename, ...restOfTheStore } = targetStore;

            const updatedStore = {
                id: restOfTheStore.id || '',
                name: restOfTheStore.name || '',
                cityID: restOfTheStore.cityID || '',
                districtID: restOfTheStore.districtID || '',
                areaID: restOfTheStore.areaID || '',
                address: restOfTheStore.address || '',
                phones: (restOfTheStore.phones || []).filter(phone => phone !== null).join(', ') || '',
                email: (restOfTheStore.email || []).filter(email => email !== null).join(', ') || '',
                notes: restOfTheStore.notes || '',
            };

            storeFormRef.current = updatedStore;
            dispatch(setStoreForm(updatedStore));
        }
    }, [pathName, stores, dispatch]);

    const handleCreateStore = async () => {
        dispatch(validateForm());

        if (!isValidForm) {
            toast.error('Lütfen formu eksiksiz doldurunuz');
            return;
        } else {
            try {
                const updateStore = await Repo.StoreRepository.update(storeFormRef.current);
                if (updateStore && updateStore.data) {
                    const newStores = await Repo.StoreRepository.getAllStores();
                    dispatch(setStores(newStores as unknown as Store[]));
                    dispatch(resetFormValues());
                    toast.success('Mağaza güncellendi');
                    router.push('/dashboard/system/stores');
                }
            } catch (error) {
                console.log('Error', error);
            }
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
                            onClick={() => router.back()}
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
                <CreateOrUpdateForm
                    isCreate={false}
                    store={storeForm as unknown as Store}
                />
            </div>
        </div>
    );
}

export default UpdateStorePage
