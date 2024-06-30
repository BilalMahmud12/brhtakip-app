'use client';
import React, { useEffect, useRef } from 'react';
import CreateOrUpdateForm from '../src/createOrUpdateForm';
import { useRouter } from 'next-nprogress-bar';
import { setMaterials, resetFormValues, handleFormChange, validateForm } from '@/reduxStore/features/materialSlice';
import * as Repo from '@/repository/index';

import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useAppDispatch, useAppSelector } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { Material } from '@/API';
import { toast } from 'sonner'


const CreateMaterialPage: React.FC = () => {
    const router = useRouter();
    const dispatch = useAppDispatch<AppDispatch>();
    const materialForm = useAppSelector((state: RootState) => state.material.materialForm);
    const materialformRef = useRef(materialForm);
    materialformRef.current = materialForm;

    const validationErrors = useAppSelector((state: RootState) => state.material.validationErrors);
    const validationErrorsRef = React.useRef(validationErrors);
    validationErrorsRef.current = validationErrors;

    const isValidForm = Object.values(validationErrorsRef.current).every(value => value === null);
    const handleCreateMaterial = async () => {
        dispatch(validateForm());
        if (!isValidForm) {
            toast.error('Lütfen formu eksiksiz doldurunuz');
            return;
        } else {
            try {
                const createMaterial = await Repo.MaterialRepository.create(materialformRef.current);
                if (createMaterial && createMaterial.data) {
                    const newMaterial = await Repo.MaterialRepository.getAllMaterials();
                    dispatch(setMaterials(newMaterial as unknown as Material[]));
                    dispatch(resetFormValues());
                    toast.success('Malzeme başarıyla oluşturuldu');
                    router.push('/dashboard/system/materials');
                }
            } catch (error) {
                console.log('Error', error);
            }
        }
    };

    return (
        <div >
            <title>Malzeme Ekle - BRH Takip</title>

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
                            onClick={handleCreateMaterial}
                        >
                            Kaydı Et
                        </Button>
                    </div>
                </div>
            </div>

            <div className='space-y-3'>
                <CreateOrUpdateForm isCreate={true} />
            </div>
        </div>
    );
}

export default CreateMaterialPage