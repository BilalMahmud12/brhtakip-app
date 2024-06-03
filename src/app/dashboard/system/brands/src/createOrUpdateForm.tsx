'use client'
import React from 'react';
import type { Brand } from '@/API';
import { Input, Label, Autocomplete } from '@aws-amplify/ui-react';
import { useStore } from '@/stores/utils/useStore';

interface CreateOrUpdateFormProps {
    isCreate?: boolean;
    brand?: Partial<Brand>;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit?: (data: Partial<Brand>) => void;
}

const CreateOrUpdateForm: React.FC<CreateOrUpdateFormProps> = (props) => {
    const {
        isCreate = true,
        brand = {} as Brand
    } = props;

    const { clientProfileStore, brandStore } = useStore();
    const { getClientProfiles } = clientProfileStore;

    const { getBrandFormValues, handleFormChange } = brandStore;

    return (
        <div>
            <form >
                <div className=''>
                    <div className='grid grid-cols-2 gap-8'>
                        <div className='input-group col-span-3'>
                            <Label htmlFor="name" className='block text-xs font-medium mb-1.5'>Marka</Label>
                            <Input
                                id="name"
                                name="name"
                                placeholder='Marka Ekle'
                                variation="quiet"
                                onChange={(e) => handleFormChange(e.target.value, 'name')}
                                defaultValue={!isCreate ? getBrandFormValues.name : ''}
                                className='custom-input'
                            />
                        </div>
                    </div>
                    {/* getBrandFormValues.name || '' */}
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
                            onSelect={(option) => handleFormChange(option.id, 'isActive')}
                            defaultValue={!isCreate ? (getBrandFormValues.isActive ? 'Aktif' : 'İnaktif') : ''}
                            className='custom-input'
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreateOrUpdateForm;
