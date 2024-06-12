'use client'
import React, { useEffect } from 'react';
import type { Material } from '@/API';
import { Input, Label, Autocomplete } from '@aws-amplify/ui-react';

import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { RootState, AppDispatch } from '@/lib/store';
import { handleFormChange } from '@/lib/features/materialSlice';

interface CreateOrUpdateFormProps {
    isCreate?: boolean;
    material?: Material;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CreateOrUpdateForm: React.FC<CreateOrUpdateFormProps> = (props) => {
    const {
        isCreate = true,
        material = {} as Material
    } = props;

    const dispatch = useAppDispatch<AppDispatch>();
    const materials = useAppSelector((state: RootState) => state.material.materials);
    const materialForm = useAppSelector((state: RootState) => state.material.materialForm);

    // useEffect(() => {
    //     if (!isCreate) {
    //         loadFormData(material);
    //     }
    // }, [material]);

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


    return (
        <div>
            <form>
                <div className=''>
                    <div className='grid grid-cols-2 gap-8'>
                        <div className='input-group col-span-3'>
                            <Label htmlFor="name" className='block text-xs font-medium mb-1.5'>Melzeme</Label>
                            <Input
                                id="name"
                                name="name"
                                placeholder='Melzeme Ekle'
                                variation="quiet"
                                onChange={(e) => dispatch(handleFormChange({ key: 'name', value: e.target.value }))}
                                // defaultValue={!isCreate ? brandFormValues.name : ''}
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
                            // defaultValue={!isCreate ? (brandFormValues.isActive ? 'Aktif' : 'İnaktif') : ''}
                            className='custom-input'
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}
export default CreateOrUpdateForm