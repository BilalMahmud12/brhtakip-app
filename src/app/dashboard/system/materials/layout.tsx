'use client'
import React, { useEffect } from 'react'
import * as Repo from '@/repository/index'
import type { Material } from '@/API';
import { useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch } from '@/reduxStore/store';
import { setMaterials } from '@/reduxStore/features/materialSlice'

export default function MaterialLayout(
    { children }: { children: React.ReactNode }
) {
    const dispatch = useAppDispatch<AppDispatch>();
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const materialData = await Repo.MaterialRepository.getAllMaterials();
                dispatch(setMaterials(materialData as unknown as Material[]));
            } catch (error) {
                console.error('Failed to fetch materials', error);
            }
        }
        fetchData();
    });

    return (
        <div>
            {children}
        </div>
    );
}