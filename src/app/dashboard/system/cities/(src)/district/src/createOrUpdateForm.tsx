'use client'
import React, { useEffect } from 'react';
import type { District } from '@/API';
import { Input, Label, Autocomplete } from '@aws-amplify/ui-react';

import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { RootState, AppDispatch } from '@/lib/store';
import { handleFormChange } from '@/lib/features/districtSlice';

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

    // if (!isCreate) {
    //     useEffect(() => {
    //         loadFormData(district);
    //     }, []);
    // }

    // const loadFormData = async (district: District) => {
    //     const {
    //         name,
    //         isActive,
    //     } = district;

    //     console.log('start loading form data!');
    //     dispatch(handleFormChange({ key: 'name', value: name as string }));
    //     dispatch(handleFormChange({ key: 'isActive', value: isActive ? '1' : '0' }));
    //     console.log('finished loading form data:', districtForm);
    // }


    return (
        <div>
            <form>
                <div className=''>
                    <div className='grid grid-cols-2 gap-8'>
                        <div className='input-group col-span-3'>
                            <Label htmlFor="name" className='block text-xs font-medium mb-1.5'>İlçe</Label>
                            <Input
                                id="name"
                                name="name"
                                placeholder='İlçe Ekle'
                                variation="quiet"
                                onChange={(e) => dispatch(handleFormChange({ key: 'name', value: e.target.value }))}
                                defaultValue={!isCreate ? districtForm.name : ''}
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
                            defaultValue={!isCreate ? (districtForm.isActive ? 'Aktif' : 'İnaktif') : ''}
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}
export default CreateOrUpdateForm