'use client'
import React, { useEffect } from "react";
import { Button } from '@aws-amplify/ui-react';
import { useDataModal } from '@/contexts/DataModalContext';
import type { City } from '@/API';
import * as Repo from '@/repository/index';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { AppDispatch, RootState } from '@/lib/store';
import { setCities, resetFormValues } from '@/lib/features/citySlice';
import CitiesDataTable from "./citiesDataTable";
import CreateOrUpdateForm from "./createOrUpdateForm";

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

const CityView: React.FC = () => {
    const { showDataModal, hideDataModal } = useDataModal();
    const dispatch = useAppDispatch<AppDispatch>();
    const cities = useAppSelector((state: RootState) => state.city.cities);
    const cityForm = useAppSelector((state: RootState) => state.city.cityForm);

    const handleCancelForm = () => {
        dispatch(resetFormValues());
        hideDataModal();
    };

    const handleCreateForm = () => {
        showDataModal(
            <div><span className='text-base font-bold'>Yeni Malzeme Ekle</span></div>,
            <CreateOrUpdateForm isCreate={true} />,
            <ModalCustomFooter
                type='create'
                handleCancel={handleCancelForm}
                handleCreate={handleCreateCity}
            />
        );
    };

    const handleCreateCity = async () => {
        console.log('handle Create City')
    };


    return (
        <div>
            <div className='mt-1.5 shadow bg-zinc-50'>
                <div className='px-6 py-6 mb-3 flex items-center justify-between'>
                    <h2 className='text-2xl font-medium'>Şehirler</h2>
                    <Button
                        variation="primary"
                        colorTheme="success"
                        size="small"
                        loadingText=""
                        onClick={handleCreateForm}
                        className='rounded-none bg-amber-500 text-gray-800 px-6'
                    >
                        <span>Şehir Ekle</span>
                    </Button>
                </div>
            </div>
            <div className='mt-8'>
                <CitiesDataTable
                    dataPayload={cities}
                // handleDelete={}
                // handleEdit={}
                />
            </div>
        </div>
    )

}

export default CityView