'use client'
import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/stores/utils/useStore';
import { useDataModal } from '@/contexts/DataModalContext';
import RequestsDataTable from './requestsDataTable';
import CreateOrUpdateForm from './createOrUpdateForm';
import { SearchField, Button } from '@aws-amplify/ui-react'
import Icon from '@/components/core/icon';


const ModalCustomFooter = (
    props: {
        type: 'create' | 'update'
        handleCreate?: (data: any) => void;
        handleUpdate?: (data: any) => void;
        handleCancel?: () => void;
    }
) => {
    const {
        type,
        handleCreate = () => { },
        handleUpdate = () => { },
        handleCancel = () => { },
    } = props;

    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-3'>
                <Button
                    variation="primary"
                    colorTheme="success"
                    size="small"
                    loadingText=""
                    onClick={handleCancel}
                    className='rounded-none bg-transparent text-gray-800 px-6 font-bold'
                >
                    <span>İPTAL ET</span>
                </Button>

                <Button
                    variation="primary"
                    colorTheme="success"
                    size="small"
                    loadingText=""
                    onClick={type === 'create' ? handleCreate : handleUpdate}
                    className='rounded-none bg-amber-500 text-blue-900 font-bold px-6'
                >
                    <span className='flex items-center space-x-2'>
                        <span>ONAYLA</span>
                    </span>
                </Button>
            </div>
        </div>
    )
}


const RequestsView: React.FC = observer((props) => {
    const { requestStore } = useStore();
    const { showDataModal, hideDataModal } = useDataModal();

    const handleRefresh = () => {
        console.log('Refresh')
    }

    const handleCancelForm = () => {
        console.log('Cancel')
        hideDataModal()
    }

    const handleCreateForm = () => {
        showDataModal(
            <div><span className='text-base font-bold'>Talep Oluştur</span></div>,
            <CreateOrUpdateForm
                isCreate={true}
            />,
            <ModalCustomFooter
                type='create'
                handleCreate={handleCreateRequest}
                handleCancel={handleCancelForm} 
            />
        )
    }

    const handleUpdateForm = (data: any) => {
        console.log('Edit', data)
        showDataModal(
            <div><span className='text-sm font-bold'>Talep Güncelle</span></div>,
            <CreateOrUpdateForm
                isCreate={false}
                request={data.originalData}  
            />,
            <ModalCustomFooter
                type='update'
                handleUpdate={handleUpdateRequest} 
                handleCancel={handleCancelForm} 
            />
        )
    }

    const handleCreateRequest = (data: any) => {
        showDataModal(
            <div><span className='text-sm font-bold'>Talep Güncelle</span></div>,
            <div></div>,
            <ModalCustomFooter
                type='update'
                handleUpdate={handleUpdateRequest}
                handleCancel={handleCancelForm}
            />
        )
    }

    const handleUpdateRequest = (data: any) => {
        console.log('Update Request', data)
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
                        {/** 
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
                        */}

                        <Button
                            variation="primary"
                            colorTheme="success"
                            size="small"
                            loadingText=""
                            onClick={handleCreateForm}
                            className='rounded-none bg-amber-500 text-gray-800 px-6'
                        >
                            <span>Talep Oluştur</span>
                        </Button>
                    </div>
                </div>
            </div>

            <div className='mt-8'>
                <RequestsDataTable
                    dataPayload={requestStore.getAllRequests}
                    handleEdit={handleUpdateForm}
                    handleDelete={handleDelete}
                />
            </div>
        </div>
    );
});

export default RequestsView;