'use client'
import React, { useEffect, useRef } from 'react';
import { useDataModal } from '@/contexts/DataModalContext';
import { Button } from '@aws-amplify/ui-react';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { setMaterials, resetFormValues, setMaterialForm } from '@/reduxStore/features/materialSlice';
import CreateOrUpdateForm from '../src/createOrUpdateForm';
import type { Material } from '@/API';
import MaterialsDataTable from './materialsDataTable';
import * as Repo from '@/repository/index';
import { useRouter } from 'next/navigation';

const ModalCustomFooter = (props: {
    type: 'create' | 'update'
    handleCreate?: (data: any) => void;
    handleUpdate?: (data: any) => void;
    handleCancel?: () => void;
}) => {
    const {
        type,
        handleCreate = () => { },
        handleUpdate = () => { },
        handleCancel = () => { }
    } = props;

    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-3'>
                <Button
                    variation="primary"
                    colorTheme="success"
                    size="small"
                    loadingText=""
                    onClick={handleCancel}
                    className='rounded-none bg-transparent text-gray-800 px-6 font-bold'
                >
                    <span>İPTAL ET</span>
                </Button>
                <Button
                    variation="primary"
                    colorTheme="success"
                    size="small"
                    loadingText=""
                    onClick={type === 'create' ? handleCreate : handleUpdate}
                    className='rounded-none bg-amber-500 text-zinc-800 font-bold px-6'
                >
                    <span className='flex items-center space-x-2'>
                        <span>ONAYLA</span>
                    </span>
                </Button>
            </div>
        </div>
    );
}

const MaterialView: React.FC = () => {
    const { showDataModal, hideDataModal } = useDataModal();
    const dispatch = useAppDispatch<AppDispatch>();
    const materials = useAppSelector((state: RootState) => state.material.materials);
    const materialForm = useAppSelector((state: RootState) => state.material.materialForm);
    const router = useRouter()

    const materialformRef = useRef(materialForm);
    useEffect(() => {
        materialformRef.current = materialForm;
    }, [materialForm])

    const handleCancelForm = () => {
        dispatch(resetFormValues());
        hideDataModal();
    };

    const handleCreateForm = () => {
        dispatch(resetFormValues());
        showDataModal(
            <div><span className='text-base font-bold'>Yeni Malzeme Ekle</span></div>,
            <CreateOrUpdateForm
                isCreate={true}
            />,
            <ModalCustomFooter
                type='create'
                handleCancel={handleCancelForm}
                handleCreate={handleCreateMaterial}
            />
        );
    };

    const handleCreateMaterial = async () => {
        try {
            const createMaterial = await Repo.MaterialRepository.create(materialformRef.current);

            if (createMaterial && createMaterial.data) {
                hideDataModal();
                dispatch(resetFormValues());
                const newMaterials = await Repo.MaterialRepository.getAllMaterials();
                dispatch(setMaterials(newMaterials as unknown as Material[]));
                console.log('new Materials', newMaterials)
            }
        } catch (error) {
            console.log('Error', error);
        }
    };


    const handleUpdateForm = () => {
        showDataModal(
            <div><span className='text-base font-bold'>Güncelle</span></div>,
            <CreateOrUpdateForm
                isCreate={false}
            // material={data}
            />,
            <ModalCustomFooter
                type='update'
                handleCancel={handleCancelForm}
                handleUpdate={handleUpdateMaterial}
            />
        );
    };

    const handleUpdateMaterial = async () => {
        try {
            const updateMaterial = await Repo.MaterialRepository.update(materialformRef.current);
            console.log('updated material', updateMaterial);

            if (updateMaterial && updateMaterial.data) {
                hideDataModal();
                dispatch(resetFormValues());
                const newMaterials = await Repo.MaterialRepository.getAllMaterials();
                dispatch(setMaterials(newMaterials as unknown as Material[]));
                console.log('update Material', newMaterials)
            }

        } catch (error) {
            console.log('Error', error);
        }
    };

    const setBrandUpdateData = (material: any) => {
        handleUpdateForm();
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
                                variation="primary"
                                colorTheme="success"
                                size="small"
                                loadingText=""
                                onClick={() => router.push(`/dashboard/system/materials/create`)}
                                className='rounded-none bg-amber-500 text-gray-800 px-6'
                            >
                                <span>Malzeme Ekle</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-8 bg-white shadow'>
                <MaterialsDataTable
                    dataPayload={materials}
                    handleDelete={handleDeleteMaterial}
                    handleEdit={setBrandUpdateData}
                />
            </div>
        </div>
    );
}

export default MaterialView;
