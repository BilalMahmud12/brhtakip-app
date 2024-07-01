'use client';
import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/reduxStore/hooks";
import { AppDispatch, RootState } from "@/reduxStore/store";
import * as Repo from '@/repository/index';
import type { Area, District } from '@/API';
import AreaView from "../src/areas/src/areaView";
import { setAreas } from "@/reduxStore/features/areaSlice";
import CreateOrUpdateForm from '../src/createOrUpdateForm';
import { resetFormValues, setDistricts, setDistrictForm, validateForm } from "@/reduxStore/features/districtSlice";
import { useRouter } from 'next-nprogress-bar';

import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { usePathname } from "next/navigation";
import { toast } from "sonner";

const UpdateDistrict: React.FC = () => {
    const dispatch = useAppDispatch<AppDispatch>();
    const router = useRouter();
    const pathName = usePathname();
    const districtForm = useAppSelector((state: RootState) => state.district.districtForm);
    const districts = useAppSelector((state: RootState) => state.district.districts);

    const districtformRef = useRef(districtForm);
    districtformRef.current = districtForm;

    const [filteredAreas, setFilteredAreas] = useState<Area[]>([]);
    const [haveArea, setHaveArea] = useState<boolean>(false);

    const validationErrors = useAppSelector((state: RootState) => state.district.validationErrors);
    const validationErrorsRef = React.useRef(validationErrors);
    validationErrorsRef.current = validationErrors;

    const isValidForm = Object.values(validationErrorsRef.current).every(value => value === null);

    useEffect(() => {
        const districtId = pathName.split('/').pop();
        const targetDistrict = districts.find(district => district.id === districtId);

        if (targetDistrict) {
            const { updatedAt, createdAt, __typename, Areas, Stores, ...restOfTheDistrict } = targetDistrict;

            const updatedDistrict = {
                id: restOfTheDistrict.id || '',
                name: restOfTheDistrict.name || '',
                isActive: restOfTheDistrict.isActive ?? false,
                cityID: restOfTheDistrict.cityID || '',
            };

            districtformRef.current = updatedDistrict;
            dispatch(setDistrictForm(districtformRef.current));
        }
    }, [districts, pathName]);


    const handleUpdateDistrict = async () => {
        dispatch(validateForm());

        if (!isValidForm) {
            toast.error('Lütfen formu eksiksiz doldurunuz.');
            return;
        } else {
            try {
                const updateDistrict = await Repo.DistrictRepository.update(districtformRef.current);
                if (updateDistrict && updateDistrict.data) {
                    const newDistricts = await Repo.DistrictRepository.getAllDistricts();
                    dispatch(setDistricts(newDistricts as unknown as District[]));
                    toast.success('İlçe güncellendi.');
                    router.back();
                }
            } catch (error) {
                console.log('Error', error);
            }
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
                                onClick={() => {
                                    router.back();
                                    dispatch(resetFormValues());
                                }}
                            >
                                Geri Dön
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
                    <CreateOrUpdateForm isCreate={false} district={districtForm as unknown as District} />
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
