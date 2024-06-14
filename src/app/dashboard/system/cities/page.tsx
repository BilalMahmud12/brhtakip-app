'use client'
import React, { useEffect } from "react";
import { Breadcrumbs } from '@aws-amplify/ui-react';
import type { City } from '@/API';
import * as Repo from '@/repository/index';

import { useAppDispatch } from '@/lib/hooks';
import { AppDispatch } from '@/lib/store';
import { setCities } from '@/lib/features/citySlice';
import CityView from "./(src)/cityView";

const City: React.FC = () => {
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
        };
        fetchData();
    }, [dispatch, City])
    return (
        < div >
            <title>Mağazalar</title>
            <div className='px-6 py-3 bg-zinc-50 shadow mb-4'>
                <Breadcrumbs
                    items={[
                        {
                            href: '/dashboard',
                            label: 'Panel Girişi',
                        },
                        {
                            href: '/dashboard/system',
                            label: 'System',
                        },
                        {
                            href: '/dashboard/system/Şehirler',
                            label: 'Şehirler',
                        }
                    ]}
                    className='text-sm font-medium'
                />
            </div>
            <div>
                <CityView />
            </div>
        </div >
    )
}

export default City