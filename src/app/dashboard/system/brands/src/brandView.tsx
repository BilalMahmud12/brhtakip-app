'use client'
import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/stores/utils/useStore';
import { useDataModal } from '@/contexts/DataModalContext';
import { SearchField, Button } from '@aws-amplify/ui-react'
import Icon from '@/components/core/icon';
import BrandsDataTable from './brandsDataTable';

const BrandsView: React.FC = observer((props) => {
    const { requestStore } = useStore();

    const handleRefresh = () => {
        console.log('Refresh')
    }

    const handleUpdateForm = () => {
        console.log('Update')
    }

    const handleDelete = () => {
        console.log('Delete')
    }

    return (
        <div className='mt-1.5 shadow bg-zinc-50'>
            <div className='px-6 py-6 mb-3 flex items-center justify-between'>
                <div>
                    <div className=''>
                        <h2 className='text-2xl font-medium'>Markalar</h2>
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
                            //onClick={handleCreateForm}
                            className='rounded-none bg-amber-500 text-gray-800 px-6'
                        >
                            <span>Marka Ekle</span>
                        </Button>
                    </div>
                </div>
            </div>

            <div className='mt-8'>
                <BrandsDataTable
                    dataPayload={requestStore.getAllRequests}
                    handleEdit={handleUpdateForm}
                    handleDelete={handleDelete}
                />
            </div>
        </div>
    );
});

export default BrandsView;