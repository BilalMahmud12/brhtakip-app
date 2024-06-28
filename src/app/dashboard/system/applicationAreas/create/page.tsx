'use client';
import React, { useEffect, useRef } from 'react';
import CreateOrUpdateForm from '../src/createOrUpdateForm';
import { useRouter } from 'next-nprogress-bar';
import { setApplicationAreas, resetFormValues, handleFormChange } from '@/reduxStore/features/applicationAreaSlice';
import * as Repo from '@/repository/index';

import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useAppDispatch, useAppSelector } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { ApplicationArea } from '@/API';

const CreateApplicationAreaPage: React.FC = () => {
    const router = useRouter();
    const dispatch = useAppDispatch<AppDispatch>();
    const applicationAreaForm = useAppSelector((state: RootState) => state.applicationArea.applicationAreaForm);
    const errors = useAppSelector((state: RootState) => state.applicationArea.errors);

    const applicationAreaRef = useRef(applicationAreaForm);
    applicationAreaRef.current = applicationAreaForm;

    const handleCreateApplicationArea = async () => {
        if (!errors.name && applicationAreaRef.current.name.trim() !== '') {
            dispatch(handleFormChange({ key: 'name', value: applicationAreaRef.current.name }));
            try {
                const createApplicationArea = await Repo.ApplicationAreaRepository.create(applicationAreaRef.current);

                if (createApplicationArea && createApplicationArea.data) {
                    const newApplicationArea = await Repo.ApplicationAreaRepository.getApplicationAreas();
                    dispatch(setApplicationAreas(newApplicationArea as unknown as ApplicationArea[]));
                    dispatch(resetFormValues());
                    router.back();
                }
            } catch (error) {
                console.log('Failed to create application area', error);
            }
        } else {
            dispatch(handleFormChange({ key: 'name', value: applicationAreaRef.current.name }));
        }
    };

    return (
        <div>
            <title>Uygulama Alan Ekle - BRH Takip</title>

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
                            onClick={handleCreateApplicationArea}
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

export default CreateApplicationAreaPage
