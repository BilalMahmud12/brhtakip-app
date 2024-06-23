'use client'
import React, { useEffect, useRef } from "react";
import { useDataModal } from '@/contexts/DataModalContext';
import type { City, District } from '@/API';
import * as Repo from '@/repository/index';

import { useAppDispatch, useAppSelector } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { setCities, resetFormValues, setCityForm } from '@/reduxStore/features/citySlice';
import CitiesDataTable from "./citiesDataTable";
import CreateOrUpdateForm from "./createOrUpdateForm";

import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from "next/navigation";

const CityView: React.FC = () => {
    const { showDataModal, hideDataModal } = useDataModal();
    const dispatch = useAppDispatch<AppDispatch>();
    const cities = useAppSelector((state: RootState) => state.city.cities);
    const cityForm = useAppSelector((state: RootState) => state.city.cityForm);
    const router = useRouter()

    const cityformRef = useRef(cityForm);
    cityformRef.current = cityForm;


    const handleCreateCity = async () => {
        try {
            const createCity = await Repo.CityRepository.create(cityformRef.current);
            console.log('created City', createCity)
            if (createCity && createCity.data) {
                const newCity = await Repo.CityRepository.getAllCities();
                dispatch(setCities(newCity as unknown as City[]))
                hideDataModal();
                dispatch(resetFormValues());
            }
        } catch (error) {
            console.log('Failed Create City', error)
        }
    };

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
                hideDataModal();
                dispatch(resetFormValues());
            }
        } catch (error) {
            console.log('Failed Delete City', error)
        }
    }


    return (
        <div>
            <div className='mt-1.5 shadow bg-white'>
                <div className='px-6 py-3 mb-3 flex items-center justify-between'>
                    <div className='flex items-center space-x-2'>
                        <div className='flex items-center space-x-2'>
                            <Button
                                variant="contained"
                                startIcon={<AddIcon />}
                                onClick={() => router.push('/dashboard/system/city/create')}
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