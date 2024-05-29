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
    const { clientProfileStore, brandStore } = useStore();
    const { getClientProfiles } = clientProfileStore;

    const { getBrandFormValues, handleFormChange } = brandStore;

    const getClientsList = (): { id: string, label: string }[] => {
        return getClientProfiles?.map((client) => ({
            id: client.id,
            label: client?.name || ''
        })) || [];
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        handleFormChange(value, name as keyof typeof brandStore.requestForm);
    };

    const handleSelect = (option: { id: string, label: string }) => {
        handleFormChange(option.id, 'clientprofileID');
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (props.onSubmit) {
            props.onSubmit(getBrandFormValues);
            console.log(getBrandFormValues);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='bg-gray-100 px-6 py-8 rounded-md border border-zinc-200'>
                    <div className='grid grid-cols-2 gap-8'>
                        <div className='input-group col-span-3'>
                            <Label htmlFor="name" className='block text-xs font-medium mb-1.5'>Marka</Label>
                            <Input
                                id="name"
                                name="name"
                                placeholder='Marka Ekle'
                                variation="quiet"
                                value={getBrandFormValues.name}
                                onChange={handleInputChange}
                                className='custom-input'
                            />
                        </div>
                    </div>

                    <div className='my-2 pt-5' />

                    <div className='input-group col-span-2'>
                        <Label htmlFor="client_name" className='block text-xs font-medium mb-1.5'>Müşteri</Label>
                        <Autocomplete
                            id="client_name"
                            label="Müşteri"
                            placeholder='Müşteri Seç'
                            variation="quiet"
                            options={getClientsList()}
                            value={getClientsList().find(client => client.id === getBrandFormValues.clientprofileID)?.label || ''}
                            onSelect={handleSelect}
                            className='custom-input'
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreateOrUpdateForm;
