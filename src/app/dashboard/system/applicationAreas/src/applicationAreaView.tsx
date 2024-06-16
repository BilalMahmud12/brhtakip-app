import React, { useEffect, useRef } from 'react';
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

    const applicationAreaRef = useRef(applicationAreaForm);
    useEffect(() => {
        applicationAreaRef.current = applicationAreaForm;
    }, [applicationAreaForm])

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