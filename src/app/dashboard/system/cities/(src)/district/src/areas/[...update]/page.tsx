'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Area } from '@/API';
import { useAppDispatch, useAppSelector } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import * as Repo from '@/repository/index';
import { setAreas, resetFormValues } from '@/reduxStore/features/areaSlice';
import CreateOrUpdateForm from '../src/createOrUpdateForm';


import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useRouter } from 'next/navigation';

const UpdateAreaPage: React.FC = () => {
    const dispatch = useAppDispatch<AppDispatch>();
    const router = useRouter();
    const areaForm = useAppSelector((state: RootState) => state.area.areaForm);

    const areaFormRef = useRef(areaForm);
    areaFormRef.current = areaForm;

    const handleUpdateArea = async () => {
        try {
            const createArea = await Repo.AreaRepository.update(areaFormRef.current);

            if (createArea && createArea.data) {
                const newAreas = await Repo.AreaRepository.getAllAreas();
                dispatch(setAreas(newAreas as unknown as Area[]));
                dispatch(resetFormValues());
                router.back();
            }
        } catch (error) {
            console.log('Failed Update District', error);
        }
    };
    return (
        <div>
            <div >
                <title>Mahalle Güncelle - BRH Takip</title>

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
                                onClick={handleUpdateArea}
                            >
                                Kaydı Et
                            </Button>
                        </div>
                    </div>
                </div>

                <div className='space-y-3'>
                    <CreateOrUpdateForm isCreate={false} />
                </div>
            </div>
        </div>
    );
}

export default UpdateAreaPage