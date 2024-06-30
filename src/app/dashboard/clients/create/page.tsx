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

const CreateClientPage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const clientProfiles = useAppSelector((state: RootState) => state.client.clientProfiles);
    // const clientForm = useAppSelector((state: RootState) => state.client.clientForm);
    // const clientFormRef = React.useRef(clientForm);
    // clientFormRef.current = clientForm;


    // const handleCreateClient = async () => {
    //     try {
    //         const createClient = await Repo.ClientProfileRepository.create(clientFormRef.current);
    //         if (createClient && createClient.data) {
    //             const newClient = await Repo.ClientProfileRepository.getCities();
    //             dispatch(setClientProfiles(newClient as unknown as ClientProfile[]));
    //             toast.success('Firma başarıyla oluşturuldu');
    //             router.replace('/dashboard/clients');
    //         }
    //     } catch (error) {
    //         console.log('Error', error);
    //     }
    // };


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
                    // onClick={handleCreateClient}
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