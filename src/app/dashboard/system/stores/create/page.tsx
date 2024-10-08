'use client';
import React, { useRef } from 'react';
import CreateOrUpdateForm from '../src/createOrUpdateForm'
import { useRouter } from 'next-nprogress-bar';
import * as Repo from '@/repository/index';
import { resetFormValues, setStores, validateForm } from '@/reduxStore/features/storeSlice';
import { toast } from 'sonner'
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useAppDispatch, useAppSelector } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { Store } from '@/API';

const CreateStorePage: React.FC = () => {
    const router = useRouter();
    const dispatch = useAppDispatch<AppDispatch>();
    const storeForm = useAppSelector((state: RootState) => state.store.storeForm);
    const storeFormRef = useRef(storeForm);
    storeFormRef.current = storeForm;

    const validationErrors = useAppSelector((state: RootState) => state.store.validationErrors);
    const validationErrorsRef = React.useRef(validationErrors);
    validationErrorsRef.current = validationErrors;

    const isValidForm = Object.values(validationErrorsRef.current).every(value => value === null);

    const handleCreateStore = async () => {
        dispatch(validateForm());
        if (!isValidForm) {
            toast.error('Lütfen formu eksiksiz doldurunuz');
            return;
        } else {
            try {
                const createStore = await Repo.StoreRepository.create(storeFormRef.current);
                if (createStore && createStore.data) {
                    const newStores = await Repo.StoreRepository.getAllStores();
                    dispatch(setStores(newStores as unknown as Store[]));
                    dispatch(resetFormValues());
                    toast.success('Mağaza başarıyla oluşturuldu');
                    router.push('/dashboard/system/stores');
                }
            } catch (error) {
                console.log('Error', error);
            }
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
