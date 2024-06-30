'use client';
import React, { useEffect, useRef } from 'react';
import CreateOrUpdateForm from '../src/createOrUpdateForm';
import { useRouter } from 'next-nprogress-bar';
import { setApplicationAreas, resetFormValues, validateForm } from '@/reduxStore/features/applicationAreaSlice';
import * as Repo from '@/repository/index';

import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useAppDispatch, useAppSelector } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { ApplicationArea } from '@/API';
import { toast } from 'sonner';

const CreateApplicationAreaPage: React.FC = () => {
    const router = useRouter();
    const dispatch = useAppDispatch<AppDispatch>();
    const applicationAreaForm = useAppSelector((state: RootState) => state.applicationArea.applicationAreaForm);
    const applicationAreaRef = useRef(applicationAreaForm);
    applicationAreaRef.current = applicationAreaForm;

    const validationErrors = useAppSelector((state: RootState) => state.applicationArea.validationErrors);
    const validationErrorsRef = React.useRef(validationErrors);
    validationErrorsRef.current = validationErrors;

    const isValidForm = Object.values(validationErrorsRef.current).every(value => value === null);

    const handleCreateApplicationArea = async () => {
        dispatch(validateForm());
        if (!isValidForm) {
            toast.error('Lütfen formu eksiksiz doldurunuz.');
            return;
        } else {
            try {
                const createApplicationArea = await Repo.ApplicationAreaRepository.create(applicationAreaRef.current);
                if (createApplicationArea && createApplicationArea.data) {
                    const newApplicationArea = await Repo.ApplicationAreaRepository.getApplicationAreas();
                    dispatch(setApplicationAreas(newApplicationArea as unknown as ApplicationArea[]));
                    dispatch(resetFormValues());
                    toast.success('Uygulama Alanı başarıyla oluşturuldu.');
                    router.push('/dashboard/system/applicationAreas');
                }
            } catch (error) {
                console.log('Error', error);
            }
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
