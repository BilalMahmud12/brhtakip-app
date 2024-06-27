'use client'
import React, { useEffect, useRef } from 'react';
import type { District } from '@/API';
import { Input, Label, Autocomplete } from '@aws-amplify/ui-react';

import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { RootState, AppDispatch } from '@/reduxStore/store';
import { handleFormChange } from '@/reduxStore/features/districtSlice';

import TextField from '@mui/material/TextField';
import { FormControlLabel } from '@mui/material';
import Switch from '@mui/material/Switch';
import { isAction } from '@reduxjs/toolkit';

interface CreateOrUpdateFormProps {
    isCreate?: boolean;
    district?: District;
}

const CreateOrUpdateForm: React.FC<CreateOrUpdateFormProps> = (props) => {
    const {
        isCreate = true,
        district = {} as District,
    } = props;

    const dispatch = useAppDispatch<AppDispatch>();
    const districtForm = useAppSelector((state: RootState) => state.district.districtForm);

    const districtformRef = useRef(districtForm);
    districtformRef.current = districtForm;

    const [checked, setChecked] = React.useState(districtformRef.current.isActive as boolean);

    React.useEffect(() => {
        setChecked(districtformRef.current.isActive as boolean)
    }, [districtformRef.current.isActive])


    useEffect(() => {
        if (!isCreate) {
            loadFormData(district);
        }
    }, [district]);


    const loadFormData = async (district: District) => {
        const {
            name,
            isActive
        } = district;

        dispatch(handleFormChange({ key: 'name', value: name as string }));
        dispatch(handleFormChange({ key: 'isActive', value: isActive as boolean }));
    };

    return (
        <div >
            <div className='my-2 pt-5' />
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>

                <div className='p-6 bg-white shadow col-span-2'>

                    <div className='input-group w-full col-span-1 lg:col-span-1'>
                        <label htmlFor="material_name" className='block text-xs font-medium mb-1.5'>İlçe Adı *</label>
                        <TextField
                            id='material_name'
                            variant="standard"
                            sx={{ width: '100%' }}
                            helperText={''}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                dispatch(handleFormChange({ key: 'name', value: event.target.value }))
                            }}
                            defaultValue={!isCreate ? districtForm.name : ''}
                        />
                    </div>

                    <div className='my-2 pt-5' />

                    <div className='input-group w-full'>
                        <label htmlFor="brand_state" className='block text-xs font-medium mb-2'>İlçe Durumu</label>
                        <div>
                            <FormControlLabel
                                label={checked ? 'Aktif' : 'Aktif Değil'}
                                control={<Switch
                                    color='success'
                                    checked={checked}
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
