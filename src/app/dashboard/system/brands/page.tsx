'use client';
import * as Repo from '@/repository/index';
import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { setBrands } from '@/reduxStore/features/brandSlice';
import type { Brand } from '@/API';
import BrandsView from './src/brandView';
import { permissions } from '@/config/index';

const Brand: React.FC = () => {
    const dispatch = useAppDispatch<AppDispatch>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const brandsData = await Repo.BrandRepository.getAllBrands();
                dispatch(setBrands(brandsData as unknown as Brand[]));
                console.log('brand data', brandsData);
            } catch (error) {
                console.error('Failed to fetch brands', error);
            }
        };
        fetchData();
    }, [dispatch]);

    return (
        <div>
            <title>Markalar - BRH Takip</title>

            <BrandsView />
        </div>
    );
};

export default Brand;
//withAuthorization([permissions.VIEW_BRANDS])(Brand)
