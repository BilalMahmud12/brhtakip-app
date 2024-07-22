'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Material } from '@/API';
import { useAppDispatch, useAppSelector } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import * as Repo from '@/repository/index';
import { setMaterials, resetFormValues, setMaterialForm, handleFormChange, validateForm } from '@/reduxStore/features/materialSlice';
import CreateOrUpdateForm from '../src/createOrUpdateForm';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next-nprogress-bar';
import { toast } from 'sonner'

const UpdateMaterialPage: React.FC = () => {
    const router = useRouter()
    const pathName = usePathname();
    const dispatch = useAppDispatch<AppDispatch>();
    const materialForm = useAppSelector((state: RootState) => state.material.materialForm);
    const materials = useAppSelector((state: RootState) => state.material.materials);
    const materialformRef = useRef(materialForm);
    materialformRef.current = materialForm;

    const validationErrors = useAppSelector((state: RootState) => state.material.validationErrors);
    const validationErrorsRef = React.useRef(validationErrors);
    validationErrorsRef.current = validationErrors;
    const isValidForm = Object.values(validationErrorsRef.current).every(value => value === null);

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
    }, [pathName, materials]);

    const handleUpdateMaterial = async () => {
        dispatch(validateForm());
        if (!isValidForm) {
            toast.error('Lütfen formu eksiksiz doldurunuz');
            return;
        } else {
            try {
                const updateMaterial = await Repo.MaterialRepository.update(materialformRef.current);
                if (updateMaterial && updateMaterial.data) {
                    const newMaterial = await Repo.MaterialRepository.getAllMaterials();
                    dispatch(setMaterials(newMaterial as unknown as Material[]));
                    dispatch(resetFormValues());
                    toast.success('Malzeme güncellendi');
                    router.push('/dashboard/system/materials');
                }
            } catch (error) {
                console.log('Error', error);
            }
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