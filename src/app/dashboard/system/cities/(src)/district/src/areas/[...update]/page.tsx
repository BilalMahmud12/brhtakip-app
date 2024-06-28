'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Area } from '@/API';
import { useAppDispatch, useAppSelector } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import * as Repo from '@/repository/index';
import { setAreas, resetFormValues, setAreaForm, handleFormChange } from '@/reduxStore/features/areaSlice';
import CreateOrUpdateForm from '../src/createOrUpdateForm';

import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useRouter } from 'next-nprogress-bar';
import { usePathname } from 'next/navigation';

const UpdateAreaPage: React.FC = () => {
    const dispatch = useAppDispatch<AppDispatch>();
    const pathName = usePathname();
    const router = useRouter();
    const areaForm = useAppSelector((state: RootState) => state.area.areaForm);
    const areas = useAppSelector((state: RootState) => state.area.areas);
    const errors = useAppSelector((state: RootState) => state.area.errors);

    const areaFormRef = useRef(areaForm);
    areaFormRef.current = areaForm;

    const handleUpdateArea = async () => {
        if (!errors.name && areaFormRef.current.name.trim() !== '') {
            dispatch(handleFormChange({ key: 'name', value: areaFormRef.current.name }));
            try {
                const createArea = await Repo.AreaRepository.update(areaFormRef.current);

                if (createArea && createArea.data) {
                    const newAreas = await Repo.AreaRepository.getAllAreas();
                    dispatch(setAreas(newAreas as unknown as Area[]));
                    router.back();
                    dispatch(resetFormValues());
                }
            } catch (error) {
                console.log('Failed Update District', error);
            }
        } else {
            dispatch(handleFormChange({ key: 'name', value: areaFormRef.current.name }));
        }
    };

    useEffect(() => {
        const areaId = pathName.split('/').pop();
        const targetArea = areas.find(area => area.id === areaId);

        if (targetArea) {
            const { updatedAt, createdAt, __typename, Stores, ...restOfTheArea } = targetArea;

            const updatedArea = {
                id: restOfTheArea.id || '',
                name: restOfTheArea.name || '',
                isActive: restOfTheArea.isActive || false,
                districtID: restOfTheArea.districtID || '',
            }

            areaFormRef.current = updatedArea;
            dispatch(setAreaForm(updatedArea));
        }
    }, [pathName, areas, dispatch])

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
                                onClick={handleUpdateArea}
                            >
                                Kaydı Et
                            </Button>
                        </div>
                    </div>
                </div>

                <div className='space-y-3'>
                    <CreateOrUpdateForm
                        isCreate={false}
                        area={areaForm as Area}
                    />
                </div>
            </div>
        </div>
    );
}

export default UpdateAreaPage