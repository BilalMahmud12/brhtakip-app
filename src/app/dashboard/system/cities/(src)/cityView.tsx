'use client'
import React, { useEffect, useRef } from "react";
import { Button } from '@aws-amplify/ui-react';
import { useDataModal } from '@/contexts/DataModalContext';
import type { City, District } from '@/API';
import * as Repo from '@/repository/index';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { AppDispatch, RootState } from '@/lib/store';
import { setCities, resetFormValues, setCityForm } from '@/lib/features/citySlice';
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

    const cityformRef = useRef(cityForm);

    useEffect(() => {
        cityformRef.current = cityForm;
    }, [cityForm])

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
        try {
            const createCity = await Repo.CityRepository.create(cityformRef.current);
            console.log('created City', createCity)
            if (createCity && createCity.data) {
                const newCity = await Repo.CityRepository.getAllCities();
                dispatch(setCities(newCity as unknown as City[]))
                hideDataModal();
                dispatch(resetFormValues());
            }
        } catch (error) {
            console.log('Failed Create City', error)
        }
    };

    const setCityUpdateData = (data: any) => {
        dispatch(setCityForm({
            id: data.id,
            name: data.name,
            isActive: data.isActive,
        }));
    };

    const handleDeleteCity = async (data: any) => {
        try {
            const deleteCity = await Repo.CityRepository.softDelete(data.originalData.id);
            if (deleteCity && deleteCity.data) {
                const newCity = await Repo.CityRepository.getAllCities();
                dispatch(setCities(newCity as unknown as City[]))
                hideDataModal();
                dispatch(resetFormValues());
            }
        } catch (error) {
            console.log('Failed Delete City', error)
        }
    }


    return (
        <div>
            <div className='px-6 py-3'>
                <div className='mt-1.5 shadow bg-white'>
                    <div className='px-6 py-3 mb-3 flex items-center justify-between'>
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
                <div className='mt-8 bg-white shadow'>
                    <CitiesDataTable
                        dataPayload={cities}
                        handleDelete={handleDeleteCity}
                        handleEdit={setCityUpdateData}
                    />
                </div>
            </div>
        </div>
    )

}

export default CityView