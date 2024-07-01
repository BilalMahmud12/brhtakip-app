'use client'
import React, { useEffect, useRef } from "react";
import type { City } from '@/API';
import * as Repo from '@/repository/index';
import { useAppDispatch, useAppSelector } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { setCities, resetFormValues, setCityForm } from '@/reduxStore/features/citySlice';
import CitiesDataTable from "./citiesDataTable";

import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next-nprogress-bar';

const CityView: React.FC = () => {
    const dispatch = useAppDispatch<AppDispatch>();
    const cities = useAppSelector((state: RootState) => state.city.cities);
    const cityForm = useAppSelector((state: RootState) => state.city.cityForm);
    const router = useRouter()
    const cityformRef = useRef(cityForm);
    cityformRef.current = cityForm;

    const setCityUpdateData = (data: any) => {
        dispatch(setCityForm({
            id: data.id,
            name: data.name,
            isActive: data.isActive,
        }));
    };

    const handleDeleteCity = async (data: any) => {
        try {
            const deleteCity = await Repo.CityRepository.softDelete(data.originalData.id);
            if (deleteCity && deleteCity.data) {
                const newCity = await Repo.CityRepository.getAllCities();
                dispatch(setCities(newCity as unknown as City[]))
                dispatch(resetFormValues());
            }
        } catch (error) {
            console.log('Failed Delete City', error)
        }
    }

    return (
        <div className="mb-8">
            <div className="mb-4 space-y-5">
                <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-3'>
                        <h1 className='text-2xl font-semibold'>Şehirler</h1>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <div className='flex items-center space-x-2'>
                            <Button
                                variant="contained"
                                startIcon={<AddIcon />}
                                onClick={() => router.push('/dashboard/system/cities/create')}
                            >
                                Şehir Ekle
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-8 bg-white shadow'>
                <CitiesDataTable
                    dataPayload={cities}
                    handleDelete={handleDeleteCity}
                    handleEdit={setCityUpdateData}
                />
            </div>
        </div>
    )

}

export default CityView