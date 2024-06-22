'use client'
import React from 'react'
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from "next-nprogress-bar";
import ClientsDataTable from "./clientsDataTable";

const ClientsView = () => {
    const router = useRouter()
    const dispatch = useAppDispatch<AppDispatch>();
    const clients = useAppSelector((state: RootState) => state.client.clientProfiles);
    

    const [selectedClients, setSelectedClients] = React.useState<string[]>([]);

    return (
        <React.Fragment>
            <div className="mb-8">
                <div className="mb-4 space-y-5">
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center space-x-3'>
                            <h1 className='text-2xl font-semibold'>Firmalar</h1>
                        </div>

                        <div className="flex items-center space-x-3">
                            
                            {selectedClients.length > 0 && (
                                <Button
                                    variant="contained"
                                    color="error"
                                    startIcon={<DeleteIcon />}
                                    onClick={() => console.log('delete', selectedClients)}
                                >
                                    Seçildikleri Sil
                                </Button>
                            )}

                            <Button
                                variant="contained"
                                startIcon={<AddIcon />}
                                onClick={() => router.push('/dashboard/clients/create')}
                            >
                                Firma Ekle
                            </Button>
                        </div>
                    </div>
                </div>

                <ClientsDataTable
                    dataPayload={clients}
                    handleEdit={(data) => { router.push(`/dashboard/clients/${data.id}`) }}
                    handleDelete={(data) => { console.log('delete', data) }}
                    handleSelect={(data) => { setSelectedClients(data) }}
                 />
            </div>
        </React.Fragment>
    )
}

export default ClientsView