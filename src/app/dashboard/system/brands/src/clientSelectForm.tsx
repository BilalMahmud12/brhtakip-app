import { useStore } from '@/stores/utils/useStore';
import { Autocomplete, Label } from '@aws-amplify/ui-react'
import React from 'react'

const ClientSelectForm = () => {
    const { clientProfileStore, brandStore } = useStore();
    const { getClientProfiles } = clientProfileStore;

    const { handleFormChange, getBrandFormValues } = brandStore;

    const getClientsList = (): { id: string, label: string }[] => {
        return getClientProfiles?.map((client) => ({
            id: client.id,
            label: client?.name as string || ''
        }));
    }

    return (
        <div>
            <div className='grid grid-cols-2 gap-8 mb-6'>
                <div className='input-group col-span-2'>
                    <Label htmlFor="client_name" className='block text-xs font-medium mb-1.5'>Müşteri</Label>
                    <Autocomplete
                        id="client_name"
                        label="Müşteri"
                        placeholder='Müşteri Seç'
                        variation="quiet"
                        options={getClientsList()}
                        value={getClientsList().find(client => client.id === getBrandFormValues.clientprofileID)?.label}
                        onSelect={(option) => handleFormChange(option.id, 'clientprofileID')}
                        onClear={() => handleFormChange('', 'clientprofileID')}
                        className='custom-input'
                    />
                </div>
            </div>
        </div>
    )
}

export default ClientSelectForm
