'use client'
import React, { useEffect } from 'react';
import { useDataModal } from '@/contexts/DataModalContext';
import { Button } from '@aws-amplify/ui-react';
import { usePathname, useRouter } from 'next/navigation';
import * as Repo from '@/repository/index';
import MaterialsDataTable from './materialsDataTable';

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
                    onClick={handleCreate}
                    className='rounded-none bg-amber-500 text-zinc-800 font-bold px-6'
                >
                    <span className='flex items-center space-x-2'>
                        <span>ONAYLA</span>
                    </span>
                </Button>
            </div>
        </div>
    )
}

const MaterialView: React.FC = () => {

    return (
        <div>
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
                                // onClick={handleCreateForm}
                                className='rounded-none bg-amber-500 text-gray-800 px-6'
                            >
                                <span>Marka Ekle</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-8'>
                <MaterialsDataTable
                // dataPayload={brands}
                // getClientName={getClientName}
                // onDeleteBrand={onDelete}
                // handleEdit={setBrandUpdateData}
                />
            </div>
        </div>
    )
}

export default MaterialView