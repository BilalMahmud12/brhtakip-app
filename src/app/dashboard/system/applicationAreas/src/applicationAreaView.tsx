import React, { useEffect, useRef } from 'react';
import { useDataModal } from '@/contexts/DataModalContext';
import ApplicationAreaDataTable from './applicationAreasDataTable';
import type { ApplicationArea } from '@/API';
import { useAppDispatch, useAppSelector } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { setApplicationAreaForm, setApplicationAreas, resetFormValues } from '@/reduxStore/features/applicationAreaSlice';
import CreateOrUpdateForm from './createOrUpdateForm';
import * as Repo from '@/repository/index';

import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';

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
                    // startIcon={<SaveIcon />}
                    onClick={handleCancel}
                >
                    iptal et
                </Button>
                <Button
                    variant="contained"
                    startIcon={<SaveIcon />}
                    onClick={type === 'create' ? handleCreate : handleUpdate}
                >
                    Onayla
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

    const applicationAreaRef = useRef(applicationAreaForm);
    applicationAreaRef.current = applicationAreaForm;

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
            const createApplicationArea = await Repo.ApplicationAreaRepository.create(applicationAreaRef.current);
            console.log('new created Application Area', createApplicationArea);
            hideDataModal();
            dispatch(resetFormValues());
            const newApplicationArea = await Repo.ApplicationAreaRepository.getApplicationAreas();
            dispatch(setApplicationAreas(newApplicationArea as unknown as ApplicationArea[]));
        } catch (error) {
            console.log('Failed to create application area', error);
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
            const createApplicationArea = await Repo.ApplicationAreaRepository.update(applicationAreaRef.current);

            if (createApplicationArea && createApplicationArea.data) {
                const newApplicationArea = await Repo.ApplicationAreaRepository.getApplicationAreas();
                dispatch(setApplicationAreas(newApplicationArea as unknown as ApplicationArea[]));
                hideDataModal();
                dispatch(resetFormValues());
            }
        } catch (error) {
            console.log('Failed to update application area', error);
        }
    };

    const setBrandUpdateData = (data: any) => {
        handleUpdateForm();
        dispatch(setApplicationAreaForm({
            id: data.id,
            name: data.name,
            isActive: data.isActive,
        }));
    };

    const handleDeleteApplicationArea = async (data: any) => {
        try {
            const deleteApplicationArea = await Repo.ApplicationAreaRepository.softDelete(data.originalData.id);
            console.log('deleted ApplicationArea', deleteApplicationArea);
            const newApplicationArea = await Repo.ApplicationAreaRepository.getApplicationAreas();
            dispatch(setApplicationAreas(newApplicationArea as unknown as ApplicationArea[]));
        } catch (error) {
            console.log('Failed to delete application area', error);
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
                                onClick={handleCreateForm}
                            >
                                Uygulama Alan Ekle
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-8 bg-white shadow'>
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

//Uygulama Alanı Ekle