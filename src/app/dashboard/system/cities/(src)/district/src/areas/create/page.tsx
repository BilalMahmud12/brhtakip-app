'use client';
import React, { useEffect, useRef } from 'react';
import CreateOrUpdateForm from '../src/createOrUpdateForm';
import { useRouter } from 'next-nprogress-bar';
import { setAreas, resetFormValues, handleFormChange } from '@/reduxStore/features/areaSlice';
import * as Repo from '@/repository/index';

import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useAppDispatch, useAppSelector } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { Area } from '@/API';

const CreateAreaPage: React.FC = () => {
    const router = useRouter();
    const dispatch = useAppDispatch<AppDispatch>();
    const areaForm = useAppSelector((state: RootState) => state.area.areaForm);
    const errors = useAppSelector((state: RootState) => state.area.errors);

    const areaFormRef = useRef(areaForm);
    areaFormRef.current = areaForm;

    const handleCreateArea = async () => {
        if (!errors.name && areaFormRef.current.name.trim() !== '') {
            try {
                const createArea = await Repo.AreaRepository.create(areaFormRef.current);

                if (createArea && createArea.data) {
                    const newAreas = await Repo.AreaRepository.getAllAreas();
                    dispatch(setAreas(newAreas as unknown as Area[]));
                    router.back();
                    dispatch(resetFormValues());
                }
            } catch (error) {
                console.log('Error', error);
            }
        } else {
            dispatch(handleFormChange({ key: 'name', value: areaFormRef.current.name }));
        }
    };

    return (
        <div >
            <title>Malzeme Ekle - BRH Takip</title>

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
                            onClick={handleCreateArea}
                        >
                            Kaydı Et
                        </Button>
                    </div>
                </div>
            </div>

            <div className='space-y-3'>
                <CreateOrUpdateForm isCreate={true} />
            </div>
        </div>
    );
}

export default CreateAreaPage