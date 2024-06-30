'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Product } from '@/API';
import { useAppDispatch, useAppSelector } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import * as Repo from '@/repository/index';
import { setProducts, resetProductFormValues, validateForm } from '@/reduxStore/features/productSlice';
import CreateOrUpdateForm from '../src/createOrUpdateForm';

import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useRouter } from 'next-nprogress-bar';
import { toast } from 'sonner';

const UpdateProductPage: React.FC = () => {
    const router = useRouter()
    const dispatch = useAppDispatch<AppDispatch>();
    const products = useAppSelector((state: RootState) => state.product.products);
    const productForm = useAppSelector((state: RootState) => state.product.productForm);
    const productFormRef = useRef(productForm);
    productFormRef.current = productForm;

    const validationErrors = useAppSelector((state: RootState) => state.product.validationErrors);
    const validationErrorsRef = React.useRef(validationErrors);
    validationErrorsRef.current = validationErrors;

    const isValidForm = Object.values(validationErrorsRef.current).every(value => value === null);

    const handleCreateProduct = async () => {
        dispatch(validateForm());
        if (!isValidForm) {
            toast.error('Lütfen formu eksiksiz doldurunuz');
            return;
        } else {
            try {
                const createProduct = await Repo.ProductRepository.create(productFormRef.current);
                if (createProduct && createProduct.data) {
                    const newProduct = await Repo.ProductRepository.getAllProducts();
                    dispatch(setProducts(newProduct as unknown as Product[]));
                    dispatch(resetProductFormValues());
                    toast.success('Ürün eklendi');
                    router.back();
                }
            } catch (error) {
                console.log('Error', error);
            }
        }
    };

    return (
        <div>
            <div>
                <div >
                    <title>Ürün Güncelle - BRH Takip</title>

                    <div className='h-full'>
                        <div className='h-full col-span-2'>
                            <div className='flex items-center justify-between'>
                                <Button
                                    variant="text"
                                    startIcon={<ArrowBackIosIcon />}
                                    onClick={() => {
                                        router.back();
                                        dispatch(resetProductFormValues())
                                    }}
                                >
                                    Geri Dön
                                </Button>

                                <Button
                                    variant="contained"
                                    startIcon={<SaveIcon />}
                                    onClick={handleCreateProduct}
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
            </div>
        </div>
    );
}

export default UpdateProductPage