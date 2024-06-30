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
const UpdateClientPage: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const clientProfiles = useAppSelector((state: RootState) => state.client.clientProfiles);
    // const clientForm = useAppSelector((state: RootState) => state.client.clientForm);
    // const clientFormRef = React.useRef(clientForm);
    // clientFormRef.current = clientForm;

    // async function handleUpdateClient() {
    //     try {
    //         const updateClient = await Repo.ClientProfileRepository.update(clientFormRef.current);
    //         if (updateClient && updateClient.data) {
    //             const newClient = await Repo.ClientProfileRepository.getClientProfiles();
    //             dispatch(setClientProfiles(newClient as unknown as ClientProfile[]));
    //             dispatch(resetFormValues());
    //             toast.success('Firma güncellendi');
    //             router.replace('/dashboard/clients');
    //         }
    //     } catch (error) {
    //         console.log('Error', error);
    //     }
    // }

    return (
        <div>
            <title>Firma Güncelle - BRH Takip</title>

            <div className='h-full'>
                <div className='h-full col-span-2'>
                    <div className='flex items-center justify-between'>
                        <Button
                            variant="text"
                            startIcon={<ArrowBackIosIcon />}
                            onClick={() => router.push('/dashboard/system/brands')}
                        >
                            Firmalara Geri Dön
                        </Button>

                        <Button
                            variant="contained"
                            startIcon={<SaveIcon />}
                        // onClick={handleUpdateClient}
                        >
                            Kaydı Et
                        </Button>
                    </div>
                </div>
            </div>

            {/* <div className='space-y-3'>
                <CreateOrUpdateForm
                    isCreate={true}
                    Client={clientForm as unknown as ClientProfile}
                />
            </div> */}
        </div>
    )
}

export default UpdateClientPage