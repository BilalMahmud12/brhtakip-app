'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Material } from '@/API';
import { useAppDispatch, useAppSelector } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import * as Repo from '@/repository/index';
import { setMaterials, resetFormValues } from '@/reduxStore/features/materialSlice';
import CreateOrUpdateForm from '../src/createOrUpdateForm';


import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useRouter } from 'next/navigation';

const UpdateMaterialPage: React.FC = () => {

    const dispatch = useAppDispatch<AppDispatch>();
    const materials = useAppSelector((state: RootState) => state.material.materials);
    const materialForm = useAppSelector((state: RootState) => state.material.materialForm);
    const router = useRouter()

    const materialformRef = useRef(materialForm);
    materialformRef.current = materialForm;

    const handleUpdateMaterial = async () => {
        try {
            const updateMaterial = await Repo.MaterialRepository.update(materialformRef.current);

            if (updateMaterial && updateMaterial.data) {
                dispatch(resetFormValues());
                const newMaterials = await Repo.MaterialRepository.getAllMaterials();
                dispatch(setMaterials(newMaterials as unknown as Material[]));
                router.push(`/dashboard/system/materials`);
            }
        } catch (error) {
            console.log('Error', error);
        }
    };

    return (
        <div>
            <div >
                <title>Malzeme Güncelle - BRH Takip</title>

                <div className='h-full'>
                    <div className='h-full col-span-2'>
                        <div className='flex items-center justify-between'>
                            <Button
                                variant="text"
                                startIcon={<ArrowBackIosIcon />}
                                onClick={() => router.push('/dashboard/system/materials')}
                            >
                                Malzemelere Geri Dön
                            </Button>

                            <Button
                                variant="contained"
                                startIcon={<SaveIcon />}
                                onClick={handleUpdateMaterial}
                            >
                                Kaydı Et
                            </Button>
                        </div>
                    </div>
                </div>

                <div className='space-y-3'>
                    <CreateOrUpdateForm isCreate={false} />
                </div>
            </div>
        </div>
    );
}

export default UpdateMaterialPage