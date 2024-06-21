'use client'
import React, { useEffect } from 'react';
import type { Brand } from '@/API';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { handleFormChange } from '@/reduxStore/features/brandSlice';
import { useRouter } from 'next-nprogress-bar';

import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
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
        brand = {} as Brand }
) => {

    const router = useRouter();
    const dispatch = useAppDispatch<AppDispatch>();
    const brandForm = useAppSelector((state: RootState) => state.brand.brandForm);
    const clientProfiles = useAppSelector((state: RootState) => state.client.clientProfiles);
    const brandFormRef = React.useRef(brandForm)
    brandFormRef.current = brandForm

    const [checked, setChecked] = React.useState(brandFormRef.current.isActive as boolean);

    const getClientsList = (): { value: string; label: string }[] => {
        return clientProfiles?.map((client) => ({
            value: client.id,
            label: client?.name || ''
        }));
    };

    return (
        <div className='h-full'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>

                <div className='p-6 bg-white shadow col-span-2'>

                    {isCreate ?
                        <div className='input-group w-full col-span-2'>
                            <label htmlFor="client_name" className='block text-xs font-medium mb-1.5'>Müşteri</label>
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
                        : ''}

                    <div className='my-2 pt-5' />

                    <div className='input-group w-full col-span-1 lg:col-span-1'>
                        <label htmlFor="lastName" className='block text-xs font-medium mb-1.5'>Marka Adı *</label>
                        <TextField
                            id='lastName'
                            variant="standard"
                            sx={{ width: '100%' }}
                            helperText={''}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                dispatch(handleFormChange({ key: 'name', value: event.target.value }))
                            }}
                            defaultValue={!isCreate ? brandForm.name : ''}
                        />
                    </div>

                    <div className='my-2 pt-5' />

                    <div className='input-group w-full'>
                        <label htmlFor="brand_state" className='block text-xs font-medium mb-2'>Hesap Durumu</label>
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
    );
};

export default CreateOrUpdateForm;



/*
const getClientsList = (): { id: string, label: string }[] => {
        return clientProfiles?.map((client) => ({
            id: client.id,
            label: client?.name || ''
        }));
    }



<form>
                <div className=''>
                    <div className='grid grid-cols-2 gap-8'>
                        {isCreate ?
                            <div className='input-group col-span-2'>
                                <Label htmlFor="client_name" className='block text-xs font-medium mb-1.5'>Müşteri</Label>
                                <Autocomplete
                                    id="client_name"
                                    label="Müşteri"
                                    placeholder='Müşteri Seç'
                                    variation="quiet"
                                    options={getClientsList()}
                                    value={getClientsList().find(client => client.id === brandForm.clientprofileID)?.label}
                                    onSelect={handleClientSelect}
                                    onClear={handleClientClear}
                                    className='custom-input'
                                />

                            </div>
                            : ''}

                        <div className='input-group col-span-3'>
                            <Label htmlFor="name" className='block text-xs font-medium mb-1.5'>Marka</Label>
                            <Input
                                id="name"
                                name="name"
                                placeholder='Marka Ekle'
                                variation="quiet"
                                onChange={(e) => dispatch(handleFormChange({ key: 'name', value: e.target.value }))}
                                defaultValue={!isCreate ? brandFormValues.name : ''}
                                className='custom-input'
                            />
                        </div>
                    </div>

                    <div className='my-2 pt-5' />

                    <div className='input-group'>
                        <Label htmlFor="isActive" className='block text-xs font-medium mb-1.5'>Durum</Label>
                        <Autocomplete
                            id="isActive"
                            label="Durum"
                            placeholder='Durum Seç'
                            variation="quiet"
                            options={[
                                { id: '1', label: 'Aktif' },
                                { id: '0', label: 'İnaktif' }
                            ]}
                            onSelect={(option) => dispatch(handleFormChange({ key: 'isActive', value: option.id }))}
                            defaultValue={!isCreate ? (brandFormValues.isActive ? 'Aktif' : 'İnaktif') : ''}
                            className='custom-input'
                        />
                    </div>
                </div>
            </form>




        const loadFormData = async (brand: Brand) => {
        const {
            name,
            isActive,
            clientprofileID,
        } = brand;

        // console.log('start loading form data!');
        dispatch(handleFormChange({ key: 'clientprofileID', value: clientprofileID }));
        dispatch(handleFormChange({ key: 'name', value: name as string }));
        dispatch(handleFormChange({ key: 'isActive', value: isActive ? '1' : '0' }));
        // console.log('finished loading form data:', brandForm);
    }

    if (!isCreate) {
        useEffect(() => {
            loadFormData(brand);
        }, [])
    }

    const handleClientSelect = (option: { id: string }) => {
        dispatch(handleFormChange({ key: 'clientprofileID', value: option.id }));
        console.log('Client Selected:', brandForm);
        console.log('Client Selected:', brandFormValues);
    };

    const handleClientClear = () => {
        dispatch(handleFormChange({ key: 'clientprofileID', value: '' }));
    };
*/