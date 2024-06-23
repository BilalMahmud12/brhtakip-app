'use client';
import React, { useRef } from 'react';
import { ApplicationArea } from '@/API';
import { useAppDispatch, useAppSelector } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import * as Repo from '@/repository/index';
import { setApplicationAreas, resetFormValues } from '@/reduxStore/features/applicationAreaSlice';
import CreateOrUpdateForm from '../src/createOrUpdateForm';


import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useRouter } from 'next/navigation';

const UpdateApplicationAreaPage: React.FC = () => {
    const router = useRouter();
    const dispatch = useAppDispatch<AppDispatch>();
    const applicationAreaForm = useAppSelector((state: RootState) => state.applicationArea.applicationAreaForm);

    const applicationAreaRef = useRef(applicationAreaForm);
    applicationAreaRef.current = applicationAreaForm;

    const handleUpdateApplicationArea = async () => {
        try {
            const updateApplicationArea = await Repo.ApplicationAreaRepository.update(applicationAreaRef.current);

            if (updateApplicationArea && updateApplicationArea.data) {
                dispatch(resetFormValues());
                const newApplicationArea = await Repo.ApplicationAreaRepository.getApplicationAreas();
                dispatch(setApplicationAreas(newApplicationArea as unknown as ApplicationArea[]));
                router.push('/dashboard/system/applicationAreas')
            }
        } catch (error) {
            console.log('Failed to update application area', error);
        }
    };

    return (
        <div>
            <div >
                <title>Uygulama Alan Güncelle - BRH Takip</title>

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
                                onClick={handleUpdateApplicationArea}
                            >
                                Kaydı Et
                            </Button>
                        </div>
                    </div>
                </div>

                <div className='space-y-3'>
                    <CreateOrUpdateForm isCreate={false} />
                </div>
            </div>
        </div>
    );
}

export default UpdateApplicationAreaPage