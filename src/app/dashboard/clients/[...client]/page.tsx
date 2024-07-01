'use client'
import React, { useEffect } from 'react'
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
import { setClientProfiles, resetClientForm, setClientProfileForm, validateForm } from '@/reduxStore/features/clientSlice';
import CreateOrUpdateForm from '../src/createOrUpdateForm';
import { usePathname } from 'next/navigation';
const UpdateClientPage: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();
    const pathName = usePathname();
    const clientProfiles = useAppSelector((state: RootState) => state.client.clientProfiles);
    const clientProfileForm = useAppSelector((state: RootState) => state.client.clientProfileForm);
    const clientFormRef = React.useRef(clientProfileForm);
    clientFormRef.current = clientProfileForm;

    const validationErrors = useAppSelector((state: RootState) => state.client.validationErrors);
    const validationErrorsRef = React.useRef(validationErrors);
    validationErrorsRef.current = validationErrors;

    const isValidForm = Object.values(validationErrorsRef.current).every(value => value === null);

    useEffect(() => {
        const clientProfileId = pathName?.split('/').pop();
        const targetClientProfile = clientProfiles.find(clientProfile => clientProfile.id === clientProfileId);

        console.log('targetClientProfile', targetClientProfile)

        if (targetClientProfile) {
            const { updatedAt, createdAt, __typename, UserProfiles, Brands, Requests, ...restOfTheClientProfile } = targetClientProfile;

            const updatedClientProfile = {
                id: restOfTheClientProfile.id || '',
                name: restOfTheClientProfile.name || '',
                isActive: restOfTheClientProfile.isActive ?? false,
                rootUserId: restOfTheClientProfile.rootUserId || '',
                contactEmail: restOfTheClientProfile.contactEmail || '',
                contactPhone: restOfTheClientProfile.contactPhone || '',
                address: restOfTheClientProfile.address || '',
            };
            clientFormRef.current = updatedClientProfile;
            dispatch(setClientProfileForm(updatedClientProfile));
        }
    }, [pathName, dispatch])

    async function handleUpdateClient() {
        dispatch(validateForm());
        if (!isValidForm) {
            toast.error('Lütfen formu eksiksiz doldurunuz');
            return;
        } else {
            try {
                const updateClient = await Repo.ClientProfileRepository.update(clientFormRef.current);
                if (updateClient && updateClient.data) {
                    const newClient = await Repo.ClientProfileRepository.getClientProfiles();
                    dispatch(setClientProfiles(newClient as unknown as ClientProfile[]));
                    dispatch(resetClientForm());
                    toast.success('Firma güncellendi');
                    router.replace('/dashboard/clients');
                }
            } catch (error) {
                console.log('Error', error);
            }
        }
    }


    return (
        <div>
            <title>Firma Güncelle - BRH Takip</title>

            <div className='h-full'>
                <div className='h-full col-span-2'>
                    <div className='flex items-center justify-between'>
                        <Button
                            variant="text"
                            startIcon={<ArrowBackIosIcon />}
                            onClick={() => router.push('/dashboard/clients')}
                        >
                            Firmalara Geri Dön
                        </Button>

                        <Button
                            variant="contained"
                            startIcon={<SaveIcon />}
                            onClick={handleUpdateClient}
                        >
                            Kaydı Et
                        </Button>
                    </div>
                </div>
            </div>

            <div className='space-y-3'>
                <CreateOrUpdateForm
                    isCreate={false}
                    clientProfile={clientProfileForm as unknown as ClientProfile}
                />
            </div>
        </div>
    )
}

export default UpdateClientPage