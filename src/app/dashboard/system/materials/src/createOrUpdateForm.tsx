'use client'
import React, { useEffect } from 'react';
import type { Material } from '@/API';
import { Input, Label, Autocomplete } from '@aws-amplify/ui-react';
import { useRouter } from 'next-nprogress-bar';

import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { RootState, AppDispatch } from '@/reduxStore/store';
import { handleFormChange } from '@/reduxStore/features/materialSlice';

import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AutoComplete from '@/components/core/autoComplete';
import TextField from '@mui/material/TextField';
import { FormControlLabel } from '@mui/material';
import Switch from '@mui/material/Switch';

interface CreateOrUpdateFormProps {
    isCreate?: boolean;
    material?: Material;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CreateOrUpdateForm: React.FC<CreateOrUpdateFormProps> = (props) => {
    const {
        isCreate = true,
        material = {} as Material,
    } = props;

    const router = useRouter();
    const dispatch = useAppDispatch<AppDispatch>();
    const materialForm = useAppSelector((state: RootState) => state.material.materialForm);

    const materialFormmRef = React.useRef(materialForm)
    materialFormmRef.current = materialForm

    const [checked, setChecked] = React.useState(materialFormmRef.current.isActive as boolean);




    return (
        <div >
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
    //         loadFormData(material);
    //     }, []);
    // }

    // const loadFormData = async (material: Material) => {
    //     const {
    //         name,
    //         isActive,
    //     } = material;

    //     console.log('start loading form data!');
    //     dispatch(handleFormChange({ key: 'name', value: name || '' }));
    //     dispatch(handleFormChange({ key: 'isActive', value: isActive ? '1' : '0' }));
    //     console.log('finished loading form data:', materialForm);
    // }

    <form>
                <div className=''>
                    <div className='grid grid-cols-2 gap-8'>
                        <div className='input-group col-span-3'>
                            <Label htmlFor="name" className='block text-xs font-medium mb-1.5'>Malzeme</Label>
                            <Input
                                id="name"
                                name="name"
                                placeholder='Malzeme Ekle'
                                variation="quiet"
                                onChange={(e) => dispatch(handleFormChange({ key: 'name', value: e.target.value }))}
                                defaultValue={!isCreate ? materialForm.name : ''}
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
                            defaultValue={!isCreate ? (materialForm.isActive ? 'Aktif' : 'İnaktif') : ''}
                        />
                    </div>
                </div>
            </form>
    */