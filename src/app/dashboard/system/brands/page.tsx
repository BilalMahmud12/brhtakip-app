'use client';
import * as Repo from '@/repository/index'
import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Breadcrumbs } from '@aws-amplify/ui-react';
import type { Brand, ClientProfile } from '@/API';
import BrandsView from './src/brandView';
import { useStore } from '@/stores/utils/useStore';


const Brand: React.FC = observer(() => {
    const { brandStore } = useStore();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const brandsData = await Repo.BrandRepository.getAllBrands();
                brandStore.initStore({ brands: brandsData as unknown as Brand[] });
                console.log('brands', brandsData);
            } catch (error) {
                console.error('Failed to fetch brands', error);
            }
        };
        fetchData();
    }, []);


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

            <BrandsView />
        </div>
    );
});

export default Brand;
