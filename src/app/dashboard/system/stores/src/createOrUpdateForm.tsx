import React, { useEffect, useState } from 'react';
import type { Store } from '@/API';
import { useDispatch } from 'react-redux';
import { handleFormChange } from '@/reduxStore/features/storeSlice';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { RootState, AppDispatch } from '@/reduxStore/store';
import { client } from '@/repository';
import { listCities, listDistricts, listAreas } from '@/graphql/queries';

import TextField from '@mui/material/TextField';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';

interface CreateOrUpdateFormProps {
    isCreate?: boolean;
    store?: Store;
}

const CreateOrUpdateForm: React.FC<CreateOrUpdateFormProps> = (props) => {
    const {
        isCreate = true,
        store = {} as Store
    } = props;

    const dispatch = useAppDispatch<AppDispatch>();
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

    const handleCitySelection = (event: SelectChangeEvent<string>) => {
        const selected = event.target.value as string;
        setSelectedCity(selected);
        setSelectedDistrict('');
        dispatch(handleFormChange({ key: 'cityID', value: selected }));
        dispatch(handleFormChange({ key: 'districtID', value: '' }));
        dispatch(handleFormChange({ key: 'areaID', value: '' }));
    };

    const handleDistrictSelection = (event: SelectChangeEvent<string>) => {
        const selected = event.target.value as string;
        setSelectedDistrict(selected);
        dispatch(handleFormChange({ key: 'districtID', value: selected }));
        dispatch(handleFormChange({ key: 'areaID', value: '' }));
    };

    const handleAreaSelection = (event: SelectChangeEvent<string>) => {
        const selected = event.target.value as string;
        dispatch(handleFormChange({ key: 'areaID', value: selected }));
    };

    const getFilteredDistricts = (cityID: string) => {
        return districtsList.filter(district => district.cityID === cityID);
    };

    const getFilteredAreas = (districtID: string) => {
        return areasList.filter(area => area.districtID === districtID);
    };

    useEffect(() => {
        if (!isCreate) {
            loadFormData(store);
            console.log('load store', store);
        }
    }, [store]);

    const loadFormData = async (store: Store) => {
        const {
            name,
            cityID,
            districtID,
            areaID,
            address,
            phones,
            email,
            notes
        } = store;
        dispatch(handleFormChange({ key: 'name', value: name }));
        dispatch(handleFormChange({ key: 'cityID', value: cityID }));
        dispatch(handleFormChange({ key: 'districtID', value: districtID }));
        dispatch(handleFormChange({ key: 'areaID', value: areaID }));
        dispatch(handleFormChange({ key: 'address', value: address as string }));
        dispatch(handleFormChange({ key: 'phones', value: phones as string[] }));
        dispatch(handleFormChange({ key: 'email', value: email as string[] }));
        dispatch(handleFormChange({ key: 'notes', value: notes as string }));
    }

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
                            defaultValue={!isCreate ? store.name : ''}
                        />
                    </div>
                </div>
            </div>

            <div className='my-2 pt-5' />

            <div className='p-6 bg-white shadow'>
                <h2 className='text-base font-semibold mb-6'>Adres Aetayları</h2>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6'>
                    <div className='input-group w-full col-span-1 lg:col-span-1'>
                        <FormControl fullWidth>
                            <InputLabel id="city-select-label">Şehir *</InputLabel>
                            <Select
                                labelId="city-select-label"
                                id="city-select"
                                value={storeForm.cityID}
                                onChange={handleCitySelection}
                                label="Şehir *"
                            >
                                {citiesList.map(city => (
                                    <MenuItem key={city.id} value={city.id}>{city.label}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>

                    <div className='input-group w-full col-span-1 lg:col-span-1'>
                        <FormControl fullWidth>
                            <InputLabel id="district-select-label">İlçe *</InputLabel>
                            <Select
                                labelId="district-select-label"
                                id="district-select"
                                value={selectedDistrict}
                                onChange={handleDistrictSelection}
                                label="İlçe *"
                                disabled={!selectedCity}
                            >
                                {getFilteredDistricts(selectedCity).map(district => (
                                    <MenuItem key={district.id} value={district.id}>{district.label}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>

                    <div className='input-group w-full col-span-1 lg:col-span-1'>
                        <FormControl fullWidth>
                            <InputLabel id="area-select-label">Mahalle *</InputLabel>
                            <Select
                                labelId="area-select-label"
                                id="area-select"
                                value={storeForm.areaID || ''}
                                onChange={handleAreaSelection}
                                label="Mahalle *"
                                disabled={!selectedDistrict}
                            >
                                {getFilteredAreas(selectedDistrict).map(area => (
                                    <MenuItem key={area.id} value={area.id}>{area.label}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6'>
                    <div className=' pt-10  col-span-3'>
                        <div className='input-group w-full col-span-1 lg:col-span-1'>
                            <label htmlFor="_address" className='block text-xs font-medium mb-1.5'>Adres *</label>
                            <TextField
                                id='material_address'
                                variant="standard"
                                sx={{ width: '100%' }}
                                helperText={''}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    dispatch(handleFormChange({ key: 'address', value: event.target.value }))
                                }}
                                defaultValue={!isCreate ? store.address : ''}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='my-2 pt-5' />
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6'>
                <div className='p-6 bg-white shadow col-span-3'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                        <div className='input-group w-full col-span-1 lg:col-span-1'>
                            <label htmlFor="email" className='block text-xs font-medium mb-1.5'>Email *</label>
                            <TextField
                                id='email'
                                variant="standard"
                                sx={{ width: '100%' }}
                                helperText={''}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    dispatch(handleFormChange({ key: 'email', value: event.target.value }))
                                }}
                                defaultValue={!isCreate ? store.email : ''}
                            />
                        </div>
                        <div className='input-group w-full col-span-1 lg:col-span-1'>
                            <label htmlFor="phone" className='block text-xs font-medium mb-1.5'>Phone *</label>
                            <TextField
                                id='phone'
                                variant="standard"
                                sx={{ width: '100%' }}
                                helperText={''}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    dispatch(handleFormChange({ key: 'phones', value: event.target.value }))
                                }}
                                defaultValue={!isCreate ? store.phones : ''}
                            />
                        </div>
                    </div>

                    <div className='my-2 pt-5' />

                    <div className='input-group w-full col-span-1 lg:col-span-1'>
                        <label htmlFor="notes" className='block text-xs font-medium mb-1.5'>Notes</label>
                        <TextField
                            id='notes'
                            variant="standard"
                            sx={{ width: '100%' }}
                            helperText={''}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                dispatch(handleFormChange({ key: 'notes', value: event.target.value }))
                            }}
                            defaultValue={!isCreate ? store.notes : ''}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateOrUpdateForm;




/*


*/