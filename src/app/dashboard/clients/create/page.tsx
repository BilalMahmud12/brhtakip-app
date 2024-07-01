'use client'
import React from 'react'
import { ClientProfile } from '@/API';
import { useRouter } from 'next-nprogress-bar';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import * as Repo from '@/repository/index';
import { toast } from 'sonner'

import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CreateOrUpdateForm from '../src/createOrUpdateForm';
import { setClientProfiles, validateForm } from '@/reduxStore/features/clientSlice';

const CreateClientPage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const clientProfiles = useAppSelector((state: RootState) => state.client.clientProfiles);
    const clientProfileForm = useAppSelector((state: RootState) => state.client.clientProfileForm);
    const clientFormRef = React.useRef(clientProfileForm);
    clientFormRef.current = clientProfileForm;

    const validationErrors = useAppSelector((state: RootState) => state.client.validationErrors);
    const validationErrorsRef = React.useRef(validationErrors);
    validationErrorsRef.current = validationErrors;

    const isValidForm = Object.values(validationErrorsRef.current).every(value => value === null);
    const handleCreateClient = async () => {
        dispatch(validateForm());
        if (!isValidForm) {
            toast.error('Lütfen formu eksiksiz doldurunuz');
            return;
        } else {
            try {
                const createClient = await Repo.ClientProfileRepository.create(clientFormRef.current);
                if (createClient && createClient.data) {
                    const newClientProfiles = await Repo.ClientProfileRepository.getClientProfiles();
                    dispatch(setClientProfiles(newClientProfiles as unknown as ClientProfile[]));
                    toast.success('Firma başarıyla oluşturuldu');
                    router.replace('/dashboard/clients');
                }
            } catch (error) {
                console.log('Error', error);
            }
        }
    };

    return (
        <div>
            <title>Firma Ekle - BRH Takip</title>

            <div className='h-full col-span-2'>
                <div className='flex items-center justify-between'>
                    <Button
                        variant="text"
                        startIcon={<ArrowBackIosIcon />}
                        onClick={() => {
                            router.push('/dashboard/clients');
                        }}
                    >
                        Firmalara Geri Dön
                    </Button>

                    <Button
                        variant="contained"
                        startIcon={<SaveIcon />}
                        onClick={handleCreateClient}
                    >
                        Kaydı Et
                    </Button>
                </div>
            </div>

            <div className='space-y-3'>
                <CreateOrUpdateForm isCreate={true} />
            </div>
        </div>
    )
}

export default CreateClientPage