'use client'
import React from "react";
import * as Repo from '@/repository'
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { resetUserForm, setIsFetching, setUsers } from '@/reduxStore/features/userSlice';
import UsersDataTable from "./usersDataTable";
import { Button, TextField, MenuItem, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';
import { useRouter } from "next-nprogress-bar";
import Icon from '@/components/core/icon';
import * as styles from '@/components/styles';
import { styled } from '@mui/material/styles';

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    fontSize: '14px !important',
    fontWeight: 400,
    backgroundColor: 'red'
}));

import type { ClientProfile } from '@/API';

const getClientOptions = (clientProfiles: ClientProfile[]) => {
    const options = [{ value: 'BRH_ADMIN', label: 'BRH Takip Ekibi' }]
    const clientOptions =  clientProfiles
            .filter((client) => client.name !== null && client.name !== undefined)
            .map((client) => {
                return { value: client.id, label: client.name }
            }) as { value: string, label: string }[]
    
    return options.concat(clientOptions)
}

const UsersView: React.FC = () => {
    const router = useRouter()
    const dispatch = useAppDispatch<AppDispatch>()
    const currentUserProfile = useAppSelector((state: RootState) => state.global.currentUserProfile)
    const users = useAppSelector((state: RootState) => state.user.users);
    const isFetching = useAppSelector((state: RootState) => state.user.isFetching);
    const clientProfiles = useAppSelector((state: RootState) => state.client.clientProfiles)
    const [selectedUsers, setSelectedUsers] = React.useState<string[]>([]);
    const [selectedClient, setSelectedClient] = React.useState<string>('BRH_ADMIN')
    const [showTip, setShowTip] = React.useState<boolean>(true)

    React.useEffect(() => {
        dispatch(resetUserForm())
    })

    /*
    const handleSelectClient = (client: string) => {
        console.log('selected client', client)
        setSelectedClient(client)
    }*/

    const handleLoadUsers = async (client: string) => {
        try {
            dispatch(setIsFetching(true));
            const users = await Repo.UserRepository.getUsersByClient(client);

            if (users) {
                dispatch(setUsers(users));
            }

            dispatch(setIsFetching(false));
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <div className="mb-8">
                <div className="mb-4 space-y-5">
                    <div className='p-4 bg-white shadow'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center space-x-3'>
                                <h1 className='text-lg font-semibold'>Sistem Kullanıcıları</h1>
                            </div>

                            <div className="flex items-center space-x-3">
                                {selectedUsers.length > 0 && (
                                    <Button
                                        variant="contained"
                                        color="error"
                                        size='small'
                                        startIcon={<DeleteIcon />}
                                        onClick={() => console.log('delete', selectedUsers)}
                                    >
                                        Seçildikleri Sil
                                    </Button>
                                )}

                                <Button
                                    variant="contained"
                                    size='small'
                                    startIcon={<AddIcon />}
                                    onClick={() => router.push('/dashboard/users/create')}
                                    sx={{
                                        fontWeight: 500,
                                        textTransform: 'none',
                                        backgroundColor: 'black',
                                        '&:hover': {
                                            backgroundColor: '#333',
                                        }
                                    }}
                                >
                                    Kullanıcı Ekle
                                </Button>
                            </div>
                        </div>
                    </div>

                    {showTip && (
                        <div className="p-4 bg-white shadow space-y-3">
                            <div>
                                <div className='flex items-center justify-between'>
                                    <div className="flex items-center space-x-3">
                                        <Icon iconName='FcInfo' className='text-3xl' />

                                        <div className="font-medium mb-2 mt-2">
                                            Kullanıcıları oluştururken veya düzenlerken dikkat edilmesi gerekenler:
                                        </div>

                                    </div>
                                    <IconButton aria-label="close" onClick={() => setShowTip(false)}>
                                        <CloseIcon fontSize="small" />
                                    </IconButton>
                                </div>
                            </div>
                            <div>
                                <ol className="space-y-1 text-sm text-zinc-600">
                                    <li>- Kullanıcılara belirli yetkiler tanımlayarak sistemdeki erişim ve işlem yapma haklarını belirleyebilirsiniz. Her kullanıcı rolüne göre farklı yetkiler atanabilir.</li>
                                    <li>- Kullanıcıların aktif veya pasif olduğunu belirleyebilirsiniz. Aktif olmayan kullanıcılar sisteme erişemez.</li>
                                </ol>
                            </div>

                        </div>
                    )}

                </div>

                <div className="bg-white shadow">
                    {currentUserProfile?.clientprofileID === 'BRH_ADMIN' && (
                        <div className="px-4 py-4 bg-zinc-50 border-b border-zinc-200 flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:items-center lg:justify-between">
                            <div className='flex items-center space-x-3'>
                                <div className='input-group w-[317px] bg-white'>
                                    <TextField
                                        select
                                        id="request_status"
                                        defaultValue={selectedClient}
                                        value={getClientOptions(clientProfiles).find(option => option.value === selectedClient)?.value as string}
                                        onChange={(e) => setSelectedClient(e.target.value as string)}
                                        sx={styles.selectComponentStyles}
                                        size='small'
                                    >
                                        {getClientOptions(clientProfiles).map((option) => (
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
                                    onClick={() => handleLoadUsers(selectedClient)}
                                    sx={{ 
                                        ...styles.buttonComponentStyles,
                                        width: '90px',
                                    }}
                                >
                                    Yükle
                                </Button>
                            </div>
                        </div>
                    )}

                    <UsersDataTable
                        dataPayload={users}
                        handleEdit={(data) => { router.push(`/dashboard/users/${data.id}`) }}
                        handleDelete={(data) => { console.log('delete', data) }}
                        handleSelect={(data) => { setSelectedUsers(data) }}
                        isLoading={isFetching}
                    />
                </div>
            </div>
        </>
    );
}

export default UsersView;
