'use client';
import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/reduxStore/hooks";
import { AppDispatch, RootState } from "@/reduxStore/store";
import * as Repo from '@/repository/index';
import type { Area, District } from '@/API';
import AreaView from "../src/areas/src/areaView";
import { setAreas } from "@/reduxStore/features/areaSlice";
import CreateOrUpdateForm from '../src/createOrUpdateForm';
import { setDistricts } from "@/reduxStore/features/districtSlice";
import { useRouter } from "next/navigation";

import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const UpdateDistrict: React.FC = () => {
    const dispatch = useAppDispatch<AppDispatch>();
    const router = useRouter();
    const districtForm = useAppSelector((state: RootState) => state.district.districtForm);
    const areaForm = useAppSelector((state: RootState) => state.area.areaForm);

    const [filteredAreas, setFilteredAreas] = useState<Area[]>([]);
    const [haveArea, setHaveArea] = useState<boolean>(false);

    const districtformRef = useRef(districtForm);
    districtformRef.current = districtForm;

    const handleUpdateDistrict = async () => {
        try {
            const updateDistrict = await Repo.DistrictRepository.update(districtformRef.current);

            if (updateDistrict && updateDistrict.data) {
                const newDistrict = await Repo.DistrictRepository.getAllDistricts();
                dispatch(setDistricts(newDistrict as unknown as District[]));
                router.back();
            }
        } catch (error) {
            console.log('Failed Update District', error);
        }
    };

    const fetchFilteredAreas = async () => {
        try {
            const areasData = await Repo.AreaRepository.getAllAreas();

            if (areasData) {
                const filtered = areasData.filter(area => area.districtID === districtForm.id);
                console.log('filtered', filtered);

                setFilteredAreas(filtered as unknown as Area[]);
                dispatch(setAreas(filtered as unknown as Area[]));
                setHaveArea(filtered.length > 0);
            }
        } catch (error) {
            console.error('Failed fetching areas', error);
            setHaveArea(false);
        }
    };

    useEffect(() => {
        fetchFilteredAreas();
    }, [districtForm.id]);

    return (
        <div>
            <div>
                <title>İlçe Güncelle - BRH Takip</title>
                <div className='h-full'>
                    <div className='h-full col-span-2'>
                        <div className='flex items-center justify-between'>
                            <Button
                                variant="text"
                                startIcon={<ArrowBackIosIcon />}
                                onClick={() => router.push('/dashboard/system/cities')}
                            >
                                Şehirlere Geri Dön
                            </Button>
                            <Button
                                variant="contained"
                                startIcon={<SaveIcon />}
                                onClick={handleUpdateDistrict}
                            >
                                Kaydet
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='space-y-3'>
                    <CreateOrUpdateForm isCreate={false} />
                </div>
            </div>
            <AreaView
                haveArea={haveArea}
                fetchFilteredAreas={fetchFilteredAreas}
                filteredAreas={filteredAreas}
            />
        </div>
    );
};

export default UpdateDistrict;
