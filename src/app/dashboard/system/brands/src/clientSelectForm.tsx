import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Autocomplete, Label } from '@aws-amplify/ui-react';
import { AppDispatch, RootState } from '@/lib/store';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { handleFormChange } from '@/lib/features/brandSlice'; // Correctly import handleFormChange from brandSlice
import { Brand } from '@/API';

// interface ClientSelectFormProps {
//     brand: Brand;
// }

const ClientSelectForm: React.FC = () => {
    const dispatch = useAppDispatch<AppDispatch>();
    const clientProfiles = useAppSelector((state: RootState) => state.client.clientProfiles);
    const brandForm = useAppSelector((state: RootState) => state.brand.brandForm);
    const brands = useAppSelector((state: RootState) => state.brand.brands);

    const getClientsList = (): { id: string, label: string }[] => {
        return clientProfiles?.map((client) => ({
            id: client.id,
            label: client?.name || ''
        }));
    }



    const loadFormData = async (brand: any) => {
        const { clientprofileID } = brand;
        dispatch(handleFormChange({ key: 'clientprofileID', value: clientprofileID }));
    }

    useEffect(() => {
        loadFormData(brands);
    }, []);





    const handleClientSelect = (option: { id: string }) => {
        dispatch(handleFormChange({ key: 'clientprofileID', value: option.id }));
    };

    const handleClientClear = () => {
        dispatch(handleFormChange({ key: 'clientprofileID', value: '' }));
    };

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
                        value={getClientsList().find(client => client.id === brandForm.clientprofileID)?.label}
                        onSelect={handleClientSelect}
                        onClear={handleClientClear}
                        className='custom-input'
                    />
                </div>
            </div>
        </div>
    );
};

export default ClientSelectForm;
