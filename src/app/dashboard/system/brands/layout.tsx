'use client'
import React, { useEffect } from 'react'
import * as Repo from '@/repository/index'
import { usePathname } from 'next/navigation';
import type { Brand } from '@/API';
import Icon from '@/components/core/icon';
import Link from 'next/link';
import { Button } from '@aws-amplify/ui-react';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { setBrands } from '@/reduxStore/features/brandSlice';

export default function name(
    { children }: Readonly<{ children: React.ReactNode; }>
) {
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
        <div className=''>
            {children}
        </div>
    );
}