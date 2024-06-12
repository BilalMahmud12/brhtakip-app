'use client'
import React from 'react';
import { useDataModal } from '@/contexts/DataModalContext';
import { Button } from '@aws-amplify/ui-react';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { AppDispatch, RootState } from '@/lib/store';
import { setMaterials, resetFormValues } from '@/lib/features/materialSlice';
import CreateOrUpdateForm from '../src/createOrUpdateForm';
import type { Material } from '@/API';
import MaterialsDataTable from './materialsDataTable';
import * as Repo from '@/repository/index';

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
                    onClick={handleCreate}
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

    const handleCancelForm = () => {
        dispatch(resetFormValues());
        hideDataModal();
    };

    const handleCreateForm = () => {
        dispatch(resetFormValues());
        showDataModal(
            <div><span className='text-base font-bold'>Yeni Melzeme Ekle</span></div>,
            <CreateOrUpdateForm isCreate={true} />,
            <ModalCustomFooter
                type='create'
                handleCancel={handleCancelForm}
                handleCreate={handleCreateMaterial}
            />
        );
    };

    const handleCreateMaterial = async () => {
        try {
            const createMaterial = await Repo.MaterialRepository.create(materialForm);
            console.log('new created material', createMaterial);
            hideDataModal();
            dispatch(resetFormValues());
            const newMaterials = await Repo.MaterialRepository.getAllMaterials();
            dispatch(setMaterials(newMaterials as unknown as Material[]));
        } catch (error) {
            console.log('Error', error);
        }
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
        <div>
            <div className='mt-1.5 shadow bg-zinc-50'>
                <div className='px-6 py-6 mb-3 flex items-center justify-between'>
                    <h2 className='text-2xl font-medium'>Markalar</h2>
                    <Button
                        variation="primary"
                        colorTheme="success"
                        size="small"
                        loadingText=""
                        onClick={handleCreateForm}
                        className='rounded-none bg-amber-500 text-gray-800 px-6'
                    >
                        <span>Melzeme Ekle</span>
                    </Button>
                </div>
            </div>
            <div className='mt-8'>
                <MaterialsDataTable
                    dataPayload={materials}
                    handleDelete={handleDeleteMaterial}
                />
            </div>
        </div>
    );
}

export default MaterialView;
