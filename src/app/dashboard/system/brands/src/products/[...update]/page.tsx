'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Product } from '@/API';
import { useAppDispatch, useAppSelector } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import * as Repo from '@/repository/index';
import { setProductFormValues, resetProductFormValues, validateForm, setProducts } from '@/reduxStore/features/productSlice';
import CreateOrUpdateForm from '../src/createOrUpdateForm';
import { toast } from 'sonner'
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useRouter } from 'next-nprogress-bar';
import { usePathname } from 'next/navigation';

const UpdateProductPage: React.FC = () => {

    const dispatch = useAppDispatch<AppDispatch>();
    const products = useAppSelector((state: RootState) => state.product.products);
    const productForm = useAppSelector((state: RootState) => state.product.productForm);
    const pathName = usePathname();
    const productFormRef = useRef(productForm);
    productFormRef.current = productForm;
    const router = useRouter()

    const validationErrors = useAppSelector((state: RootState) => state.product.validationErrors);
    const validationErrorsRef = React.useRef(validationErrors);
    validationErrorsRef.current = validationErrors;

    const isValidForm = Object.values(validationErrorsRef.current).every(value => value === null);

    useEffect(() => {
        const productID = pathName.split('/').pop();
        const targetProduct = products.find(product => product.id === productID);

        if (targetProduct) {
            const { updatedAt, createdAt, __typename, ...restOfTheProduct } = targetProduct;

            const updatedProductForm = {
                id: restOfTheProduct.id || '',
                name: restOfTheProduct.name || '',
                isActive: restOfTheProduct.isActive ?? false,
                brandID: restOfTheProduct.brandID || '',
            };

            productFormRef.current = updatedProductForm;
            dispatch(setProductFormValues(updatedProductForm));
        }
    }, [pathName, products, dispatch]);


    const handleUpdateProduct = async () => {
        if (!isValidForm) {
            toast.error('Lütfen formu eksiksiz doldurunuz');
            return;
        } else {
            try {
                const updateProduct = await Repo.ProductRepository.update(productFormRef.current);
                if (updateProduct && updateProduct.data) {
                    const newProduct = await Repo.ProductRepository.getAllProducts();
                    dispatch(setProducts(newProduct as unknown as Product[]));
                    dispatch(resetProductFormValues());
                    toast.success('Ürün güncellendi');
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
                                    onClick={handleUpdateProduct}
                                >
                                    Kaydı Et
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className='space-y-3'>
                        <CreateOrUpdateForm
                            isCreate={false}
                            product={productForm as Product}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateProductPage