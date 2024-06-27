'use client'
import React, { useEffect } from "react";
import { Breadcrumbs } from '@aws-amplify/ui-react';
import type { City } from '@/API';
import * as Repo from '@/repository/index';

import { useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch } from '@/reduxStore/store';
import { setCities } from '@/reduxStore/features/citySlice';
import CityView from "./(src)/cityView";

const City: React.FC = () => {
    // const dispatch = useAppDispatch<AppDispatch>();
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const cityData = await Repo.CityRepository.getAllCities();
    //             dispatch(setCities(cityData as unknown as City[]));
    //             console.log('city data', cityData);
    //         } catch (error) {
    //             console.error('Failed to fetch cities', error);
    //         }
    //     };
    //     fetchData();
    // }, [dispatch, City])
    return (
        < div >
            <title>Şehirler</title>

            <div>
                <CityView />
            </div>
        </div >
    )
}

export default City