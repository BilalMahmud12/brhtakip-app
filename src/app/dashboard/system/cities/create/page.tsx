'use client';
import React, { useEffect, useRef } from 'react';
import CreateOrUpdateForm from '../(src)/createOrUpdateForm';
import { useRouter } from 'next-nprogress-bar';
import { setCities, resetFormValues, validateForm } from '@/reduxStore/features/citySlice';
import * as Repo from '@/repository/index';
import { toast } from 'sonner'
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

    const validationErrors = useAppSelector((state: RootState) => state.city.validationErrors);
    const validationErrorsRef = React.useRef(validationErrors);
    validationErrorsRef.current = validationErrors;

    const isValidForm = Object.values(validationErrorsRef.current).every(value => value === null);
    const handleCreateCity = async () => {
        dispatch(validateForm());
        if (!isValidForm) {
            toast.error('Lütfen formu eksiksiz doldurunuz.');
            return;
        } else {
            try {
                const createCity = await Repo.CityRepository.create(cityForm);
                if (createCity && createCity.data) {
                    const newCities = await Repo.CityRepository.getAllCities();
                    dispatch(setCities(newCities as unknown as City[]));
                    dispatch(resetFormValues());
                    toast.success('Şehir eklendi.');
                    router.push('/dashboard/system/cities');
                }
            } catch (error) {
                console.log('Error', error);
            }
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
                            onClick={() => {
                                router.back();
                                dispatch(resetFormValues());
                            }}
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
                <CreateOrUpdateForm
                    isCreate={true}
                />
            </div>
        </div>
    );
}

export default CreateMaterialPage