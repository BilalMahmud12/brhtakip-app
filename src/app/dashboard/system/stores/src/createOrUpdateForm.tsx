'use client'
import React, { useEffect, useState } from 'react';
import type { Store } from '@/API';
import { Input, Label, Autocomplete, TextAreaField } from '@aws-amplify/ui-react';
import { useDispatch } from 'react-redux';
import { handleFormChange } from '@/reduxStore/features/storeSlice';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { RootState, AppDispatch } from '@/reduxStore/store';
import { client } from '@/repository';
import { listCities, listDistricts, listAreas } from '@/graphql/queries';

import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AutoComplete from '@/components/core/autoComplete';
import TextField from '@mui/material/TextField';
import { FormControlLabel } from '@mui/material';
import Switch from '@mui/material/Switch';

interface CreateOrUpdateFormProps {
    isCreate?: boolean;
    brand?: Store;
}

const CreateOrUpdateForm: React.FC<CreateOrUpdateFormProps> = (props) => {
    const {
        isCreate = true,
        brand = {} as Store
    } = props;

    const dispatch = useAppDispatch<AppDispatch>();
    const stores = useAppSelector((state: RootState) => state.store.stores);
    const storeForm = useAppSelector((state: RootState) => state.store.storeForm);

    const [citiesList, setCitiesList] = useState<{ id: string, label: string }[]>([]);
    const [districtsList, setDistrictsList] = useState<{ id: string, label: string, cityID: string }[]>([]);
    const [areasList, setAreasList] = useState<{ id: string, label: string, districtID: string }[]>([]);
    const [selectedCity, setSelectedCity] = useState<string>('');
    const [selectedDistrict, setSelectedDistrict] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            const [
                citiesData,
                districtsData,
                areasData,
            ] = await Promise.all([
                client.graphql({ query: listCities }),
                client.graphql({ query: listDistricts }),
                client.graphql({ query: listAreas }),
            ]);
            const fetchedCities = citiesData.data.listCities.items.map((item: any) => ({ id: item.id, label: item.name }));
            const fetchedDistricts = districtsData.data.listDistricts.items.map((item: any) => ({ id: item.id, label: item.name, cityID: item.cityID }));
            const fetchedAreas = areasData.data.listAreas.items.map((item: any) => ({ id: item.id, label: item.name, districtID: item.districtID }));

            setCitiesList(fetchedCities);
            setDistrictsList(fetchedDistricts);
            setAreasList(fetchedAreas);
        };

        fetchData();
    }, []);

    const handleCitySelection = (selected: { id: string, label: string }) => {
        setSelectedCity(selected.id);
        setSelectedDistrict('');
        dispatch(handleFormChange({ key: 'cityID', value: selected.id }));
        dispatch(handleFormChange({ key: 'districtID', value: '' }));
        dispatch(handleFormChange({ key: 'areaID', value: '' }));
    };

    const handleDistrictSelection = (selected: { id: string, label: string }) => {
        setSelectedDistrict(selected.id);
        dispatch(handleFormChange({ key: 'districtID', value: selected.id }));
        dispatch(handleFormChange({ key: 'areaID', value: '' }));
    };

    const handleAreaSelection = (selected: { id: string, label: string }) => {
        dispatch(handleFormChange({ key: 'areaID', value: selected.id }));
    };

    const handleClearCity = () => {
        setSelectedCity('');
        setSelectedDistrict('');
        dispatch(handleFormChange({ key: 'cityID', value: '' }));
        dispatch(handleFormChange({ key: 'districtID', value: '' }));
        dispatch(handleFormChange({ key: 'areaID', value: '' }));
    };

    const handleClearDistrict = () => {
        setSelectedDistrict('');
        dispatch(handleFormChange({ key: 'districtID', value: '' }));
        dispatch(handleFormChange({ key: 'areaID', value: '' }));
    };

    const handleClearArea = () => {
        dispatch(handleFormChange({ key: 'areaID', value: '' }));
    };

    const getFilteredDistricts = (cityID: string) => {
        return districtsList.filter(district => district.cityID === cityID);
    };

    const getFilteredAreas = (districtID: string) => {
        return areasList.filter(area => area.districtID === districtID);
    };

    return (
        <div className='h-full'>
            <div className='my-2 pt-5' />
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6'>
                <div className='p-6 bg-white shadow col-span-3'>
                    <div className='input-group w-full col-span-1 lg:col-span-1'>
                        <label htmlFor="_name" className='block text-xs font-medium mb-1.5'>Mağaza Adı *</label>
                        <TextField
                            id='material_name'
                            variant="standard"
                            sx={{ width: '100%' }}
                            helperText={''}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                dispatch(handleFormChange({ key: 'name', value: event.target.value }))
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className='my-2 pt-5' />

            <div className='p-6 bg-white shadow'>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6'>
                    <div className='input-group w-full col-span-1 lg:col-span-1'>
                        <label htmlFor="city" className='block text-xs font-medium mb-1.5'>Sehir *</label>
                        {/* <AutoComplete
                            id=""
                            options={citiesList}
                            value={ }
                            handleOnChange={ }
                        /> */}
                    </div>
                    <div className='input-group w-full col-span-1 lg:col-span-1'>
                        <label htmlFor="material_name" className='block text-xs font-medium mb-1.5'>İlçe *</label>
                        <TextField
                            id='material_name'
                            variant="standard"
                            sx={{ width: '100%' }}
                            helperText={''}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                dispatch(handleFormChange({ key: 'name', value: event.target.value }))
                            }}
                        />
                    </div>
                    <div className='input-group w-full col-span-1 lg:col-span-1'>
                        <label htmlFor="material_name" className='block text-xs font-medium mb-1.5'>Mahalle *</label>
                        <TextField
                            id='material_name'
                            variant="standard"
                            sx={{ width: '100%' }}
                            helperText={''}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                dispatch(handleFormChange({ key: 'name', value: event.target.value }))
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className='my-2 pt-5' />

            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6'>
                <div className='p-6 bg-white shadow col-span-3'>
                    <div className='input-group w-full col-span-1 lg:col-span-1'>
                        <label htmlFor="_name" className='block text-xs font-medium mb-1.5'>Adres *</label>
                        <TextField
                            id='material_name'
                            variant="standard"
                            sx={{ width: '100%' }}
                            helperText={''}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                dispatch(handleFormChange({ key: 'address', value: event.target.value }))
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateOrUpdateForm;

/*
<form>
                <div className=''>
                    <div className='grid grid-cols-2 gap-8'>
                        <div className='input-group col-span-3'>
                            <Label htmlFor="name" className='block text-xs font-medium mb-1.5'>Mağaza</Label>
                            <Input
                                id="name"
                                name="name"
                                placeholder='Mağaza Adı'
                                variation="quiet"
                                onChange={(e) => dispatch(handleFormChange({ key: 'name', value: e.target.value }))}
                                className='custom-input'
                            />
                        </div>
                    </div>

                    <div className='my-2 pt-5' />

                    <div>
                        <span className='block mb-3 text-xs font-medium'>Adres Bilgileri</span>

                        <div className='bg-gray-100 px-6 py-8 rounded-md shadow'>
                            <div className='grid grid-cols-3 gap-8'>
                                <div className='input-group col-span-1'>
                                    <Label htmlFor="city_name" className='block text-xs font-medium mb-1.5'></Label>
                                    <Autocomplete
                                        id="city_name"
                                        label="Sehir"
                                        placeholder='Sehir Seç'
                                        variation="quiet"
                                        options={citiesList}
                                        value={citiesList.find(city => city.id === storeForm.cityID)?.label}
                                        onSelect={handleCitySelection}
                                        onClear={handleClearCity}
                                        className='custom-input'
                                    />
                                </div>
                                <div className='input-group col-span-1'>
                                    <Label htmlFor="district_name" className='block text-xs font-medium mb-1.5'>İlçe</Label>
                                    <Autocomplete
                                        id="district_name"
                                        label="İlçe"
                                        placeholder='İlçe Seç'
                                        variation="quiet"
                                        options={getFilteredDistricts(storeForm.cityID)}
                                        value={getFilteredDistricts(storeForm.cityID).find(district => district.id === storeForm.districtID)?.label}
                                        onSelect={handleDistrictSelection}
                                        onClear={handleClearDistrict}
                                        className='custom-input'
                                    />
                                </div>
                                <div className='input-group col-span-1'>
                                    <Label htmlFor="area_name" className='block text-xs font-medium mb-1.5'>Mahalle</Label>
                                    <Autocomplete
                                        id="area_name"
                                        label="Mahalle"
                                        placeholder='Mahalle Seç'
                                        variation="quiet"
                                        options={getFilteredAreas(storeForm.districtID)}
                                        value={getFilteredAreas(storeForm.districtID).find(area => area.id === storeForm.areaID)?.label}
                                        onSelect={(selected) => { dispatch(handleFormChange({ key: 'areaID', value: selected.id })) }}
                                        onClear={handleClearArea}
                                        className='custom-input'
                                    />
                                </div>
                                <div className='input-group col-span-3'>
                                    <Label htmlFor="store_adres" className='block text-xs font-medium mb-1.5'>Adres Detayları</Label>
                                    <Input
                                        id="store_adres"
                                        name="adres"
                                        placeholder='Mağaza Adres Detayları'
                                        variation="quiet"
                                        onChange={(e) => dispatch(handleFormChange({ key: 'address', value: e.target.value }))}
                                        className='custom-input'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='my-2 pt-5' />

                    <div className='grid grid-cols-2 gap-8'>
                        <div className='input-group col-span-1'>
                            <Label htmlFor="store_phones" className='block text-xs font-medium mb-1.5'>Telefon Numarası</Label>
                            <Input
                                id="store_phones"
                                name="store_phones"
                                placeholder='Telefon Numarası'
                                variation="quiet"
                                onChange={(e) => dispatch(handleFormChange({ key: 'phones', value: e.target.value }))}
                                className='custom-input'
                            />
                        </div>

                        <div className='input-group col-span-1'>
                            <Label htmlFor="store_email" className='block text-xs font-medium mb-1.5'>Mağaza Email Adresi</Label>
                            <Input
                                id="store_email"
                                name="store_email"
                                placeholder='Email Adresi'
                                variation="quiet"
                                onChange={(e) => dispatch(handleFormChange({ key: 'email', value: e.target.value }))}
                                className='custom-input'
                            />
                        </div>

                        <div className='input-group col-span-2'>
                            <Label htmlFor="store_notes" className='block text-xs font-medium mb-1.5'>Mağaza Notları</Label>
                            <TextAreaField
                                id="designNote"
                                name="designNote"
                                variation="quiet"
                                label=""
                                placeholder=""
                                size='small'
                                rows={3}
                                labelHidden={true}
                                onChange={(e) => dispatch(handleFormChange({ key: 'notes', value: e.target.value }))}
                                value={storeForm.notes}
                                className='custom-input'
                            />
                        </div>
                    </div>

                    <div className='my-2 pt-5' />
                </div>
            </form>
*/