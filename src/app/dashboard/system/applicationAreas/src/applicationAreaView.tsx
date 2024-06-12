import React, { useEffect } from 'react';
import { useDataModal } from '@/contexts/DataModalContext';
import ApplicationAreaDataTable from './applicationAreasDataTable';
import type { ApplicationArea } from '@/API';
import { Button } from '@aws-amplify/ui-react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { AppDispatch, RootState } from '@/lib/store';
import { setApplicationAreaForm, setApplicationAreas, resetFormValues } from '@/lib/features/applicationAreaSlice';
import CreateOrUpdateForm from './createOrUpdateForm';
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

const ApplicationAreaView: React.FC = () => {
    const { showDataModal, hideDataModal } = useDataModal();

    const dispatch = useAppDispatch<AppDispatch>();
    const applicationAreas = useAppSelector((state: RootState) => state.applicationArea.applicationAreas);
    const applicationAreaForm = useAppSelector((state: RootState) => state.applicationArea.applicationAreaForm);

    const handleCancelForm = () => {
        dispatch(resetFormValues());
        hideDataModal();
    };

    const handleCreateForm = () => {
        dispatch(resetFormValues());
        showDataModal(
            <div><span className='text-base font-bold'>Yeni Uygulama Alanı Ekle</span></div>,
            <CreateOrUpdateForm isCreate={true} />,
            <ModalCustomFooter
                type='create'
                handleCancel={handleCancelForm}
                handleCreate={handleCreateApplicationArea}
            />
        );
    };

    const handleCreateApplicationArea = async () => {
        try {
            const createApplicationArea = await Repo.ApplicationAreaRepository.create(applicationAreaForm);
            console.log('new created Application Area', createApplicationArea);
            hideDataModal();
            dispatch(resetFormValues());
            const newApplicationArea = await Repo.ApplicationAreaRepository.getApplicationAreas();
            dispatch(setApplicationAreas(newApplicationArea as unknown as ApplicationArea[]));
        } catch (error) {
            console.log('Error', error);
        }
    };

    const handleUpdateForm = () => {
        dispatch(resetFormValues());
        showDataModal(
            <div><span className='text-base font-bold'>Güncelle</span></div>,
            <CreateOrUpdateForm isCreate={false} />,
            <ModalCustomFooter
                type='update'
                handleCancel={handleCancelForm}
                handleUpdate={handleUpdateApplicationArea}
            />
        );
    };

    const handleUpdateApplicationArea = async () => {
        try {
            const createApplicationArea = await Repo.ApplicationAreaRepository.update(applicationAreaForm);
            console.log('new created Application Area', createApplicationArea);
            hideDataModal();
            dispatch(resetFormValues());
        } catch (error) {
            console.log('Error', error);
        }
    };

    const setBrandUpdateData = (material: any) => {
        handleUpdateForm();
        dispatch(setApplicationAreaForm({
            id: material.id,
            name: material.name,
            isActive: material.isActive,
        }));
    };

    const handleDeleteApplicationArea = async (data: any) => {
        try {
            const deleteApplicationArea = await Repo.ApplicationAreaRepository.softDelete(data.originalData.id);
            console.log('deleted ApplicationArea', deleteApplicationArea);
            const newApplicationArea = await Repo.ApplicationAreaRepository.getApplicationAreas();
            dispatch(setApplicationAreas(newApplicationArea as unknown as ApplicationArea[]));
        } catch (error) {
            console.log('error', error);
        }
    };


    return (
        <div>
            <div className='mt-1.5 shadow bg-zinc-50'>
                <div className='px-6 py-6 mb-3 flex items-center justify-between'>
                    <h2 className='text-2xl font-medium'>Uygulama Alanları</h2>
                    <Button
                        variation="primary"
                        colorTheme="success"
                        size="small"
                        loadingText=""
                        onClick={handleCreateForm}
                        className='rounded-none bg-amber-500 text-gray-800 px-6'
                    >
                        <span>Uygulama Alanı Ekle</span>
                    </Button>
                </div>
            </div>
            <div className='mt-8'>
                <ApplicationAreaDataTable
                    dataPayload={applicationAreas}
                    handleDelete={handleDeleteApplicationArea}
                    handleEdit={setBrandUpdateData}
                />
            </div>
        </div>
    );
}

export default ApplicationAreaView