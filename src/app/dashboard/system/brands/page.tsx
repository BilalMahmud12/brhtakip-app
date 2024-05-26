'use client';
import * as Repo from '@/repository/index'
import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Breadcrumbs } from '@aws-amplify/ui-react';
import type { Brand } from '@/API';
import BrandsView from './src/brandView';

const Brand: React.FC = observer(() => {

    useEffect(() => {
        const fetchData = async () => {
            try {
                const brandsData = await Repo.BrandRepository.getAllBrands();
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
