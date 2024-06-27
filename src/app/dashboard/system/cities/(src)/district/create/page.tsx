'use client';
import React, { useEffect, useRef, useState } from 'react';
import CreateOrUpdateForm from '../src/createOrUpdateForm';
import { useRouter } from 'next-nprogress-bar';
import { setCities, resetFormValues, setCityForm } from '@/reduxStore/features/citySlice';
import { setDistricts } from '@/reduxStore/features/districtSlice';
import * as Repo from '@/repository/index';

import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useAppDispatch, useAppSelector } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { City, District } from '@/API';

const UpdateCity: React.FC = () => {
    const router = useRouter();
    const dispatch = useAppDispatch<AppDispatch>();
    const districtForm = useAppSelector((state: RootState) => state.district.districtForm);

    const districtformRef = useRef(districtForm);
    districtformRef.current = districtForm;

    const handleCreateDistrict = async () => {
        try {
            const createDistrict = await Repo.DistrictRepository.create(districtformRef.current);

            if (createDistrict && createDistrict.data) {
                const newDistricts = await Repo.DistrictRepository.getAllDistricts();
                dispatch(setDistricts(newDistricts as unknown as District[]));
                router.back();
                dispatch(resetFormValues());
            }
        } catch (error) {
            console.log('Failed Creating District', error);
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
