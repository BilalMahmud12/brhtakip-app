'use client'
import React, { useEffect } from 'react';
import type { ApplicationArea } from '@/API';
import { Input, Label, Autocomplete } from '@aws-amplify/ui-react';

import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { RootState, AppDispatch } from '@/lib/store';
import { handleFormChange } from '@/lib/features/applicationAreaSlice';

interface CreateOrUpdateFormProps {
    isCreate?: boolean;
    applicationArea?: ApplicationArea;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CreateOrUpdateForm: React.FC<CreateOrUpdateFormProps> = (props) => {
    const {
        isCreate = true,
        applicationArea = {} as ApplicationArea,
    } = props;

    const dispatch = useAppDispatch<AppDispatch>();
    const applicationAreaForm = useAppSelector((state: RootState) => state.applicationArea.applicationAreaForm);

    if (!isCreate) {
        useEffect(() => {
            loadFormData(applicationArea);
        }, []);
    }

    const loadFormData = async (applicationArea: ApplicationArea) => {
        const { name, isActive } = applicationArea;
        dispatch(handleFormChange({ key: 'name', value: name || '' }));
        dispatch(handleFormChange({ key: 'isActive', value: isActive ? '1' : '0' }));
    }

    return (
        <form>
            <div className='grid grid-cols-2 gap-8'>
                <div className='input-group col-span-3'>
                    <Label htmlFor="name" className='block text-xs font-medium mb-1.5'>Uygulama Alanları</Label>
                    <Input
                        id="name"
                        name="name"
                        placeholder='Uygulama Alanı Ekle'
                        variation="quiet"
                        onChange={(e) => dispatch(handleFormChange({ key: 'name', value: e.target.value }))}
                    // defaultValue={!isCreate ? applicationAreaForm.name : ''}
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
                // defaultValue={!isCreate ? (applicationAreaForm.isActive ? 'Aktif' : 'İnaktif') : ''}
                />
            </div>
        </form>
    );
}

export default CreateOrUpdateForm