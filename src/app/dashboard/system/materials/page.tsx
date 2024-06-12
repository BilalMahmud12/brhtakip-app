'use client'
import { Breadcrumbs } from '@aws-amplify/ui-react';
import React, { useEffect } from 'react';
import MaterialView from './src/materialView';
import * as Repo from '@/repository/index';
import type { Material } from '@/API';

import { useAppDispatch } from '@/lib/hooks';
import { AppDispatch } from '@/lib/store';
import { setMaterials } from '@/lib/features/materialSlice';


const Material: React.FC = () => {
    const dispatch = useAppDispatch<AppDispatch>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const materialData = await Repo.MaterialRepository.getAllMaterials();
                dispatch(setMaterials(materialData as unknown as Material[]));
                console.log('material data', materialData);
            } catch (error) {
                console.error('Failed to fetch brands', error);
            }
        };
        fetchData();
    }, [dispatch, Material])

    return (
        <div>
            <title>Malzemeler</title>
            <div className='px-6 py-3 bg-zinc-50 shadow mb-4'>
                <Breadcrumbs
                    items={[
                        {
                            href: '/dashboard',
                            label: 'Panel Girişi',
                        },
                        {
                            href: '/dashboard/system/malzemeler',
                            label: 'Malzemeler',
                        }
                    ]}
                    className='text-sm font-medium'
                />
            </div>
            <div>
                <MaterialView />
            </div>
        </div>
    )
}

export default Material
