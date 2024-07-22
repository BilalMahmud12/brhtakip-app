'use client'
import React from "react";
import * as Repo from '@/repository'
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { resetUserForm, setIsFetching, setUsers } from '@/reduxStore/features/userSlice';
import UsersDataTable from "./usersDataTable";
import { Button, TextField, MenuItem, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import SyncIcon from '@mui/icons-material/Sync';
import { useRouter } from "next-nprogress-bar";
import Alert from '@mui/material/Alert';

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
    const dispatch = useAppDispatch<AppDispatch>();
    const users = useAppSelector((state: RootState) => state.user.users);
    const isFetching = useAppSelector((state: RootState) => state.user.isFetching);
    const clientProfiles = useAppSelector((state: RootState) => state.client.clientProfiles)
    const [selectedUsers, setSelectedUsers] = React.useState<string[]>([]);
    const [selectedClient, setSelectedClient] = React.useState<string>('BRH_ADMIN')
    const [showTip, setShowTip] = React.useState<boolean>(false);

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
                    <div className=''>
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
                        <div>
                            <div className="shadow relative" >
                                <div className="absolute z-20 top-2 right-2">
                                    <IconButton aria-label="close" onClick={() => setShowTip(false)}>
                                        <CloseIcon />
                                    </IconButton>
                                </div>
                                <Alert severity="warning" icon={<LightbulbIcon  />}>
                                    <div className="relative w-full">
                                        <div className="font-medium mb-2 mt-0.5">
                                            Bu özellik, BRH Takip sistemine yeni kullanıcılar eklemenizi ve mevcut kullanıcıların yetkilerini yönetmenizi sağlar. Kullanıcıları oluştururken veya düzenlerken dikkat edilmesi gerekenler:
                                        </div>
                                        <ol className="space-y-1">
                                            <li>- Kullanıcılara belirli yetkiler tanımlayarak sistemdeki erişim ve işlem yapma haklarını belirleyebilirsiniz. Her kullanıcı rolüne göre farklı yetkiler atanabilir.</li>
                                            <li>- Kullanıcıların aktif veya pasif olduğunu belirleyebilirsiniz. Aktif olmayan kullanıcılar sisteme erişemez.</li>
                                            <li>- Mevcut kullanıcıların bilgilerini düzenleyebilir veya gerekirse silebilirsiniz. Düzenlemek veya silmek için ilgili kullanıcı satırındaki kalem (düzenle) veya çöp kutusu (sil) ikonuna tıklayabilirsiniz.</li>
                                        </ol>
                                    </div>
                                </Alert>
                            </div>
                        </div>
                    )}

                    <div>
                        <div className='flex items-center space-x-3'>
                            <div className='input-group w-[317px] bg-white'>
                                <TextField
                                    select
                                    id="request_status"
                                    defaultValue={selectedClient}
                                    value={getClientOptions(clientProfiles).find(option => option.value === selectedClient)?.value as string}
                                    onChange={(e) => setSelectedClient(e.target.value as string)}
                                    sx={{ 
                                        width: '100%',
                                        '& .MuiSelect-select': {
                                            padding: '3px 14px',
                                            fontSize: '14px',
                                            fontWeight: 500,
                                            color: 'black',
                                            backgroundColor: 'white',
                                            border: '1px solid #ccc',
                                            borderRadius: '4px',
                                        },
                                    }}
                                    size='small'
                                >
                                    {getClientOptions(clientProfiles).map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            <span>{option.label}</span>
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </div>

                            <Button
                                variant="contained"
                                size='small'
                                endIcon={<SyncIcon />}
                                onClick={() => handleLoadUsers(selectedClient)}
                                sx={{ 
                                    width: '90px',
                                    fontWeight: 400,
                                    textTransform: 'none',
                                    backgroundColor: 'black',
                                    '&:hover': {
                                        backgroundColor: '#333',
                                    } 
                                }}
                            >
                                Yükle
                            </Button>
                        </div>
                    </div>
                </div>

                <UsersDataTable
                    dataPayload={users}
                    handleEdit={(data) => { router.push(`/dashboard/users/${data.id}`) }}
                    handleDelete={(data) => { console.log('delete', data) }}
                    handleSelect={(data) => { setSelectedUsers(data) }}
                    isLoading={isFetching}
                 />
            </div>
        </>
    );
}

export default UsersView;
