'use client'
import React, { useRef } from 'react';
import * as Repo from '@/repository/index';
import { useRouter } from "next-nprogress-bar";
import { usePathname } from 'next/navigation'
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { setRequests, setIsFetching, setSelectedRequests, resetFormValues } from '@/reduxStore/features/requestSlice';
import { statusMap, requestStatusOptions, requestActionOptions } from '@/config';
import { findKeyByValue } from '@/utils/helpers';
import { Button, TextField, MenuItem } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { RiShareForwardFill } from "react-icons/ri";
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';
import RequestsDataTable from './tableView/requestsDataTable';
import { toast } from 'sonner';
import * as styles from '@/components/styles';

import type { Request, RequestStatus } from '@/API';
import { SelectField } from '@aws-amplify/ui-react'

const getCurrentRequestStatus = (pathname: string, isBRHAdmin: boolean = true): string => {
    const status: string = statusMap[pathname.split('/').pop() as string];
    return status ? status : 'PENDING_APPROVAL';
}


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
    
    const [selectedStatus, setSelectedStatus] = React.useState(getCurrentRequestStatus(pathname, userProfile.clientprofileID === 'BRH_ADMIN'));
    const statusOptions: { value: string; label: string }[] = React.useMemo(() => {
        return Object.keys(requestStatusOptions).map((key: string) => {
            return { value: key, label: requestStatusOptions[key as keyof typeof requestStatusOptions] }
        }).filter((option) => {
            return userProfile.clientprofileID === 'BRH_ADMIN' ?  
                option.value !== 'PENDING_CLIENT_APPROVAL' 
                :  option
        })
    }, [])

    const statusActionOptions: { value: string; label: string }[] = React.useMemo(() => { 
        return Object.keys(requestActionOptions).map((key: string) => {
            return { value: key, label: requestActionOptions[key as keyof typeof requestActionOptions] }
        }).filter((option) => {
            switch (selectedStatus) {
                case 'PENDING_CLIENT_APPROVAL':
                    if (userProfile.clientprofileID === 'BRH_ADMIN')  return false
                    option.label = 'Onay ve BRH Takip Ekibine Aktar'
                    return option.value !== 'IN_DESIGN'
                        && option.value !== 'IN_PRESS'
                        && option.value !== 'IN_APPLICATION' 
                        && option.value !== 'COMPLETED'
                        && option.value !== 'CANCELLED'
                        && option.value !== 'PENDING_CLIENT_APPROVAL'
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

    const [selectedAction, setSelectedAction] = React.useState(statusActionOptions[0]?.value as RequestStatus)

    const handleStatusChange = () => {
        dispatch(setIsFetching(true))
        const baseUrl = '/dashboard/requests'; 
        const slug = findKeyByValue(statusMap, selectedStatus)
        console.log('Slug', slug)
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
                    <div className='px-4 py-4 bg-white shadow'>
                        <div className='flex items-center justify-between'>
                            <div className='flex flex-col items-start'>
                                <h1 className='text-lg font-semibold'>{currentPageTitle} </h1>
                                
                            </div>

                            <div className="flex items-center space-x-3">
                                <Button
                                    variant="contained"
                                    size='small'
                                    startIcon={<AddIcon />}
                                    onClick={() => router.push('/dashboard/requests/create')}
                                    sx={{
                                        ...styles.buttonComponentStyles,
                                        fontWeight: 500,
                                    }}
                                >
                                    Talep Ekle
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className='bg-white shadow'>
                        <div className='px-4 py-4 bg-zinc-50 border-b border-zinc-200 flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:items-center lg:justify-between'>
                            <div className='flex items-center space-x-3'>
                                <div className='input-group w-[217px] bg-white'>
                                    <TextField
                                        select
                                        id="request_status"
                                        defaultValue={selectedStatus}
                                        value={statusOptions.find(option => option.value === selectedStatus)?.value as string}
                                        onChange={(e) => setSelectedStatus(e.target.value as RequestStatus)}
                                        sx={styles.selectComponentStyles}
                                        size='small'
                                    >
                                        {statusOptions.map((option) => (
                                            <MenuItem 
                                                key={option.value} 
                                                value={option.value} 
                                                dense 
                                            >
                                                <span>{option.label}</span>
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </div>

                                <Button 
                                    variant="contained"
                                    size='small' 
                                    endIcon={<FlipCameraAndroidIcon />} 
                                    onClick={handleStatusChange}
                                    disabled={selectedStatus === getCurrentRequestStatus(pathname)}
                                    sx={{
                                        ...styles.buttonComponentStyles,
                                        width: '90px',
                                    }}
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
                                            sx={styles.selectComponentStyles}
                                            size='small'
                                            disabled={!selectedRequests.length}
                                        >
                                            {statusActionOptions.map((option) => (
                                                <MenuItem key={option.value} value={option.value} dense>
                                                    <span>{option.label}</span>
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </div>

                                    <Button
                                        variant="contained"
                                        size='small' 
                                        endIcon={<RiShareForwardFill />}
                                        onClick={handleStatusActionRequest}
                                        sx={{
                                            ...styles.buttonComponentStyles,
                                            width: '90px',
                                        }}
                                        disabled={!selectedRequests.length}
                                    >
                                        Aktar
                                    </Button>
                                </div>
                            {/* {(selectedStatus !== 'PENDING_CLIENT_APPROVAL' && userProfile.role === 'CLIENT_ADMIN') && (
                                <div></div>
                            )} */}
                        </div>
                        <div className='max-w-[calc(100vw-48px)] sm:max-w-full bg-white'>
                            <RequestsDataTable
                                dataPayload={requests}
                                handleEdit={(row) => handleOnEdit(row)}
                                handleDelete={handleDelete}
                                handleSelect={(data) => dispatch(setSelectedRequests(data))}
                                isLoading={isFetchingRef.current}
                                styles={styles.dataTableStyles}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default RequestsView;