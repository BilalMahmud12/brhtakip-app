'use client';
import React, { useEffect, useRef, useState } from 'react';
import CreateOrUpdateForm from '../(src)/createOrUpdateForm';
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
import DistrictView from '../(src)/district/src/districtView';
import { usePathname } from 'next/navigation';

const UpdateCity: React.FC = () => {
    const router = useRouter();
    const [filteredDistricts, setFilteredDistricts] = useState<District[]>([]);
    const [haveDistricts, setHaveDistricts] = useState<boolean>(false);

    const dispatch = useAppDispatch<AppDispatch>();
    const cityForm = useAppSelector((state: RootState) => state.city.cityForm);
    const cities = useAppSelector((state: RootState) => state.city.cities);
    const namePath = usePathname();
    const cityformRef = useRef(cityForm);
    cityformRef.current = cityForm;

    useEffect(() => {
        const cityId = namePath?.split('/').pop();
        const targetCity = cities.find((city) => city.id === cityId);

        if (targetCity) {
            const { updatedAt, createdAt, Districts, Stores, __typename, ...resetOfCity } = targetCity;

            const updatedCity = {
                id: resetOfCity.id || '',
                name: resetOfCity.name || '',
                isActive: resetOfCity.isActive ?? false,
                createdBy: resetOfCity.createdBy || '',
                updatedBy: resetOfCity.updatedBy || '',
            };
            cityformRef.current = updatedCity;
            dispatch(setCityForm(updatedCity));
        }
    }, [namePath, cities, dispatch]);

    async function handleUpdateCity() {
        try {
            const updateCity = await Repo.CityRepository.update(cityformRef.current);
            if (updateCity && updateCity.data) {
                const newCity = await Repo.CityRepository.getAllCities();
                dispatch(setCities(newCity as unknown as City[]));
                dispatch(resetFormValues());
                router.back();
            }
        } catch (error) {
            console.error('Failed updating city:', error);
        }
    }

    const fetchFilteredDistricts = async () => {
        try {
            const districtsData = await Repo.DistrictRepository.getAllDistricts();

            if (districtsData) {
                const filtered = districtsData.filter(district => district.cityID === cityForm.id);
                console.log('filtered', filtered)

                setFilteredDistricts(filtered as unknown as District[]);
                dispatch(setDistricts(filtered as unknown as District[]));
                setHaveDistricts(filtered.length > 0);
            }
        } catch (error) {
            console.error('Failed fetching products', error);
            setHaveDistricts(false);
        }
    };

    useEffect(() => {
        fetchFilteredDistricts();
    }, [cityForm.id])

    return (
        <div>
            <div >
                <title>Şehir Güncelle - BRH Takip</title>

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
                                onClick={handleUpdateCity}
                            >
                                Kaydı Et
                            </Button>
                        </div>
                    </div>
                </div>

                <div className='space-y-3'>
                    <CreateOrUpdateForm
                        isCreate={false}
                        city={cityForm as City}
                    />
                </div>
            </div>

            {/* START District SECTION */}

            <DistrictView
                haveDistricts={haveDistricts}
                fetchFilteredDistricts={fetchFilteredDistricts}
                filteredDistricts={filteredDistricts}
            />
            {/* END District SECTION */}
        </div>
    )
}

export default UpdateCity;
