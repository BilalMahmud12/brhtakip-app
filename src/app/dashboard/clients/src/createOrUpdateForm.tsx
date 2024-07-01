'use client'
import React, { useEffect, useRef, useState } from 'react';
import type { ClientProfile } from '@/API';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { handleFormChange } from '@/reduxStore/features/clientSlice';

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

    const dispatch = useAppDispatch<AppDispatch>();
    const clientProfiles = useAppSelector((state: RootState) => state.client.clientProfiles);
    const clientProfileForm = useAppSelector((state: RootState) => state.client.clientProfileForm);
    // const validationErrors = useAppSelector((state: RootState) => state.client.validationErrors);
    const clientFormRef = React.useRef(clientProfileForm);
    clientFormRef.current = clientProfileForm;

    const [checked, setChecked] = useState(clientFormRef.current.isActive as boolean);

    useEffect(() => {
        setChecked(clientFormRef.current.isActive as boolean)
    }, [])


    useEffect(() => {
        if (!isCreate) {
            loadFormData(clientProfile);
        }
    }, [clientProfile])

    const loadFormData = async (clientProfile: ClientProfile) => {
        const {
            name,
            isActive,
            rootUserId,
            contactEmail,
            contactPhone,
            address,
        } = clientProfile

        dispatch(handleFormChange({ key: 'name', value: name as string }))
        dispatch(handleFormChange({ key: 'isActive', value: isActive as boolean }))
        dispatch(handleFormChange({ key: 'rootUserId', value: rootUserId as string }))
        dispatch(handleFormChange({ key: 'contactEmail', value: contactEmail as string }))
        dispatch(handleFormChange({ key: 'contactPhone', value: contactPhone as string }))
        dispatch(handleFormChange({ key: 'address', value: address as string }))
    }

    return (
        <div className='h-full'>
            <div className='my-2 pt-5' />
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4  sm:gap-6'>
                <div className='p-6 bg-white shadow col-span-2'>
                    <div className='p-10'>
                        <div className='flex flex-col lg:flex-row lg:space-x-6'>
                            <div className='flex-1 mb-4 lg:mb-0'>
                                <label htmlFor="client_name" className='block text-xs font-medium mb-1.5'>Firma Adı *</label>
                                <TextField
                                    id='client_name'
                                    variant="standard"
                                    sx={{ width: '100%' }}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        dispatch(handleFormChange({ key: 'name', value: event.target.value }))
                                    }}
                                    defaultValue={!isCreate ? clientFormRef.current.name : ''}
                                />
                            </div>
                            <div className='flex-1'>
                                <label htmlFor="root_user_id" className='block text-xs font-medium mb-1.5'>Root Kullanıcı ID *</label>
                                <TextField
                                    id='root_user_id'
                                    variant="standard"
                                    sx={{ width: '100%' }}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        dispatch(handleFormChange({ key: 'rootUserId', value: event.target.value }))
                                    }}
                                    defaultValue={!isCreate ? clientFormRef.current.rootUserId : ''}
                                />
                            </div>
                        </div>
                        <div className='my-2 pt-5' />
                        <div className='flex flex-col lg:flex-row lg:space-x-6 mt-4'>
                            <div className='flex-1 mb-4 lg:mb-0'>
                                <label htmlFor="contact_email" className='block text-xs font-medium mb-1.5'>İletişim E-postası *</label>
                                <TextField
                                    id='contact_email'
                                    variant="standard"
                                    sx={{ width: '100%' }}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        dispatch(handleFormChange({ key: 'contactEmail', value: event.target.value }))
                                    }}
                                    defaultValue={!isCreate ? clientFormRef.current.contactEmail : ''}
                                />
                            </div>
                            <div className='flex-1'>
                                <label htmlFor="contact_phone" className='block text-xs font-medium mb-1.5'>İletişim Telefonu</label>
                                <TextField
                                    id='contact_phone'
                                    variant="standard"
                                    sx={{ width: '100%' }}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        dispatch(handleFormChange({ key: 'contactPhone', value: event.target.value }))
                                    }}
                                    defaultValue={!isCreate ? clientFormRef.current.contactPhone : ''}
                                />
                            </div>
                        </div>
                        <div className='my-2 pt-5' />
                        <div className='flex flex-col lg:flex-row lg:space-x-6 mt-4'>
                            <div className='flex-1 mb-4 lg:mb-0'>
                                <label htmlFor="address" className='block text-xs font-medium mb-1.5'>Adres</label>
                                <TextField
                                    id='address'
                                    variant="standard"
                                    sx={{ width: '100%' }}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        dispatch(handleFormChange({ key: 'address', value: event.target.value }))
                                    }}
                                    defaultValue={!isCreate ? clientFormRef.current.address : ''}
                                />
                            </div>
                            <div className='flex-1'>
                                <label htmlFor="brand_state" className='block text-xs font-medium mb-2'>Firma Durumu</label>
                                <FormControlLabel
                                    label={clientFormRef.current.isActive as boolean ? 'Aktif' : 'Aktif Değil'}
                                    control={<Switch
                                        color='success'
                                        checked={clientFormRef.current.isActive as boolean}
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
        </div>
    );
};


export default CreateOrUpdateForm;