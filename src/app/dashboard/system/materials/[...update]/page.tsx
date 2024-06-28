'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Material } from '@/API';
import { useAppDispatch, useAppSelector } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import * as Repo from '@/repository/index';
import { setMaterials, resetFormValues, setMaterialForm, handleFormChange } from '@/reduxStore/features/materialSlice';
import CreateOrUpdateForm from '../src/createOrUpdateForm';


import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next-nprogress-bar';

const UpdateMaterialPage: React.FC = () => {
    const router = useRouter()
    const pathName = usePathname();
    const dispatch = useAppDispatch<AppDispatch>();
    const materialForm = useAppSelector((state: RootState) => state.material.materialForm);
    const materials = useAppSelector((state: RootState) => state.material.materials);
    const errors = useAppSelector((state: RootState) => state.material.errors);
    const materialformRef = useRef(materialForm);
    materialformRef.current = materialForm;

    useEffect(() => {
        const materialId = pathName.split('/').pop();
        const targetMaterial = materials.find(material => material.id === materialId);

        if (targetMaterial) {
            const { updatedAt, createdAt, __typename, ...restOfTheMaterial } = targetMaterial;

            const updatedMaterial = {
                id: restOfTheMaterial.id || '',
                name: restOfTheMaterial.name || '',
                isActive: restOfTheMaterial.isActive || false,
            };

            materialformRef.current = updatedMaterial;
            dispatch(setMaterialForm(updatedMaterial));
        }
    }, [pathName, materials, dispatch]);

    const handleUpdateMaterial = async () => {
        if (!errors.name && materialformRef.current.name.trim() !== '') {
            dispatch(handleFormChange({ key: 'name', value: materialformRef.current.name }));
            try {
                const updateMaterial = await Repo.MaterialRepository.update(materialformRef.current);

                if (updateMaterial && updateMaterial.data) {
                    const newMaterials = await Repo.MaterialRepository.getAllMaterials();
                    dispatch(setMaterials(newMaterials as unknown as Material[]));
                    dispatch(resetFormValues());
                    router.back();
                }
            } catch (error) {
                console.log('Error', error);
            }
        } else {
            // If there are errors, ensure the form is updated to display them
            dispatch(handleFormChange({ key: 'name', value: materialformRef.current.name }));
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
                                onClick={() => router.back()}
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
                    <CreateOrUpdateForm
                        isCreate={false}
                        material={materialForm as Material}
                    />
                </div>
            </div>
        </div>
    );
}

export default UpdateMaterialPage