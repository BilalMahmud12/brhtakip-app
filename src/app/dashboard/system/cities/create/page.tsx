'use client';
import React, { useEffect, useRef } from 'react';
import CreateOrUpdateForm from '../(src)/createOrUpdateForm';
import { useRouter } from 'next-nprogress-bar';
import { setCities, resetFormValues, setCityForm } from '@/reduxStore/features/citySlice';
import * as Repo from '@/repository/index';

import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useAppDispatch, useAppSelector } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { City } from '@/API';


const CreateMaterialPage: React.FC = () => {
    const router = useRouter();
    const dispatch = useAppDispatch<AppDispatch>();
    const cityForm = useAppSelector((state: RootState) => state.city.cityForm);

    const cityformRef = useRef(cityForm);
    cityformRef.current = cityForm;


    const handleCreateCity = async () => {
        try {
            const createCity = await Repo.CityRepository.create(cityformRef.current);
            console.log('created City', createCity)
            if (createCity && createCity.data) {
                const newCity = await Repo.CityRepository.getAllCities();
                dispatch(setCities(newCity as unknown as City[]))
                router.push('/dashboard/system/cities');
                dispatch(resetFormValues());
            }
        } catch (error) {
            console.log('Failed Create City', error)
        }
    };

    return (
        <div >
            <title>Şehir Ekle - BRH Takip</title>

            <div className='h-full'>
                <div className='h-full col-span-2'>
                    <div className='flex items-center justify-between'>
                        <Button
                            variant="text"
                            startIcon={<ArrowBackIosIcon />}
                            onClick={() => router.push('/dashboard/system/cities')}
                        >
                            Şehirlere Geri Dön
                        </Button>

                        <Button
                            variant="contained"
                            startIcon={<SaveIcon />}
                            onClick={handleCreateCity}
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

export default CreateMaterialPage