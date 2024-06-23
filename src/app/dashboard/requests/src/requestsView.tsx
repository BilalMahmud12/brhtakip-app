'use client'
import React, { useEffect, useRef } from 'react';
import * as Repo from '@/repository/index';
import { usePathname } from 'next/navigation'
import { useDataModal } from '@/contexts/DataModalContext';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { setRequests, resetFormValues, setIsFetching } from '@/reduxStore/features/requestSlice';
import { SelectField } from '@aws-amplify/ui-react'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';
import RequestsDataTable from './requestsDataTable';
import { statusMap, requestStatusOptions } from '@/config';
import { toast } from 'sonner';
import { useRouter } from "next-nprogress-bar";
import type { Request, RequestStatus } from '@/API';
import AutoComplete from "@/components/core/autoComplete";

const RequestsView: React.FC = () => {
    const router = useRouter();
    const pathname = usePathname();
    const dispatch = useAppDispatch<AppDispatch>();

    const userProfile = useAppSelector((state: RootState) => state.global.currentUserProfile);
    const requests = useAppSelector((state: RootState) => state.request.requests);
    const requestForm = useAppSelector((state: RootState) => state.request.requestForm);
    const selectedRequests = useAppSelector((state: RootState) => state.request.selectedRequests);



    const { showDataModal, hideDataModal } = useDataModal();
    const [selectedStatus, setSelectedStatus] = React.useState('Onay Bekleyen');

    const requestFormRef = useRef(requestForm);

    useEffect(() => {
        requestFormRef.current = requestForm;
    }, [requestForm])

    // Add index signature to requestStatusOptions object
    interface RequestStatusOptions {
        [key: string]: string;
    }

    const requestStatusOptions: RequestStatusOptions = {
        PENDING_APPROVAL: 'Onay Bekleyen',
        IN_DESIGN: 'Tasarımdaki',
        IN_PRESS: 'Baskıda',
        IN_APPLICATION: 'Uygulamada',
        COMPLETED: 'Tamamlanan',
        CANCELLED: 'İptal Edilen',
    };

    const StatusOptions: { value: string; label: string }[] = React.useMemo(() => {
        return Object.keys(requestStatusOptions).map((key: string) => {
            return { value: key, label: requestStatusOptions[key as keyof typeof requestStatusOptions] }
        })
    }, [])
    
    const requestStatus = (): string => {
        const status: string = statusMap[pathname.split('/').pop() as string];
        return status !== undefined ? status : 'PENDING_APPROVAL' as RequestStatus;
    };

    const handleStatusChange = () => {
        console.log('Status Change')
        router.push(`/dashboard/requests/`)
    }

    const handleCreateRequest = async () => {
        console.log('Request Form', requestForm)
        try {
            const createRequest = await Repo.RequestRepository.create(requestFormRef.current)

            if (createRequest && createRequest.data) {
                dispatch(setRequests([]))
                hideDataModal()
                toast.success(`${createRequest.data.createRequest.requestNumber} numaralı talep oluşturuldu.`);
                dispatch(setIsFetching(true))

                const newRequests = await Repo.RequestRepository.getRequestsByStatus(`${requestStatus()}`);

                const sortedRequests = (newRequests as unknown as Request[]).sort((a, b) => {
                    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
                });

                dispatch(setRequests(sortedRequests))
                dispatch(resetFormValues())
                dispatch(setIsFetching(false))
            }
        } catch (error) {
            console.log('Error')
        }
    }

    const handleUpdateRequest = (data: any) => {
        console.log('Update Request', data)
    }

    const handleDelete = (data: any) => {
        console.log('Delete', data)
    }
    
    return (
        <>   
            <div className='mb-8'>
                <div className="mb-4 space-y-5">
                    <div className='flex items-center justify-between'>
                        <div className='flex flex-col items-start'>
                            <h1 className='text-2xl font-semibold'>Talepler</h1>
                            <p className='font-medium text-sm text-red-600'>Onayı Bekleyen Talepler</p>
                        </div>

                        <div className="flex items-center space-x-3">
                            <Button
                                variant="contained"
                                startIcon={<AddIcon />}
                                onClick={() => router.push('/dashboard/requests/create')}
                                disableElevation
                            >
                                Talep Ekle
                            </Button>
                        </div>
                    </div>

                    <div className='flex items-center justify-between'>
                        <div className='flex items-center space-x-3'>
                            <div className='input-group w-[240px] bg-white'>
                                <AutoComplete
                                    id="request_status"
                                    options={StatusOptions}
                                    value={selectedStatus} 
                                    handleOnChange={(option) => {
                                        if (option && typeof option !== 'string') {
                                            setSelectedStatus(option.label as RequestStatus)
                                        }
                                    }}
                                    variant='outlined'
                                />
                            </div>

                            <Button variant="contained" endIcon={<SendIcon />} onClick={handleStatusChange}>
                                Git
                            </Button>
                        </div>
                    </div>

                    <div className='hidden px-6 py-3 bg-white shadow'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center space-x-3'>
                                <SelectField
                                    label="Seçilen Talepler Eylemleri"
                                    size="small"
                                    placeholder="Eylem Seçiniz ..."
                                    labelHidden={true}
                                    isDisabled={!selectedRequests.length}
                                >
                                    <option value="IN_DESIGN">Tasarıma Aktar</option>
                                    <option value="IN_PRESS">Baskıya Aktar</option>
                                    <option value="IN_APPLICATION">Uygulamaya Aktar</option>
                                    <option value="COMPLETED">Tamamla</option>
                                    <option value="CANCELLED" disabled>İpat Et</option>
                                </SelectField>
                            </div>
                        </div>
                    </div>

                    <div className='max-w-[calc(100vw-48px)] sm:max-w-full'>
                        <RequestsDataTable
                            dataPayload={requests}
                            handleEdit={(row) => { console.log('Edit', row) }}
                            handleDelete={handleDelete}
                            handleSelect={handleDelete}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default RequestsView;