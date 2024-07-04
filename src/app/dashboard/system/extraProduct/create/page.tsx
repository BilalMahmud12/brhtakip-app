'use client';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next-nprogress-bar';
import * as Repo from '@/repository/index';
import CreateOrUpdateForm from '../src/createOrUpdateForm';
import { setExtraProducts, resetFormValues, setExtraProductsForm } from '@/reduxStore/features/extraProductSlice';
import { RootState, AppDispatch } from '@/reduxStore/store';
import { toast } from 'sonner'
import { ExtraProduct } from '@/API';
import { useAppSelector } from '@/reduxStore/hooks';

import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const CreateExtraProductPage: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const extraProductsForm = useAppSelector((state: RootState) => state.extraProduct.extraProductsForm);
    const extraProductsFormRef = React.useRef(extraProductsForm);
    extraProductsFormRef.current = extraProductsForm;
    const handleCreateExtraProduct = async () => {
        try {
            const createExtraProduct = await Repo.ExtraProductRepository.create(extraProductsFormRef.current);
            if (createExtraProduct) {
                const newExtraProducts = await Repo.ExtraProductRepository.getAllExtraProducts();
                dispatch(setExtraProducts(newExtraProducts as unknown as ExtraProduct[]));
                toast.success('Ürun Eklendi');
                router.push('/dashboard/system/extraProduct');
                dispatch(resetFormValues());
            }
        } catch (error) {
            console.log('Error', error);
        }
    }

    return (
        <div>
            <title>Extra Ürun Ekle - BRH Takip</title>

            <div className='h-full col-span-2'>
                <div className='flex items-center justify-between'>
                    <Button
                        variant="text"
                        startIcon={<ArrowBackIosIcon />}
                        onClick={() => { router.push('/dashboard/system/extraProduct'); dispatch(resetFormValues()); }}
                    >
                        Ürunlere Geri Dön
                    </Button>

                    <Button
                        variant="contained"
                        startIcon={<SaveIcon />}
                        onClick={handleCreateExtraProduct}
                    >
                        Kaydı Et
                    </Button>
                </div>
            </div>

            <div className='space-y-3'>
                <CreateOrUpdateForm isCreate={true} />
            </div>
        </div>
    );
}

export default CreateExtraProductPage