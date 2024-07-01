'use client'
import React, { use, useEffect } from 'react'
import * as Repo from '@/repository/index'
import type { City, District, Area } from '@/API';
import { useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch } from '@/reduxStore/store';
import { setCities } from '@/reduxStore/features/citySlice'
import { setDistricts } from '@/reduxStore/features/districtSlice'
import { setAreas } from '@/reduxStore/features/areaSlice'

export default function CityLayout(
    { children }: { children: React.ReactNode }
) {

    const dispatch = useAppDispatch<AppDispatch>();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const cityData = await Repo.CityRepository.getAllCities();
                dispatch(setCities(cityData as unknown as City[]));
                console.log('city data', cityData);
            } catch (error) {
                console.error('Failed to fetch cities', error);
            }
        }
        fetchData();
    }, [dispatch])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const districtData = await Repo.DistrictRepository.getAllDistricts();
                dispatch(setDistricts(districtData as unknown as District[]));
            } catch (error) {
                console.error('Failed to fetch districts', error);
            }
        }
        fetchData();
    }, [dispatch])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const areaData = await Repo.AreaRepository.getAllAreas();
                dispatch(setAreas(areaData as unknown as Area[]));
            } catch (error) {
                console.error('Failed to fetch areas', error);
            }
        }
        fetchData();
    }, [dispatch])

    return (
        <div>
            {children}
        </div>
    );
}