'use client'
import React, { useRef } from 'react';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { setMaterials, setMaterialForm } from '@/reduxStore/features/materialSlice';
import type { Material } from '@/API';
import MaterialsDataTable from './materialsDataTable';
import * as Repo from '@/repository/index';
import { useRouter } from 'next-nprogress-bar';

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

            if (deleteMaterial && deleteMaterial.data) {
                const newMaterials = await Repo.MaterialRepository.getAllMaterials();
                dispatch(setMaterials(newMaterials as unknown as Material[]));
            }
        } catch (error) {
            console.log('Failed to delete material', error);
        }
    };

    return (
        <div className="mb-8">
            <div className='mb-4 space-y-5'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-3'>
                        <h1 className='text-2xl font-semibold'>Malzemeler</h1>
                    </div>
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
