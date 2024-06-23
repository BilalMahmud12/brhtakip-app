'use client'
import React, { useEffect, useRef } from 'react';
import type { City } from '@/API';
import { Input, Label, Autocomplete } from '@aws-amplify/ui-react';

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

    const cityformRef = useRef(cityForm);
    cityformRef.current = cityForm;

    const [checked, setChecked] = React.useState(cityformRef.current.isActive as boolean);

    return (
        <div>
            <div className='my-2 pt-5' />
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>

                <div className='p-6 bg-white shadow col-span-2'>
                    <h2 className='text-base font-semibold mb-6'>Malzeme Ekle</h2>

                    <div className='input-group w-full col-span-1 lg:col-span-1'>
                        <label htmlFor="material_name" className='block text-xs font-medium mb-1.5'>Malzeme Adı *</label>
                        <TextField
                            id='material_name'
                            variant="standard"
                            sx={{ width: '100%' }}
                            helperText={''}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                dispatch(handleFormChange({ key: 'name', value: event.target.value }))
                            }}
                            defaultValue={!isCreate ? cityForm.name : ''}
                        />
                    </div>

                    <div className='my-2 pt-5' />

                    <div className='input-group w-full'>
                        <label htmlFor="brand_state" className='block text-xs font-medium mb-2'>Malzeme Durumu</label>
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

/*
    // if (!isCreate) {
    //     useEffect(() => {
    //         loadFormData(city);
    //     }, []);
    // }

    // const loadFormData = async (city: City) => {
    //     const {
    //         name,
    //         isActive,
    //     } = city;

    //     console.log('start loading form data!');
    //     dispatch(handleFormChange({ key: 'name', value: name || '' }));
    //     dispatch(handleFormChange({ key: 'isActive', value: isActive ? '1' : '0' }));
    //     console.log('finished loading form data:', cityForm);
    // }

    <form>
                <div className=''>
                    <div className='grid grid-cols-2 gap-8'>
                        <div className='input-group col-span-3'>
                            <Label htmlFor="name" className='block text-xs font-medium mb-1.5'>Şehir</Label>
                            <Input
                                id="name"
                                name="name"
                                placeholder='Şehir Ekle'
                                variation="quiet"
                                onChange={(e) => dispatch(handleFormChange({ key: 'name', value: e.target.value }))}
                                defaultValue={!isCreate ? cityForm.name : ''}
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
                            defaultValue={!isCreate ? (cityForm.isActive ? 'Aktif' : 'İnaktif') : ''}
                        />
                    </div>
                </div>
            </form>
*/