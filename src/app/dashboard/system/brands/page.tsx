'use client';
import * as Repo from '@/repository/index';
import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { setBrands } from '@/reduxStore/features/brandSlice';
import type { Brand } from '@/API';
import BrandsView from './src/brandView';
import withAuthorization from '@/app/withAuthorization';
import { permissions } from '@/config/index';

const Brand: React.FC = () => {
    const dispatch = useAppDispatch<AppDispatch>();
    const brands = useAppSelector((state: RootState) => state.brand.brands);

    const handleDelete = async (data: any) => {
        try {
            const deleteBrand = await Repo.BrandRepository.softDelete(data.originalData.id);
            const newBrand = await Repo.BrandRepository.getAllBrands();
            dispatch(setBrands(newBrand as unknown as Brand[]));
        } catch (error) {
            console.log('Failed to delete brand', error);
        }
    };

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

            <BrandsView onDelete={handleDelete} />
        </div>
    );
};

export default Brand;
// withAuthorization([permissions.VIEW_BRANDS])(Brand)