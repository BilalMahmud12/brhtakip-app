'use client'
import React, { useEffect } from "react";
import { Breadcrumbs, Button } from '@aws-amplify/ui-react';
import { useAppDispatch, useAppSelector } from "@/reduxStore/hooks";
import { AppDispatch, RootState } from "@/reduxStore/store";
import * as Repo from '@/repository/index';
import type { Area, District } from '@/API';
import AreaView from "../src/areas/src/areaView";
import { setAreas } from "@/reduxStore/features/areaSlice";
import CreateOrUpdateForm from "../src/createOrUpdateForm";
import { setDistricts } from "@/reduxStore/features/districtSlice";
import { useRouter } from "next/navigation";

const updateDistrict: React.FC = () => {
    const dispatch = useAppDispatch<AppDispatch>();
    const router = useRouter();
    const districtForm = useAppSelector((state: RootState) => { state.district.districtForm })

    const handleUpdateDistrict = async () => {
        try {
            const updateDistrict = await Repo.DistrictRepository.update(districtForm)

            if (updateDistrict && updateDistrict.data) {
                const newDistrict = await Repo.DistrictRepository.getAllDistricts();
                dispatch(setDistricts(newDistrict as unknown as District[]));
                console.log('updateDistrict', newDistrict)
                router.replace(`/dashboard/system/brands`);
            }
        } catch (error) {
            console.log('Failed Update District', error)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const areaData = await Repo.AreaRepository.getAllAreas();
                dispatch(setAreas(areaData as unknown as Area[]))
                console.log('area Data', areaData);
            } catch (error) {
                console.log('error', error)
            }
        }
        fetchData();
    })
    return (
        <div>
            <div>
                <div>
                    <title>İlçe Güncelle</title>

                    <div className='mt-1.5 shadow bg-white py-6'>
                        <div className='px-6 mb-3 flex items-center justify-between'>
                            <h2 className='text-2xl font-medium'>İlçe Güncelle</h2>
                            <Button
                                variation="primary"
                                colorTheme="success"
                                size="small"
                                onClick={handleUpdateDistrict}
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


                {/* START AreaView SECTION */}
                {/* <AreaView /> */}
                {/* END AreaView SECTION */}
            </div>
        </div>
    )
}

export default updateDistrict

// areaView.tsx
//getAreasTableData.tsx
//createOrUpdateForm.tsx
// areasDataTable.tsx