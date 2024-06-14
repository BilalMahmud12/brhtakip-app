'use client'
import React, { useEffect } from 'react';
import type { Brand } from '@/API';
import { Input, Label, Autocomplete } from '@aws-amplify/ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/lib/store';
import { handleFormChange } from '@/lib/features/brandSlice';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';

interface CreateOrUpdateFormProps {
    isCreate?: boolean;
    brand?: Brand;
}

const CreateOrUpdateForm: React.FC<CreateOrUpdateFormProps> = (props) => {
    const {
        isCreate = true,
        brand = {} as Brand
    } = props;

    const brands = useAppSelector((state: RootState) => state.brand.brands);
    const dispatch = useAppDispatch<AppDispatch>();
    const brandFormValues = useAppSelector((state: RootState) => state.brand.brandForm);
    const brandForm = useAppSelector((state: RootState) => state.brand.brandForm);
    const clientProfiles = useAppSelector((state: RootState) => state.client.clientProfiles);

    const handleInputChange = (value: string, key: string) => {
        dispatch(handleFormChange({ key, value }));
    };

    const getClientsList = (): { id: string, label: string }[] => {
        return clientProfiles?.map((client) => ({
            id: client.id,
            label: client?.name || ''
        }));
    }

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

    return (
        <div>
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
        </div>
    );
};

export default CreateOrUpdateForm;
