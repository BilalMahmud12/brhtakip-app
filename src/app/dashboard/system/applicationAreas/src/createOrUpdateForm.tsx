'use client'
import React, { useEffect, useRef } from 'react';
import type { ApplicationArea } from '@/API';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { RootState, AppDispatch } from '@/reduxStore/store';
import { handleFormChange } from '@/reduxStore/features/applicationAreaSlice';

import TextField from '@mui/material/TextField';
import { FormControlLabel } from '@mui/material';
import Switch from '@mui/material/Switch';

interface CreateOrUpdateFormProps {
    isCreate?: boolean;
    applicationArea?: ApplicationArea;
}

const CreateOrUpdateForm: React.FC<CreateOrUpdateFormProps> = (props) => {
    const {
        isCreate = true,
        applicationArea = {} as ApplicationArea,
    } = props;

    const dispatch = useAppDispatch<AppDispatch>();
    const applicationAreaForm = useAppSelector((state: RootState) => state.applicationArea.applicationAreaForm);
    const validationErrors = useAppSelector((state: RootState) => state.applicationArea.validationErrors);
    const applicationAreaRef = useRef(applicationAreaForm);
    applicationAreaRef.current = applicationAreaForm;

    const [checked, setChecked] = React.useState(applicationAreaRef.current.isActive as boolean);

    if (!isCreate) {
        useEffect(() => {
            loadFormData(applicationArea);
        }, []);
    }

    const loadFormData = async (applicationArea: ApplicationArea) => {
        const {
            name,
            isActive
        } = applicationArea;

        dispatch(handleFormChange({ key: 'name', value: name || '' }));
        dispatch(handleFormChange({ key: 'isActive', value: isActive as boolean }))
    }

    return (
        <div >
            <div className='my-2 pt-5' />
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                <div className='p-6 bg-white shadow col-span-2'>

                    <div className='input-group w-full col-span-1 lg:col-span-1'>
                        <label htmlFor="applicationArea_name" className='block text-xs font-medium mb-1.5'>Uygulama Alan Adı *</label>
                        <TextField
                            id='material_name'
                            variant="standard"
                            sx={{ width: '100%' }}
                            error={!!validationErrors.name}
                            helperText={validationErrors.name || ''}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                dispatch(handleFormChange({ key: 'name', value: event.target.value }))
                            }}
                            defaultValue={!isCreate ? applicationAreaForm.name : ''}
                        />
                    </div>

                    <div className='my-2 pt-5' />

                    <div className='input-group w-full'>
                        <label htmlFor="brand_state" className='block text-xs font-medium mb-2'>Uygulama Alan Durumu</label>
                        <div>
                            <FormControlLabel
                                label={applicationAreaRef.current.isActive as boolean ? 'Aktif' : 'Aktif Değil'}
                                control={<Switch
                                    color='success'
                                    checked={applicationAreaRef.current.isActive as boolean}
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
    );
}

export default CreateOrUpdateForm
