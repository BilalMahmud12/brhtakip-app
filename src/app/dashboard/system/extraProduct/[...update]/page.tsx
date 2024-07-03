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
import { usePathname } from 'next/navigation';

const CreateExtraProductPage: React.FC = () => {
    const pathName = usePathname();
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();
    const extraProducts = useAppSelector((state: RootState) => state.extraProduct.extraProducts);
    const extraProductsForm = useAppSelector((state: RootState) => state.extraProduct.extraProductsForm);
    const extraProductsFormRef = React.useRef(extraProductsForm);
    extraProductsFormRef.current = extraProductsForm;

    useEffect(() => {
        const extraProductId = pathName?.split('/').pop();
        const targetExtraProduct = extraProducts.find(extraProduct => extraProduct.id === extraProductId);

        if (targetExtraProduct) {
            const { updatedAt, createdAt, __typename, requests, ...restOfTheExtraProduct } = targetExtraProduct;

            const updatedExtraProduct = {
                id: restOfTheExtraProduct.id || '',
                name: restOfTheExtraProduct.name || '',
                isActive: restOfTheExtraProduct.isActive || false,
            };

            extraProductsFormRef.current = updatedExtraProduct;
            dispatch(setExtraProductsForm(updatedExtraProduct));
        }
    }, [dispatch, extraProducts, pathName]);
    const handleUpdateExtraProduct = async () => {
        try {
            const updateExtraProduct = await Repo.ExtraProductRepository.update(extraProductsFormRef.current);
            if (updateExtraProduct && updateExtraProduct.data) {
                const newExtraProducts = await Repo.ExtraProductRepository.default.getAllExtraProducts();
                dispatch(setExtraProducts(newExtraProducts as unknown as ExtraProduct[]));
                toast.success('Ürun Güncellendi');
                router.push('/dashboard/system/extraProduct');
                dispatch(resetFormValues());
            }
        } catch (error) {
            console.log('Error', error);
        }
    }

    return (
        <div>
            <title>Extra Ürun Güncelle - BRH Takip</title>

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
                        onClick={handleUpdateExtraProduct}
                    >
                        Kaydı Et
                    </Button>
                </div>
            </div>

            <div className='space-y-3'>
                <CreateOrUpdateForm isCreate={false} extraProduct={extraProductsForm as unknown as ExtraProduct} />
            </div>
        </div>
    );
}

export default CreateExtraProductPage