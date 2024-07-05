'use client'
import React, { useRef } from 'react';
import * as Repo from '@/repository/index';
import { useRouter } from "next-nprogress-bar";
import { usePathname } from 'next/navigation'
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { setRequests, resetFormValues, setIsFetching, setSelectedRequests } from '@/reduxStore/features/requestSlice';
import { statusMap, requestStatusOptions, requestActionOptions } from '@/config';
import { findKeyByValue } from '@/utils/helpers';
import { Button, TextField, MenuItem } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SyncIcon from '@mui/icons-material/Sync';
import SendIcon from '@mui/icons-material/Send';
import RequestsDataTable from './tableView/requestsDataTable';
import { toast } from 'sonner';

import type { Request, RequestStatus } from '@/API';
import { SelectField } from '@aws-amplify/ui-react'

const getCurrentRequestStatus = (pathname: string): string => {
    const status: string = statusMap[pathname.split('/').pop() as string];
    return status !== undefined ? status : 'PENDING_APPROVAL' as RequestStatus;
};

const RequestsView: React.FC = () => {
    const router = useRouter();
    const pathname = usePathname();
    const dispatch = useAppDispatch<AppDispatch>();

    const userProfile = useAppSelector((state: RootState) => state.global.currentUserProfile);
    const currentPageTitle = useAppSelector((state: RootState) => state.global.currentPageTitle);

    const requests = useAppSelector((state: RootState) => state.request.requests);
    const selectedRequests = useAppSelector((state: RootState) => state.request.selectedRequests);

    const isFetching = useAppSelector((state: RootState) => state.request.isFetching);
    const isFetchingRef = useRef(isFetching);
    isFetchingRef.current = isFetching;

    const requestForm = useAppSelector((state: RootState) => state.request.requestForm);
    const requestFormRef = useRef(requestForm);
    requestFormRef.current = requestForm;
    
    const [selectedStatus, setSelectedStatus] = React.useState(getCurrentRequestStatus(pathname) || 'PENDING_APPROVAL');
    const statusOptions: { value: string; label: string }[] = React.useMemo(() => {
        return Object.keys(requestStatusOptions).map((key: string) => {
            return { value: key, label: requestStatusOptions[key as keyof typeof requestStatusOptions] }
        })
    }, [])

    const statusActionOptions: { value: string; label: string }[] = React.useMemo(() => { 
        return Object.keys(requestActionOptions).map((key: string) => {
            return { value: key, label: requestActionOptions[key as keyof typeof requestActionOptions] }
        }).filter((option) => {
            switch (selectedStatus) {
                case 'PENDING_APPROVAL':
                    return option.value !== 'PENDING_APPROVAL'
                        && option.value !== 'IN_PRESS' 
                        && option.value !== 'COMPLETED'
                case 'IN_DESIGN':
                    return option.value !== 'IN_DESIGN'
                        && option.value !== 'COMPLETED'
                        && option.value !== 'CANCELLED'
                case 'IN_PRESS':
                    return option.value !== 'PENDING_APPROVAL'
                        && option.value !== 'IN_DESIGN'
                        && option.value !== 'IN_PRESS' 
                        && option.value !== 'COMPLETED'
                        && option.value !== 'CANCELLED' 
                case 'IN_APPLICATION':
                    return option.value !== 'PENDING_APPROVAL' 
                        && option.value !== 'IN_DESIGN' 
                        && option.value !== 'IN_PRESS' 
                        && option.value !== 'IN_APPLICATION'
                        && option.value !== 'CANCELLED' 
                case 'COMPLETED':
                    return option.value === 'CANCELLED'
                default:
                    return option
            }
        })
    }, [])
    const [selectedAction, setSelectedAction] = React.useState(statusActionOptions[0].value as RequestStatus)

    const handleStatusChange = () => {
        dispatch(setIsFetching(true))
        const baseUrl = '/dashboard/requests'; 
        const slug = findKeyByValue(statusMap, selectedStatus)
        router.push(`${baseUrl}${slug === 'pending-approval' ? '' : `/${slug}`}`)
        dispatch(setRequests([]))
    }

    const handleStatusActionRequest = async () => {
        try {
            const promises = selectedRequests.map(async (request) => {
                const updatedRequest = await Repo.RequestRepository.updateStatus(request, selectedAction);
                return updatedRequest;
            })

            const updateRequests = await Promise.all(promises);

            if (updateRequests) {
                dispatch(setRequests([]))
                toast.success(`Talepler başarıyla güncellendi.`);
                dispatch(setIsFetching(true))

                const newRequests = await Repo.RequestRepository.getRequestsByStatus(`${getCurrentRequestStatus(pathname)}`);

                const sortedRequests = (newRequests as unknown as Request[]).sort((a, b) => {
                    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
                });

                dispatch(setRequests(sortedRequests))
                dispatch(setSelectedRequests([]))
                dispatch(setIsFetching(false))
            }
        } catch (error) {
            toast.error('Talepler güncellenirken bir hata oluştu.')
            console.log('Error')
        }
    }

    const handleOnEdit = (row: any) => {
        console.log('Edit', row)
        router.push(`/dashboard/requests/${row.id}`)
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
                            <p className='font-medium text-sm text-red-600'>
                                {currentPageTitle} 
                            </p>
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

                    <div className='flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:items-center lg:justify-between'>
                        <div className='flex items-center space-x-3'>
                            <div className='input-group w-[217px] bg-white'>
                                <TextField
                                    select
                                    id="request_status"
                                    defaultValue={selectedStatus}
                                    value={statusOptions.find(option => option.value === selectedStatus)?.value as string}
                                    onChange={(e) => setSelectedStatus(e.target.value as RequestStatus)}
                                    sx={{ width: '100%'}}
                                    size='small'
                                >
                                    {statusOptions.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            <span>{option.label}</span>
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </div>

                            <Button 
                                variant="contained" 
                                startIcon={<SyncIcon />} 
                                onClick={handleStatusChange}
                                disabled={selectedStatus === getCurrentRequestStatus(pathname)}
                                sx={{ height: '40px' }}
                            >
                                Yükle
                            </Button>
                        </div>

                        <div className='flex items-center space-x-3'>
                            <div className='input-group w-[217px] lg:w-[300px] bg-white'>
                                <TextField
                                    select
                                    id="request_status"
                                    defaultValue={selectedAction}
                                    value={statusActionOptions.find(option => option.value === selectedAction)?.value as string}
                                    onChange={(e) => setSelectedAction(e.target.value as RequestStatus)}
                                    sx={{ width: '100%' }}
                                    size='small'
                                    disabled={!selectedRequests.length}
                                >
                                    {statusActionOptions.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            <span>{option.label}</span>
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </div>

                            <Button
                                variant="contained"
                                startIcon={<SendIcon />}
                                onClick={handleStatusActionRequest}
                                sx={{ height: '40px' }}
                                disabled={!selectedRequests.length}
                            >
                                Aktar
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
                            handleEdit={(row) => handleOnEdit(row)}
                            handleDelete={handleDelete}
                            handleSelect={(data) => dispatch(setSelectedRequests(data))}
                            isLoading={isFetchingRef.current}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default RequestsView;