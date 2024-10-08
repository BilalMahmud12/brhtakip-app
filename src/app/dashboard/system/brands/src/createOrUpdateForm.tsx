'use client'
import React, { useEffect, useRef, useState } from 'react';
import type { Brand } from '@/API';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { handleFormChange } from '@/reduxStore/features/brandSlice';

import AutoComplete from '@/components/core/autoComplete';
import TextField from '@mui/material/TextField';
import { FormControlLabel } from '@mui/material';
import Switch from '@mui/material/Switch';

interface CreateOrUpdateFormProps {
    isCreate?: boolean;
    brand?: Brand;
}

const CreateOrUpdateForm: React.FC<CreateOrUpdateFormProps> = (
    {
        isCreate = true,
        brand = {} as Brand
    }
) => {
    const dispatch = useAppDispatch<AppDispatch>();
    const brandForm = useAppSelector((state: RootState) => state.brand.brandForm);
    const validationErrors = useAppSelector((state: RootState) => state.brand.validationErrors);
    const clientProfiles = useAppSelector((state: RootState) => state.client.clientProfiles);
    const currentUserProfile = useAppSelector((state: RootState) => state.global.currentUserProfile);
    const brandFormRef = React.useRef(brandForm);
    brandFormRef.current = brandForm;

    const [checked, setChecked] = useState(brandFormRef.current.isActive as boolean);

    useEffect(() => {
        setChecked(brandFormRef.current.isActive as boolean)
    }, [])

    const getClientsList = (): { value: string; label: string }[] => {
        return clientProfiles?.map((client) => ({
            value: client.id,
            label: client?.name || ''
        }));
    };

    useEffect(() => {
        if (!isCreate) {
            loadFormData(brand);
        }
    }, [brand])

    const loadFormData = async (brand: Brand) => {
        const {
            name,
            isActive,
        } = brand

        dispatch(handleFormChange({ key: 'name', value: name as string }))
        dispatch(handleFormChange({ key: 'isActive', value: isActive as boolean }))
    }

    return (
        <div className='h-full'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                <div className='my-2 pt-5' />
                <div className='p-6 bg-white shadow col-span-2'>
                    {isCreate && currentUserProfile?.clientprofileID === 'BRH_ADMIN' &&
                        <div className='input-group w-full col-span-2'>
                            <label htmlFor="client_name" className='block text-xs font-medium mb-1.5'>Müşteri *</label>
                            <AutoComplete
                                id="client_name"
                                options={getClientsList()}
                                value={getClientsList().find(client => client.value === brandForm.clientprofileID)?.label || ''}
                                handleOnChange={(option) => {
                                    if (typeof option !== 'string') {
                                        dispatch(handleFormChange({ key: 'clientprofileID', value: option?.value || '' }));
                                    }
                                }}
                            />
                        </div>
                    }

                    <div className='my-2 pt-5' />

                    <div className='input-group w-full col-span-1 lg:col-span-1'>
                        <label htmlFor="name" className='block text-xs font-medium mb-1.5'>Marka Adı *</label>
                        <TextField
                            id='name'
                            variant="standard"
                            sx={{ width: '100%' }}
                            error={!!validationErrors?.name}
                            helperText={validationErrors?.name || ''}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                const value = event.target.value;
                                dispatch(handleFormChange({ key: 'name', value }));
                            }}
                            defaultValue={!isCreate ? brandForm.name : ''}
                        />
                    </div>

                    <div className='my-2 pt-5' />

                    <div className='input-group w-full'>
                        <label htmlFor="brand_state" className='block text-xs font-medium mb-2'>Marka Durumu</label>
                        <div>
                            <FormControlLabel
                                label={brandFormRef.current.isActive as boolean ? 'Aktif' : 'Aktif Değil'}
                                control={<Switch
                                    color='success'
                                    checked={brandFormRef.current.isActive as boolean}
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
};

export default CreateOrUpdateForm;
