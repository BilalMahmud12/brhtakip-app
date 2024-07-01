'use client'
import React, { useEffect } from 'react'
import * as Repo from '@/repository/index'
import type { Product } from '@/API';
import { useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch } from '@/reduxStore/store';
import { setProducts } from '@/reduxStore/features/productSlice'
//brand
export default function ProductLayout(
    { children }: Readonly<{ children: React.ReactNode; }>
) {
    const dispatch = useAppDispatch<AppDispatch>();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const productData = await Repo.ProductRepository.getAllProducts();
                if (productData) {
                    dispatch(setProducts(productData as unknown as Product[]));
                    console.log('product data', productData);
                }
            } catch (error) {
                console.error('Failed to fetch products', error);
            }
        };
        fetchData();
    }, [dispatch]);

    return (
        <div className=''>
            {children}
        </div>
    );
}