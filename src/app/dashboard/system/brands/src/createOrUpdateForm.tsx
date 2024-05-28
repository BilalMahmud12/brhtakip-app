'use client'
import React, { useEffect, useState } from 'react';
import type { Brand, ClientProfile } from '@/API';
import { Input, Label, Autocomplete, Button, Divider } from '@aws-amplify/ui-react';
import { useStore } from '@/stores/utils/useStore';

interface CreateOrUpdateFormProps {
    isCreate?: boolean;
    request?: Brand;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit?: (data: Brand) => void;
}

const CreateOrUpdateForm: React.FC<CreateOrUpdateFormProps> = (props) => {
    const { clientProfileStore } = useStore();
    const { getClientProfiles } = clientProfileStore;

    const getClientsList = (): { id: string, label: string }[] => {
        return getClientProfiles?.map((client) => ({
            id: client.id,
            label: client?.name as string || ''
        }));
    }

    return (
        <div>
            <div className=''>
                <form>
                    <div className='bg-gray-100 px-6 py-8 rounded-md border border-zinc-200'>
                        <div className='input-group col-span-2'>
                            <Label htmlFor="client_name" className='block text-xs font-medium mb-1.5'>Müşteri</Label>
                            <Autocomplete
                                id="client_name"
                                label="Müşteri"
                                placeholder='Müşteri Seç'
                                variation="quiet"
                                options={getClientsList()}
                                className='custom-input'
                            />
                        </div>

                        <div className='my-2 pt-5' />

                        <div className='grid grid-cols-2 gap-8'>
                            <div className='input-group col-span-3'>
                                <Label htmlFor="add_brand" className='block text-xs font-medium mb-1.5'>Marka</Label>
                                <Input
                                    id="add_brand"
                                    name="add_brand"
                                    placeholder='Marka Ekle'
                                    variation="quiet"
                                    className='custom-input'
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateOrUpdateForm;