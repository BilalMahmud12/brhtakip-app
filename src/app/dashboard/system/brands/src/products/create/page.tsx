'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Product } from '@/API';
import { useAppDispatch, useAppSelector } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import * as Repo from '@/repository/index';
import { setProducts, resetProductFormValues, handleFormChange } from '@/reduxStore/features/productSlice';
import CreateOrUpdateForm from '../src/createOrUpdateForm';

import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useRouter } from 'next-nprogress-bar';

const UpdateProductPage: React.FC = () => {

    const dispatch = useAppDispatch<AppDispatch>();
    const products = useAppSelector((state: RootState) => state.product.products);
    const productForm = useAppSelector((state: RootState) => state.product.productForm);
    const errors = useAppSelector((state: RootState) => state.product.errors);

    const productFormRef = useRef(productForm);
    productFormRef.current = productForm;
    const router = useRouter()

    const handleCreateProduct = async () => {
        if (!errors.name && productFormRef.current.name.trim() !== '') {
            dispatch(handleFormChange({ key: 'name', value: productFormRef.current.name }));
            try {
                const createProduct = await Repo.ProductRepository.create(productFormRef.current);

                if (createProduct && createProduct.data) {
                    router.back();
                    dispatch(resetProductFormValues())
                }
            } catch (error) {
                console.error('Error create product', error);
            }
        } else {
            dispatch(handleFormChange({ key: 'name', value: productFormRef.current.name }));
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
                                    onClick={() => router.push('/dashboard/system/brands')}
                                >
                                    Markalara Geri Dön
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