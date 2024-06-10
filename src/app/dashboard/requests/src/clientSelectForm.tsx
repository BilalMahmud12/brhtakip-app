import React from 'react'
import { useAppSelector } from '@/lib/hooks';
import { RootState } from '@/lib/store';
import { handleFormChange } from '@/lib/features/requestSlice'
import { Autocomplete, Label } from '@aws-amplify/ui-react'

const ClientSelectForm = () => {
    const clientProfiles = useAppSelector((state: RootState) => state.client.clientProfiles);
    const requestForm = useAppSelector((state: RootState) => state.request.requestForm);

    const getClientsList = (): { id: string, label: string }[] => {
        return clientProfiles?.map((client) => ({
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
                        value={getClientsList().find(client => client.id === requestForm.clientprofileID)?.label}
                        onSelect={(option) => handleFormChange({ key: 'clientprofileID', value: option.id })}
                        onClear={() => handleFormChange({ key: 'clientprofileID', value: '' })}
                        className='custom-input'
                    />
                </div>
            </div>
        </div>
    )
}

export default ClientSelectForm