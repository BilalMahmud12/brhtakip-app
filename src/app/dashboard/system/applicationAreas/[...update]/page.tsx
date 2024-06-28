'use client';
import React, { useEffect, useRef } from 'react';
import { ApplicationArea } from '@/API';
import { useAppDispatch, useAppSelector } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import * as Repo from '@/repository/index';
import { setApplicationAreas, resetFormValues, setApplicationAreaForm, handleFormChange } from '@/reduxStore/features/applicationAreaSlice';
import CreateOrUpdateForm from '../src/createOrUpdateForm';

import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useRouter } from 'next-nprogress-bar';
import { usePathname } from 'next/navigation';

const UpdateApplicationAreaPage: React.FC = () => {
    const router = useRouter();
    const pathName = usePathname();
    const dispatch = useAppDispatch<AppDispatch>();
    const applicationAreaForm = useAppSelector((state: RootState) => state.applicationArea.applicationAreaForm);
    const applicationAreas = useAppSelector((state: RootState) => state.applicationArea.applicationAreas);
    const errors = useAppSelector((state: RootState) => state.applicationArea.errors);
    const applicationAreaRef = useRef(applicationAreaForm);
    applicationAreaRef.current = applicationAreaForm;

    useEffect(() => {
        const applicationAreaId = pathName.split('/').pop();
        const targetApplicationArea = applicationAreas.find(applicationArea => applicationArea.id === applicationAreaId);

        if (targetApplicationArea) {
            const { updatedAt, createdAt, __typename, ...restOfTheApplicationArea } = targetApplicationArea;

            const updatedApplicationArea = {
                id: restOfTheApplicationArea.id || '',
                name: restOfTheApplicationArea.name || '',
                isActive: restOfTheApplicationArea.isActive ?? false,
            }

            applicationAreaRef.current = updatedApplicationArea;
            dispatch(setApplicationAreaForm(updatedApplicationArea));
        }
    }, [pathName, applicationAreas, dispatch]);

    const handleUpdateApplicationArea = async () => {
        if (!errors.name && applicationAreaRef.current.name.trim() !== '') {
            dispatch(handleFormChange({ key: 'name', value: applicationAreaRef.current.name }));
            try {
                const updateApplicationArea = await Repo.ApplicationAreaRepository.update(applicationAreaRef.current);

                if (updateApplicationArea && updateApplicationArea.data) {
                    const newApplicationArea = await Repo.ApplicationAreaRepository.getApplicationAreas();
                    dispatch(setApplicationAreas(newApplicationArea as unknown as ApplicationArea[]));
                    dispatch(resetFormValues());
                    router.back();
                }
            } catch (error) {
                console.log('Failed to update application area', error);
            }
        } else {
            dispatch(handleFormChange({ key: 'name', value: applicationAreaRef.current.name }));
        }
    };

    return (
        <div>
            <div>
                <title>Uygulama Alan Güncelle - BRH Takip</title>

                <div className='h-full'>
                    <div className='h-full col-span-2'>
                        <div className='flex items-center justify-between'>
                            <Button
                                variant="text"
                                startIcon={<ArrowBackIosIcon />}
                                onClick={() => {
                                    router.back();
                                    dispatch(resetFormValues());
                                }}
                            >
                                Uygulama Alanlara Geri Dön
                            </Button>

                            <Button
                                variant="contained"
                                startIcon={<SaveIcon />}
                                onClick={handleUpdateApplicationArea}
                            >
                                Kaydı Et
                            </Button>
                        </div>
                    </div>
                </div>

                <div className='space-y-3'>
                    <CreateOrUpdateForm
                        isCreate={false}
                        applicationArea={applicationAreaForm as ApplicationArea}
                    />
                </div>
            </div>
        </div>
    );
}

export default UpdateApplicationAreaPage;
