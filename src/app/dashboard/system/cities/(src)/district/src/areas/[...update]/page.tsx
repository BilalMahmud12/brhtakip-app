'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Area } from '@/API';
import { useAppDispatch, useAppSelector } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import * as Repo from '@/repository/index';
import { setAreas, resetFormValues, setAreaForm, handleFormChange, validateForm } from '@/reduxStore/features/areaSlice';
import CreateOrUpdateForm from '../src/createOrUpdateForm';
import { toast } from 'sonner'
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
    const areaFormRef = useRef(areaForm);
    areaFormRef.current = areaForm;

    const validationErrors = useAppSelector((state: RootState) => state.area.validationErrors);
    const validationErrorsRef = React.useRef(validationErrors);
    validationErrorsRef.current = validationErrors;

    const isValidForm = Object.values(validationErrorsRef.current).every(value => value === null);

    const handleUpdateArea = async () => {
        dispatch(validateForm());
        if (!isValidForm) {
            toast.error('Lütfen formu eksiksiz doldurunuz.');
            return;
        } else {
            try {
                const updateArea = await Repo.AreaRepository.update(areaFormRef.current);
                if (updateArea && updateArea.data) {
                    const newAreas = await Repo.AreaRepository.getAllAreas();
                    dispatch(setAreas(newAreas as unknown as Area[]));
                    dispatch(resetFormValues());
                    toast.success('Mahalle güncellendi.');
                    router.back();
                }
            } catch (error) {
                console.log('Error', error);
            }
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
                        area={areaForm as unknown as Area}
                    />
                </div>
            </div>
        </div>
    );
}

export default UpdateAreaPage