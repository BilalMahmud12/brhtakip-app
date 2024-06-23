'use client';
import React, { useEffect, useRef } from 'react';
import CreateOrUpdateForm from '../src/createOrUpdateForm';
import { useRouter } from 'next-nprogress-bar';
import { setApplicationAreas, resetFormValues } from '@/reduxStore/features/applicationAreaSlice';
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

    const applicationAreaRef = useRef(applicationAreaForm);
    applicationAreaRef.current = applicationAreaForm;

    const handleCreateApplicationArea = async () => {
        try {
            const createApplicationArea = await Repo.ApplicationAreaRepository.create(applicationAreaRef.current);

            if (createApplicationArea && createApplicationArea.data) {
                dispatch(resetFormValues());
                const newApplicationArea = await Repo.ApplicationAreaRepository.getApplicationAreas();
                dispatch(setApplicationAreas(newApplicationArea as unknown as ApplicationArea[]));
                router.push('/dashboard/system/applicationAreas')
            }
        } catch (error) {
            console.log('Failed to create application area', error);
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
                            onClick={() => router.push('/dashboard/system/applicationAreas')}
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
