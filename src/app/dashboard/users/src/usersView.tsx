'use client'
import React from "react";
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { resetUserForm } from '@/reduxStore/features/userSlice';
import UsersDataTable from "./usersDataTable";
import { useDataModal } from '@/contexts/DataModalContext';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from "next-nprogress-bar";
import AutoComplete from "@/components/core/autoComplete";

const getClientOptions = (clientProfiles: any[]) => {
    return clientProfiles.map((client) => {
        return { value: client.id, label: client.name }
    })
}



const UsersView: React.FC = () => {
    const router = useRouter()
    const dispatch = useAppDispatch<AppDispatch>();
    const users = useAppSelector((state: RootState) => state.user.users);
    const [selectedUsers, setSelectedUsers] = React.useState<string[]>([]);
    const [showFilter, setShowFilter] = React.useState<boolean>(false)

    const clientProfiles = useAppSelector((state: RootState) => state.client.clientProfiles)

    React.useEffect(() => {
        return () => {
            dispatch(resetUserForm());
        }
    }, [])

    return (
        <>
            <div className="mb-8">
                <div className="mb-4 space-y-5">
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center space-x-3'>
                            <h1 className='text-2xl font-semibold'>Kullanıcılar</h1>
                            
                        </div>

                        <div className="flex items-center space-x-3">
                            <Button
                                variant="contained"
                                color="inherit"
                                startIcon={<FilterAltIcon />}
                                onClick={() => setShowFilter(!showFilter)}
                                sx={{ backgroundColor: '#fff' }}
                            >
                                Filtre
                            </Button>

                            {selectedUsers.length > 0 && (
                                <Button
                                    variant="contained"
                                    color="error"
                                    startIcon={<DeleteIcon />}
                                    onClick={() => console.log('delete', selectedUsers)}
                                >
                                    Seçildikleri Sil
                                </Button>
                            )}

                            <Button
                                variant="contained"
                                startIcon={<AddIcon />}
                                onClick={() => router.push('/dashboard/users/create')}
                            >
                                Kullanıcı Ekle
                            </Button>
                        </div>
                    </div>

                    {showFilter && (
                        <div className="p-6 bg-white shadow">
                            <h2 className='text-base font-semibold mb-6'>Filtreler</h2>

                            <div className='grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-8 mb-4'>
                                <div className='input-group w-full'>
                                    <label htmlFor="client_name" className='block text-xs font-medium mb-1.5'>Firma</label>
                                    <AutoComplete
                                        id="client_name"
                                        options={getClientOptions(clientProfiles)}
                                        value={''}
                                        handleOnChange={(option) => {
                                            console.log('option', option)
                                            if (typeof option !== 'string') {
                                                
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <UsersDataTable
                    dataPayload={users}
                    handleEdit={(data) => { router.push(`/dashboard/users/${data.id}`) }}
                    handleDelete={(data) => { console.log('delete', data) }}
                    handleSelect={(data) => { setSelectedUsers(data) }}
                 />
            </div>
        </>
    );
}

export default UsersView;
