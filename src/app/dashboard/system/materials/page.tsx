'use client'
import { Breadcrumbs } from '@aws-amplify/ui-react';
import React, { useEffect } from 'react';
import MaterialView from './src/materialView';
import * as Repo from '@/repository/index';
import type { Material } from '@/API';

import { useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch } from '@/reduxStore/store';
import { setMaterials } from '@/reduxStore/features/materialSlice';


const Material: React.FC = () => {
    const dispatch = useAppDispatch<AppDispatch>();

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const materialData = await Repo.MaterialRepository.getAllMaterials();
    //             dispatch(setMaterials(materialData as unknown as Material[]));
    //             console.log('material data', materialData);
    //         } catch (error) {
    //             console.error('Failed to fetch brands', error);
    //         }
    //     };
    //     fetchData();
    // }, [dispatch, Material])

    return (
        <div>
            <title>Malzemeler</title>

            <div>
                <MaterialView />
            </div>
        </div>
    )
}

export default Material
