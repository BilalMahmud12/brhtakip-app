'use client'
import React, { useEffect, useRef, useState } from 'react';
import type { City } from '@/API';

import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { RootState, AppDispatch } from '@/reduxStore/store';
import { handleFormChange } from '@/reduxStore/features/citySlice';

import TextField from '@mui/material/TextField';
import { FormControlLabel } from '@mui/material';
import Switch from '@mui/material/Switch';
interface CreateOrUpdateFormProps {
    isCreate?: boolean;
    city?: City;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CreateOrUpdateForm: React.FC<CreateOrUpdateFormProps> = (props) => {
    const {
        isCreate = true,
        city = {} as City,
    } = props;

    const dispatch = useAppDispatch<AppDispatch>();
    const cityForm = useAppSelector((state: RootState) => state.city.cityForm);
    const validationErrors = useAppSelector((state: RootState) => state.city.validationErrors);

    const cityformRef = useRef(cityForm);
    cityformRef.current = cityForm;

    const [checked, setChecked] = useState(cityformRef.current.isActive as boolean);

    useEffect(() => {
        setChecked(cityformRef.current.isActive as boolean)
    }, [])

    useEffect(() => {
        if (!isCreate) {
            loadFormData(city);
        }
    }, [city]);

    const loadFormData = async (city: City) => {
        const {
            name,
            isActive,
        } = city;

        dispatch(handleFormChange({ key: 'name', value: name || '' }));
        dispatch(handleFormChange({ key: 'isActive', value: isActive as boolean }))
    }

    return (
        <div>
            <div className='my-2 pt-5' />
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                <div className='p-6 bg-white shadow col-span-2'>

                    <div className='input-group w-full col-span-1 lg:col-span-1'>
                        <label htmlFor="material_name" className='block text-xs font-medium mb-1.5'>Şehir Adı *</label>
                        <TextField
                            id='material_name'
                            variant="standard"
                            sx={{ width: '100%' }}
                            error={!!validationErrors.name}
                            helperText={validationErrors.name || ''}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                dispatch(handleFormChange({ key: 'name', value: event.target.value }))
                            }}
                            defaultValue={!isCreate ? cityForm.name : ''}
                        />
                    </div>

                    <div className='my-2 pt-5' />

                    <div className='input-group w-full'>
                        <label htmlFor="brand_state" className='block text-xs font-medium mb-2'>Şehir Durumu</label>
                        <div>
                            <FormControlLabel
                                label={cityformRef.current.isActive as boolean ? 'Aktif' : 'Aktif Değil'}
                                control={<Switch
                                    color='success'
                                    checked={cityformRef.current.isActive as boolean}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        setChecked(event.target.checked);
                                        dispatch(handleFormChange({
                                            key: 'isActive',
                                            value: event.target.checked
                                        }));
                                    }}
                                />}
                                sx={{ '.MuiFormControlLabel-label': { fontSize: '0.90rem', fontWeight: '500' } }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateOrUpdateForm
