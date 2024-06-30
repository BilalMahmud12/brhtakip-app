'use client';
import React, { useEffect, useRef, useState } from 'react';
import CreateOrUpdateForm from '../src/createOrUpdateForm';
import { useRouter } from 'next-nprogress-bar';
import { setDistricts, validateForm, resetFormValues } from '@/reduxStore/features/districtSlice';
import * as Repo from '@/repository/index';

import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useAppDispatch, useAppSelector } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { City, District } from '@/API';
import { toast } from 'sonner';

const UpdateCity: React.FC = () => {
    const router = useRouter();
    const dispatch = useAppDispatch<AppDispatch>();
    const districtForm = useAppSelector((state: RootState) => state.district.districtForm);
    const districtformRef = useRef(districtForm);
    districtformRef.current = districtForm;

    const validationErrors = useAppSelector((state: RootState) => state.district.validationErrors);
    const validationErrorsRef = React.useRef(validationErrors);
    validationErrorsRef.current = validationErrors;

    const isValidForm = Object.values(validationErrorsRef.current).every(value => value === null);

    const handleCreateDistrict = async () => {
        dispatch(validateForm());

        if (!isValidForm) {
            toast.error('Lütfen formu eksiksiz doldurunuz.');
            return;
        } else {
            try {
                const createDistrict = await Repo.DistrictRepository.create(districtformRef.current);
                if (createDistrict && createDistrict.data) {
                    const newDistricts = await Repo.DistrictRepository.getAllDistricts();
                    dispatch(setDistricts(newDistricts as unknown as District[]));
                    dispatch(resetFormValues());
                    toast.success('İlce eklendi.');
                    router.back();
                }
            } catch (error) {
                console.log('Error', error);
            }
        }
    };


    return (
        <div>
            <div >
                <title>Şehir Ekle - BRH Takip</title>

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
                                Geri Dön
                            </Button>

                            <Button
                                variant="contained"
                                startIcon={<SaveIcon />}
                                onClick={handleCreateDistrict}
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
        </div>
    )
}

export default UpdateCity;
