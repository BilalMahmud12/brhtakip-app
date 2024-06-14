'use client'
import React from 'react';
import { useDataModal } from '@/contexts/DataModalContext';
import { Button } from '@aws-amplify/ui-react';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { AppDispatch, RootState } from '@/lib/store';
import type { District } from '@/API';
import * as Repo from '@/repository/index';
import DistrictsDataTable from './districtsDataTable';
// import CreateOrUpdateForm from '../src/createOrUpdateForm';
import { setDistricts } from '@/lib/features/districtSlice';

const ModalCustomFooter = (props: {
    type: 'create' | 'update'
    handleCreate?: (data: any) => void;
    handleUpdate?: (data: any) => void;
    handleCancel?: () => void;
}) => {
    const {
        type,
        handleCreate = () => { },
        handleUpdate = () => { },
        handleCancel = () => { }
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
                    className='rounded-none bg-amber-500 text-zinc-800 font-bold px-6'
                >
                    <span className='flex items-center space-x-2'>
                        <span>ONAYLA</span>
                    </span>
                </Button>
            </div>
        </div>
    );
}

const DistrictView: React.FC = () => {
    const dispatch = useAppDispatch<AppDispatch>();
    const districts = useAppSelector((state: RootState) => state.district.districts);
    const districtForm = useAppSelector((state: RootState) => state.district.districtForm);

    return (
        <div>
            <div className='mt-1.5 shadow bg-white py-6'>
                <div className='mt-1.5 shadow bg-zinc-50'>
                    <div className='px-6 py-6 mb-3 flex items-center justify-between'>
                        <h2 className='text-2xl font-medium'>İlçeler</h2>
                        <Button
                            variation="primary"
                            colorTheme="success"
                            size="small"
                            loadingText=""
                            // onClick={handleCreateForm}
                            className='rounded-none bg-amber-500 text-gray-800 px-6'
                        >
                            <span>İlçe Ekle</span>
                        </Button>
                    </div>
                </div>
                <div className='mt-8'>
                    <DistrictsDataTable
                        dataPayload={districts}
                    // handleDelete={ }
                    // handleEdit={ }
                    />
                </div>
            </div>
        </div>
    )
}

export default DistrictView