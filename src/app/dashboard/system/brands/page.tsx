'use client';
import * as Repo from '@/repository/index';

import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { AppDispatch, RootState } from '@/lib/store';
import { setBrands, resetFormValues } from '@/lib/features/brandSlice';

import React, { useEffect } from 'react';
import { Breadcrumbs } from '@aws-amplify/ui-react';
import type { Brand } from '@/API';
import BrandsView from './src/brandView';
import BrandsDataTable from './src/brandsDataTable';

const Brand: React.FC = () => {
    const dispatch = useAppDispatch<AppDispatch>();
    const brands = useAppSelector((state: RootState) => state.brand.brands);

    const handleDelete = async (data: any) => {
        try {
            const deleteBrand = await Repo.BrandRepository.softDelete(data.originalData.id);
            console.log('deleted brand', deleteBrand);

            const newBrand = await Repo.BrandRepository.getAllBrands();
            dispatch(setBrands(newBrand as unknown as Brand[]));

            console.log('new brand array', newBrand);
        } catch (error) {
            console.log('error', error);
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

            <div className='px-6 py-3 bg-zinc-50 shadow mb-4'>
                <Breadcrumbs
                    items={[
                        {
                            href: '/dashboard',
                            label: 'Panel Girişi',
                        },
                        {
                            href: '/dashboard/system/brands',
                            label: 'Markalar',
                        }
                    ]}
                    className='text-sm font-medium'
                />
            </div>
            <BrandsView
                onDelete={handleDelete}
            />
        </div>
    );
};

export default Brand;
