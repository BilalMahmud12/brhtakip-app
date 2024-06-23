import React, { useEffect, useRef } from 'react';
import { useDataModal } from '@/contexts/DataModalContext';
import ApplicationAreaDataTable from './applicationAreasDataTable';
import type { ApplicationArea } from '@/API';
import { useAppDispatch, useAppSelector } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { setApplicationAreaForm, setApplicationAreas, resetFormValues } from '@/reduxStore/features/applicationAreaSlice';
import CreateOrUpdateForm from './createOrUpdateForm';
import * as Repo from '@/repository/index';
import { useRouter } from 'next/navigation';

import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';


const ApplicationAreaView: React.FC = () => {
    const router = useRouter();
    const dispatch = useAppDispatch<AppDispatch>();
    const applicationAreas = useAppSelector((state: RootState) => state.applicationArea.applicationAreas);
    const applicationAreaForm = useAppSelector((state: RootState) => state.applicationArea.applicationAreaForm);

    // const applicationAreaRef = useRef(applicationAreaForm);
    // applicationAreaRef.current = applicationAreaForm;

    const setApplicationAreaUpdateData = (data: any) => {
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
                                onClick={() => router.push('/dashboard/system/applicationAreas/create')}
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
                    handleEdit={setApplicationAreaUpdateData}
                />
            </div>
        </div>
    );
}

export default ApplicationAreaView

//Uygulama Alanı Ekle