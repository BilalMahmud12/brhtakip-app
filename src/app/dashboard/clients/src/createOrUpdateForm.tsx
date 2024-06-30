'use client'
import React, { useEffect, useRef, useState } from 'react';
import type { ClientProfile } from '@/API';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { } from '@/reduxStore/features/clientSlice';

import AutoComplete from '@/components/core/autoComplete';
import TextField from '@mui/material/TextField';
import { FormControlLabel } from '@mui/material';
import Switch from '@mui/material/Switch';

interface CreateOrUpdateFormProps {
    isCreate?: boolean;
    clientProfile?: ClientProfile;
}

const CreateOrUpdateForm: React.FC<CreateOrUpdateFormProps> = (
    {
        isCreate = true,
        clientProfile = {} as ClientProfile
    }
) => {

    // const dispatch = useAppDispatch<AppDispatch>();
    // const clientProfiles = useAppSelector((state: RootState) => state.client.clientProfiles);
    // const validationErrors = useAppSelector((state: RootState) => state.client.validationErrors);
    // const clientFormRef = React.useRef(clientForm);
    // clientFormRef.current = clientForm;

    // const [checked, setChecked] = useState(clientFormRef.current.isActive as boolean);

    // useEffect(() => {
    //     setChecked(brandFormRef.current.isActive as boolean)
    // }, [])


    useEffect(() => {
        if (!isCreate) {
            loadFormData(clientProfile);
        }
    }, [clientProfile])

    const loadFormData = async (clientProfile: ClientProfile) => {
        const {
            name,
            isActive,
        } = clientProfile

        // dispatch(handleFormChange({ key: 'name', value: name as string }))
        // dispatch(handleFormChange({ key: 'isActive', value: isActive as boolean }))
    }

    return (
        <div className='h-full'>
            <div className='my-2 pt-5' />
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                <div className='p-6 bg-white shadow col-span-2'>
                    <div className='p-6'>
                        <div className='flex flex-col lg:flex-row lg:space-x-6'>
                            <div className='flex-1 mb-4 lg:mb-0'>
                                <label htmlFor="_name" className='block text-xs font-medium mb-1.5'>Mağaza Adı *</label>
                                {/* <TextField
                                    id='material_name'
                                    variant="standard"
                                    sx={{ width: '100%' }}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        dispatch(handleFormChange({ key: 'name', value: event.target.value }))
                                    }}
                                    defaultValue={!isCreate ? store.name : ''}
                                /> */}
                            </div>
                            <div className='flex-1'>
                                <label htmlFor="brand_state" className='block text-xs font-medium mb-2'>Firma Durumu</label>
                                {/* <FormControlLabel
                                    label={clientFormRef.current.isActive ? 'Aktif' : 'Aktif Değil'}
                                    control={<Switch
                                        color='success'
                                        checked={clientFormRef.current.isActive}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                            setChecked(event.target.checked);
                                            dispatch(handleFormChange({
                                                key: 'isActive',
                                                value: event.target.checked
                                            }));
                                        }}
                                    />}
                                    sx={{ '.MuiFormControlLabel-label': { fontSize: '0.90rem', fontWeight: '500' } }}
                                /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );

}

export default CreateOrUpdateForm;