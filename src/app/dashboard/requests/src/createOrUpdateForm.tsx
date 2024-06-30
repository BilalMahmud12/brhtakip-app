'use client'
import React from 'react'
import * as Repo from '@/repository/index';
import { useRequestService } from '@/hooks/useRequestService';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { handleFormChange, resetFormValues } from '@/reduxStore/features/requestSlice';
import { generateRequestNumber } from '@/utils/helpers';
import AutoComplete from '@/components/core/autoComplete';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import ImagesUpload from './imagesUpload';
import { StorageImage } from '@aws-amplify/ui-react-storage';

import type { Request, RequestItem } from '@/API';

const CreateOrUpdateForm: React.FC<{ isCreate: boolean }> = ({ isCreate }) => {
    const dispatch = useAppDispatch<AppDispatch>();
    const {
        getClientOptions
    } = useRequestService();

    const clientProfiles = useAppSelector((state: RootState) => state.client.clientProfiles);
    const currentUser = useAppSelector((state: RootState) => state.global.currentUserProfile);
    const { clientprofileID } = currentUser

    const requestForm = useAppSelector((state: RootState) => state.request.requestForm);
    const requestFormRef = React.useRef(requestForm);
    requestFormRef.current = requestForm;
    console.log('requestForm', requestFormRef.current);

    React.useEffect(() => {
        if (isCreate) {
            dispatch(resetFormValues());
            dispatch(handleFormChange({ key: 'requestNumber', value: generateRequestNumber() }));
        }
    }, [isCreate]);

    const [brandOptionsList, setBrandOptionsList] = React.useState<{ value: string, label: string }[]>([]);
    
    
    const handleOnClientSelect = (option: { value: string, label: string }, reason: string) => {
        dispatch(handleFormChange({ key: 'clientprofileID', value: reason === 'clear' ? '' : option.value }))
    }


    
    return (
        <React.Fragment>
            <div className='h-full'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                    {/** Talep Ayarları */}
                    <div className='p-6 bg-white shadow col-span-2 sm:col-span-1'>
                        <h2 className='text-base font-semibold mb-6'>Talep Ayarları</h2>

                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8 mb-4'>
                            <div className='input-group w-full col-span-2 lg:col-span-1'>
                                <label htmlFor="requestNumber" className='block text-xs font-medium mb-1.5'>Talep Numarası</label>
                                <TextField
                                    id='requestNumber'
                                    variant="standard"
                                    sx={{ width: '100%' }}
                                    helperText={''}
                                    value={requestFormRef.current.requestNumber}
                                    disabled
                                />
                            </div>

                            <div className='input-group w-full col-span-2 lg:col-span-1'>
                                <label htmlFor="isExtraProductRequest" className='block text-xs font-medium mb-1.5'>EK Ürün Talebi</label>
                                <Stack direction="row" spacing={1}>
                                    <Switch
                                        id="isExtraProductRequest"
                                        checked={requestFormRef.current.isExtraProductRequest || false}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                            dispatch(handleFormChange({
                                                key: 'isExtraProductRequest',
                                                value: event.target.checked ? 'true' : 'false'
                                            }))
                                        }}
                                    />
                                </Stack>
                            </div>
                        </div>
                    </div>

                    {/** Talep Marka ve Ürün */}
                    <div className='p-6 bg-white shadow col-span-2 sm:col-span-1'>
                        <h2 className='text-base font-semibold mb-6'>Marka ve Ürün</h2>

                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8 mb-4'>
                            {clientprofileID === 'BRH_ADMIN' && (
                                <div className='input-group w-full col-span-2'>
                                    <label htmlFor="client_name" className='block text-xs font-medium mb-1.5'>Firma</label>
                                    <AutoComplete
                                        id="client_name"
                                        options={getClientOptions()}
                                        value={
                                            clientProfiles.find(
                                                (client: any) => client.id === requestFormRef.current.clientprofileID
                                            )?.id as string || ''
                                        }
                                        handleOnChange={(option, reason) => handleOnClientSelect(option, reason)}
                                    />
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CreateOrUpdateForm