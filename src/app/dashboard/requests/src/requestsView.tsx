'use client'
import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/stores/useStore';
import { useDataModal } from '@/contexts/DataModalContext';
import RequestsDataTable from './requestsDataTable';
import CreateOrUpdateForm from './createOrUpdateForm';
import { SearchField, Button } from '@aws-amplify/ui-react'
import Icon from '@/components/core/icon';

const RequestsView: React.FC = observer((props) => {
    const { requestStore } = useStore();
    const { showDataModal } = useDataModal();

    const [requests, setRequests] = useState<any>([]);

    useEffect(() => {
        setRequests([...requestStore.getAllRequests || []]);
    }, []);

    const handleRefresh = () => {
        console.log('Refresh')
        // refresh data
        setRequests([...requestStore.getAllRequests || []])
        console.log('Refreshed', requests)
    }

    const handleCreate = () => {
        console.log('Create')
        showDataModal(
            'Talep Oluştur',
            <CreateOrUpdateForm
                isCreate={true}

            />,
            <Button onClick={() => alert('Action!')}>Action</Button>
        )
    }

    const handleEdit = (data: any) => {
        console.log('Edit', data)
        showDataModal(
            `Talep Güncelleme`,
            <CreateOrUpdateForm
                request={data.originalData}  
            />,
            <Button onClick={() => alert('Action!')}>Action</Button>
        )
    }

    const handleDelete = (data: any) => {
        console.log('Delete', data)
    }
    
    return (
        <div className='mt-1.5 shadow bg-zinc-50'>
            <div className='px-6 py-6 mb-3 flex items-center justify-between'>
                <div>
                    <div className=''>
                        <h2 className='text-2xl font-medium'>Talepler</h2>
                    </div>
                </div>

                <div className='flex items-center space-x-2'>

                    <div className='flex items-center space-x-2'>
                        <Button
                            variation="primary"
                            colorTheme="success"
                            size="small"
                            loadingText=""
                            onClick={handleRefresh}
                            className='rounded-none h-[35px] bg-white border border-gray-600 text-gray-700'
                        >
                            <span>
                                <Icon iconName='GrRefresh' className='text-lg' />
                            </span>
                        </Button>

                        <Button
                            variation="primary"
                            colorTheme="success"
                            size="small"
                            loadingText=""
                            onClick={handleCreate}
                            className='rounded-none bg-amber-500 text-gray-800 px-6'
                        >
                            <span>Talep Oluştur</span>
                        </Button>
                    </div>
                </div>
            </div>

            <div className='mt-8'>
                <RequestsDataTable
                    dataPayload={requests}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
            </div>
        </div>
    );
});

export default RequestsView;