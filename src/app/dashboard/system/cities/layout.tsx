'use client'
import React, { useEffect } from 'react'
import * as Repo from '@/repository/index'
import type { City } from '@/API';
import { useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch } from '@/reduxStore/store';
import { setCities } from '@/reduxStore/features/citySlice'

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

    return (
        <div>
            {children}
        </div>
    );
}