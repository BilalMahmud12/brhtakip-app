'use client'
import React, { useEffect, useRef } from 'react';
import { useDataModal } from '@/contexts/DataModalContext';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { setMaterials, resetFormValues, setMaterialForm } from '@/reduxStore/features/materialSlice';
import CreateOrUpdateForm from '../src/createOrUpdateForm';
import type { Material } from '@/API';
import MaterialsDataTable from './materialsDataTable';
import * as Repo from '@/repository/index';
import { useRouter } from 'next/navigation';

import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const MaterialView: React.FC = () => {
    const dispatch = useAppDispatch<AppDispatch>();
    const materials = useAppSelector((state: RootState) => state.material.materials);
    const materialForm = useAppSelector((state: RootState) => state.material.materialForm);
    const router = useRouter()

    const materialformRef = useRef(materialForm);
    materialformRef.current = materialForm;

    const setMaterialUpdateData = (material: any) => {
        dispatch(setMaterialForm({
            id: material.id,
            name: material.name,
            isActive: material.isActive,
        }));
    };

    const handleDeleteMaterial = async (data: any) => {
        try {
            const deleteMaterial = await Repo.MaterialRepository.softDelete(data.originalData.id);
            console.log('deleted material', deleteMaterial);
            const newMaterials = await Repo.MaterialRepository.getAllMaterials();
            dispatch(setMaterials(newMaterials as unknown as Material[]));
        } catch (error) {
            console.log('error', error);
        }
    };

    return (
        <div className='px-6 py-3'>
            <div className='mt-1.5 shadow bg-white'>
                <div className='px-6 py-3 mb-3 flex items-center justify-between'>
                    <div className='flex items-center space-x-2'>
                        <div className='flex items-center space-x-2'>
                            <Button
                                variant="contained"
                                startIcon={<AddIcon />}
                                onClick={() => router.push('/dashboard/system/materials/create')}
                            >
                                Malzeme Ekle
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-8 bg-white shadow'>
                <MaterialsDataTable
                    dataPayload={materials}
                    handleDelete={handleDeleteMaterial}
                    handleEdit={setMaterialUpdateData}
                />
            </div>
        </div>
    );
}

export default MaterialView;
