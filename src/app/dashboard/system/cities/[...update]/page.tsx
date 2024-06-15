'use client'
import React, { useEffect, useState } from "react";
import { Breadcrumbs, Button } from '@aws-amplify/ui-react';
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { AppDispatch, RootState } from "@/lib/store";
import * as Repo from '@/repository/index';
import type { Store, District } from '@/API';

import { setDistricts } from '@/lib/features/districtSlice';
import DistrictView from "../(src)/district/src/districtView";
import { resetFormValues } from "@/lib/features/citySlice";
import router from "next/router";
import CreateOrUpdateForm from "../(src)/createOrUpdateForm";

const UpdateCity: React.FC = () => {
    const [filteredDistricts, setFilteredDistricts] = useState<District[]>([]);
    const [haveDistricts, setHaveDistricts] = useState<boolean>(false);

    const dispatch = useAppDispatch<AppDispatch>();
    const districts = useAppSelector((state: RootState) => state.district.districts);
    const districtForm = useAppSelector((state: RootState) => state.district.districtForm);
    const cityForm = useAppSelector((state: RootState) => state.city.cityForm);

    async function handleUpdateCity() {
        try {
            const updateCity = await Repo.BrandRepository.update(cityForm);
            dispatch(resetFormValues());
            router.replace(`/dashboard/system/cities`);
        } catch (error) {
            console.error('Error updating brand:', error);
        }
    }

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const districtData = await Repo.DistrictRepository.getAllDistricts();
    //             dispatch(setDistricts(districtData as unknown as District[]))
    //             console.log('district data', districtData);
    //         } catch (error) {
    //             console.log('error', error);
    //         }
    //     }
    //     fetchData();
    // }, [])



    const fetchFilteredDistricts = async () => {
        try {
            const districtsData = await Repo.DistrictRepository.getAllDistricts();

            if (districtsData) {
                const filtered = districtsData.filter(district => district.cityID === cityForm.id);
                console.log('cityID', cityForm.id)
                console.log('filtered', filtered)

                setFilteredDistricts(filtered as unknown as District[]);
                dispatch(setDistricts(filtered as unknown as District[]));
                setHaveDistricts(filtered.length > 0);
            }
        } catch (error) {
            console.error('Failed to fetch products', error);
            setHaveDistricts(false);
        }
    };

    useEffect(() => {
        fetchFilteredDistricts();
    }, [cityForm.id])



    return (
        <div>
            <div>
                <title>Şehir Güncelle</title>
                <div className='px-6 py-3 bg-zinc-50 shadow mb-4'>
                    <Breadcrumbs
                        items={[
                            { href: '/dashboard', label: 'Panel Girişi' },
                            { href: '/dashboard/system', label: 'System' },
                            { href: '/dashboard/system/cities', label: 'Şehirler' },
                            { label: 'Şehir Güncelle' }
                        ]}
                        className='text-sm font-medium'
                    />
                </div>


                <div className='mt-1.5 shadow bg-white py-6'>
                    <div className='px-6 mb-3 flex items-center justify-between'>
                        <h2 className='text-2xl font-medium'>Şehir Güncelle</h2>
                        <Button
                            variation="primary"
                            colorTheme="success"
                            size="small"
                            onClick={handleUpdateCity}
                            className='rounded-none bg-amber-500 text-gray-800 px-6'
                        >
                            <span>Güncelle</span>
                        </Button>
                    </div>

                    <div className='mt-8 px-8 py-8 m-6 shadow bg-neutral-100'>
                        <CreateOrUpdateForm isCreate={false} />
                    </div>
                </div>
            </div>


            {/* START District SECTION */}
            <DistrictView />
            {/* END District SECTION */}
        </div>
    )
}

export default UpdateCity

