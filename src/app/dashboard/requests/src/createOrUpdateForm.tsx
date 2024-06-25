'use client'
import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { handleFormChange } from '@/reduxStore/features/requestSlice';
import { listProducts, listStores, listMaterials } from '@/graphql/queries';
import { Input, Label, Autocomplete, TextAreaField } from '@aws-amplify/ui-react';
import { generateRequestNumber } from '@/utils/helpers';
import { client } from '@/repository';

import AutoComplete from '@/components/core/autoComplete';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ImagesUpload from './imagesUpload';
import { StorageImage } from '@aws-amplify/ui-react-storage';


import type { Request, RequestItem } from '@/API';


interface CreateOrUpdateFormProps {
    isCreate?: boolean;
    request?: Request;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const statusOptions = [
    { id: 'PENDING_APPROVAL', label: 'ONAY BEKLENİYOR' },
    { id: 'WAITING_DESIGN', label: 'TASARIM BEKLENİYOR' },
    { id: 'WAITING_PRESS', label: 'BASKI BEKLENİYOR' },
    { id: 'COMPLETE', label: 'TAMAMLANDI' },
    { id: 'CANCELLED', label: 'İPTAL EDİLDİ' },
];

const getStatusColor = (statusId: string) => {
    switch (statusId) {
        case 'PENDING_APPROVAL':
            return 'bg-[#FFA500]'; // Orange
        case 'WAITING_DESIGN':
            return 'bg-[#1E90FF]'; // DodgerBlue
        case 'WAITING_PRESS':
            return 'bg-[#FFD700]'; // Gold
        case 'COMPLETE':
            return 'bg-[#32CD32]'; // LimeGreen
        case 'CANCELLED':
            return 'bg-[#FF6347]'; // Tomato
        default:
            return 'bg-[#D3D3D3]'; // LightGray for unknown statuses
    }
}

const renderStatusOption = (option: any, value: any) => {
    const { label, id } = option;
    return (
        <div className='flex items-center space-x-2'>
            <span className={`w-3 h-3 rounded-full ${getStatusColor(id)}`}></span>
            <span className='text-sm'>{ label }</span>
        </div>
    )
}

const renderStoreOption = (option: any, value: any) => {
    const { label, description } = option;

    return (
        <div className=''>
            <span className='block text-xs font-medium mb-0.5'>{ label }</span>
            <span className='block text-xs text-gray-500'>{description}</span>
        </div>
    )
}

const getClientOptions = (clientProfiles: any[]) => {
    return clientProfiles.map((client) => {
        return { value: client.id, label: client.name }
    })
}

const CreateOrUpdateForm: React.FC<CreateOrUpdateFormProps> = (props) => {
    const { 
        isCreate = true, 
        request = {} as Request
    } = props;

    const dispatch = useAppDispatch<AppDispatch>();
    const currentUser = useAppSelector((state: RootState) => state.global.currentUserProfile);
    const clientProfiles = useAppSelector((state: RootState) => state.client.clientProfiles);
    const { clientprofileID } = currentUser
    
    const requestForm = useAppSelector((state: RootState) => state.request.requestForm);
    const requestFormRef = React.useRef(requestForm);
    requestFormRef.current = requestForm;

    console.log('Request Form:', requestFormRef.current);

    const [storesList, setStoresList] = useState<{ id: string, label: string }[]>([]);
    const [productsList, setProductsList] = useState<{ id: string, label: string }[]>([]);
    const [applicationAreasList, setApplicationAreasList] = useState<{ value: string, label: string }[]>([]);
    const [materialsList, setMaterialsList] = useState<{ value: string, label: string }[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const [
                storesData,
                materialsData
            ] = await Promise.all([
                client.graphql({ query: listStores }),
                client.graphql({ query: listMaterials })
            ]);

            setStoresList(storesData.data.listStores.items.map((item: any) => ({ id: item.id, label: item.name, description: item.address })));
            setMaterialsList(materialsData.data.listMaterials.items.map((item: any) => ({ value: item.id, label: item.name })));
            setApplicationAreasList([
                { value: 'INTERIOR', label: 'İç Mekan' },
                { value: 'EXTERIOR', label: 'Dış Mekan' },
                { value: 'VEHICLE', label: 'Araç Giydirme' },
                { value: 'WINDOW', label: 'Cam' },
                { value: 'OTHER', label: 'Diğer' }
            ]);
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (isCreate) {
            dispatch(handleFormChange({ key: 'status', value: 'PENDING_APPROVAL'}))
            dispatch(handleFormChange({ key: 'requestNumber', value: generateRequestNumber()}))
        } else {
            console.log('Request Data:', request);
            loadFormData(request);
        }
    }, [])

    const getBrandsList = (clientID: string): { value: string, label: string }[] => {
        return clientProfiles
                .find(client => client.id === clientID)
                ?.Brands
                ?.items
                ?.map(brand => ({
                    value: brand?.id as string,
                    label: brand?.name as string
                })) 
                || [];
    }

    const handleOnBrandSelection = async (option: { value: string, label: string }) => {
        dispatch(handleFormChange({ key: 'requestBrandId', value: option.value }))
        setProductsList(await getProductsList(option.value));
    }

    const handleOnBrandClear = () => {
        dispatch(handleFormChange({ key: 'requestBrandId', value: '' }))
        dispatch(handleFormChange({ key: 'requestProductId', value: '' }))
        setProductsList([]);
    }

    const getProductsList = async (brandId: string): Promise<{ id: string, label: string }[]> => {
        if (!brandId || brandId === '') return [];

        const productsData = await client.graphql({ 
            query: listProducts,
            variables: { filter: { brandID: { eq: brandId } } } 
        });

        return productsData.data.listProducts.items.map((item: any) => ({ id: item.id, label: item.name }));
    }

    const loadFormData = async (request: Request) => {
        const {
            status,
            requestNumber,
            clientprofileID,
            storeID,
            requestBrandId,
            requestProductId,
            requestMaterialId,
            requestDetails
        } = request;

        const {
            applicationArea,
            material,
            branded = false,
            quantity = 0,
            width = 0,
            height = 0,
            designNote = ''
        } = requestDetails as RequestItem;

        setProductsList(await getProductsList(requestBrandId as string));

        console.log('start loading form data!')
        dispatch(handleFormChange({ key: 'status', value: status }));
        dispatch(handleFormChange({ key: 'requestNumber', value: requestNumber }));
        dispatch(handleFormChange({ key: 'clientprofileID', value: clientprofileID }));
        dispatch(handleFormChange({ key: 'storeID', value: storeID }));
        dispatch(handleFormChange({ key: 'requestBrandId', value: requestBrandId as string }));
        dispatch(handleFormChange({ key: 'requestProductId', value: requestProductId as string }));
        dispatch(handleFormChange({ key: 'requestMaterialId', value: requestMaterialId as string }));
        dispatch(handleFormChange({ key: 'requestDetails.applicationArea', value: applicationArea as string }));
        dispatch(handleFormChange({ key: 'requestDetails.material', value: material as string }));
        dispatch(handleFormChange({ key: 'requestDetails.branded', value: branded ? '1' : '0' }));
        dispatch(handleFormChange({ key: 'requestDetails.quantity', value: (quantity as number)?.toString() }));
        dispatch(handleFormChange({ key: 'requestDetails.width', value: (width as number)?.toString() }));
        dispatch(handleFormChange({ key: 'requestDetails.height', value: (height as number)?.toString() }));
        dispatch(handleFormChange({ key: 'requestDetails.designNote', value: designNote as string }));
        console.log('finished loading form data:', requestForm);
    }

    return (
        <div>
            <div className='h-full'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                    {/** Talep Ayarları */}
                    <div className='p-6 bg-white shadow col-span-2 sm:col-span-1'>
                        <h2 className='text-base font-semibold mb-6'>Talep Ayarları</h2>

                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8 mb-4'>
                            <div className='input-group w-full col-span-2 lg:col-span-1'>
                                <label htmlFor="requestNumber" className='block text-xs font-medium mb-1.5'>Talep Numarası</label>
                                <TextField
                                    id='requestNumber'
                                    variant="standard"
                                    sx={{ width: '100%' }}
                                    helperText={''}
                                    value={requestFormRef.current.requestNumber}
                                    disabled
                                />
                            </div>
                        </div>
                    </div>

                    {/** Talep Durumu */}
                    <div className='p-6 bg-white shadow col-span-2 sm:col-span-1'>
                        <h2 className='text-base font-semibold mb-6'>Marka ve Ürün</h2>

                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8 mb-4'>
                            {clientprofileID === 'BRH_ADMIN' && (
                                <div className='input-group w-full col-span-2'>
                                    <label htmlFor="client_name" className='block text-xs font-medium mb-1.5'>Firma</label>
                                    <AutoComplete
                                        id="client_name"
                                        options={getClientOptions(clientProfiles)}
                                        value={
                                            clientProfiles.find(
                                                (client: any) => client.id === requestFormRef.current.clientprofileID
                                            )?.id as string || ''
                                        }
                                        handleOnChange={(option) => dispatch(
                                            handleFormChange({ 
                                                key: 'clientprofileID', 
                                                value: option?.value as string || '' 
                                            })
                                        )}
                                    />
                                </div>
                            )}

                            {/* <div className='input-group w-full col-span-1'>
                                <label htmlFor="brand_name" className='block text-xs font-medium mb-1.5'>Marka</label>
                                <AutoComplete
                                    id="brand_name"
                                    options={getBrandsList(requestFormRef.current.clientprofileID)}
                                    value={
                                        getBrandsList(requestFormRef.current.clientprofileID).find(
                                            (brand: any) => brand.value === requestFormRef.current.requestBrandId
                                        )?.value as string || ''
                                    }
                                    handleOnChange={(option) => dispatch(
                                        handleFormChange({ 
                                            key: 'requestBrandId', 
                                            value: option?.value as string || '' 
                                        })
                                    )}
                                />
                            </div> */}
                        </div>
                    </div>

                    {/** Mağaza */}
                    <div className='p-6 bg-white shadow col-span-2'>
                        <h2 className='text-base font-semibold mb-6'>Mağaza</h2>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8 mb-4'></div>
                    </div>

                    {/** Finans */}
                    <div className='p-6 bg-white shadow col-span-2'>
                        <h2 className='text-base font-semibold mb-6'>Finans</h2>
                        
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8 mb-4'>
                            <div className='input-group w-full col-span-2 lg:col-span-1'>
                                <label htmlFor="productionCost" className='block text-xs font-medium mb-1.5'>Urtim Maliyeti</label>
                                <TextField
                                    id='productionCost'
                                    variant="standard"
                                    sx={{ width: '100%' }}
                                    helperText={''}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        console.log('Production Cost:', event.target.value);
                                        dispatch(handleFormChange({
                                            key: 'productionCost',
                                            value: event.target.value
                                        }))
                                    }}
                                    placeholder={'0.00'}
                                    type='number'
                                    inputProps={{ 
                                        min: 0.00, 
                                        step: 0.01,
                                    }}
                                />
                            </div>

                            <div className='input-group w-full col-span-2 lg:col-span-1'>
                                <label htmlFor="cargoBudget" className='block text-xs font-medium mb-1.5'>Kargo Bütçesi</label>
                                <TextField
                                    id='cargoBudget'
                                    variant="standard"
                                    sx={{ width: '100%' }}
                                    helperText={''}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        dispatch(handleFormChange({
                                            key: 'cargoBudget',
                                            value: event.target.value
                                        }))
                                    }}
                                    placeholder={'0.00'}
                                    type='number'
                                    inputProps={{
                                        min: 0.00,
                                        step: 0.01,
                                    }}
                                />
                            </div>

                            <div className='input-group w-full col-span-2 lg:col-span-1'>
                                <label htmlFor="assemblyBudget" className='block text-xs font-medium mb-1.5'>Montaj Bütçesi</label>
                                <TextField
                                    id='assemblyBudget'
                                    variant="standard"
                                    sx={{ width: '100%' }}
                                    helperText={''}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        dispatch(handleFormChange({
                                            key: 'assemblyBudget',
                                            value: event.target.value
                                        }))
                                    }}
                                    placeholder={'0.00'}
                                    type='number'
                                    inputProps={{
                                        min: 0.00,
                                        step: 0.01,
                                    }}
                                />
                            </div>

                            <div className='input-group w-full col-span-2 lg:col-span-1'>
                                <label htmlFor="monthlyFee" className='block text-xs font-medium mb-1.5'>Aylık Aidatı</label>
                                <TextField
                                    id='monthlyFee'
                                    variant="standard"
                                    sx={{ width: '100%' }}
                                    helperText={''}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        dispatch(handleFormChange({
                                            key: 'monthlyFee',
                                            value: event.target.value
                                        }))
                                    }}
                                    placeholder={'0.00'}
                                    type='number'
                                    inputProps={{
                                        min: 0.00,
                                        step: 0.01,
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/** Talep Detayları */}
                    <div className='p-6 bg-white shadow col-span-2'>
                        <h2 className='text-base font-semibold mb-6'>Talep Detaiları</h2>

                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8 mb-4'>
                            <div className='input-group w-full col-span-2 lg:col-span-1'>
                                <label htmlFor="quantity" className='block text-xs font-medium mb-1.5'>Adet</label>
                                <TextField
                                    id='quantity'
                                    variant="standard"
                                    sx={{ width: '100%' }}
                                    helperText={''}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        dispatch(handleFormChange({
                                            key: 'requestDetails.quantity',
                                            value: event.target.value
                                        }))
                                    }}
                                    placeholder={'0'}
                                    type='number'
                                    inputProps={{
                                        min: 0,
                                        step: 1,
                                    }}
                                />
                            </div>
                            
                            <div className='input-group w-full col-span-2 lg:col-span-1'>
                                <label htmlFor="applicationArea" className='block text-xs font-medium mb-1.5'>Uygulama Alanı</label>
                                <AutoComplete
                                    id="applicationArea"
                                    options={applicationAreasList}
                                    value={requestFormRef.current.requestDetails.applicationArea}
                                    handleOnChange={(option) => dispatch(
                                        handleFormChange({ 
                                            key: 'requestDetails.applicationArea', 
                                            value: option?.value as string || '' 
                                        })
                                    )}
                                />
                            </div>

                            <div className='input-group w-full col-span-2 lg:col-span-1'>
                                <label htmlFor="material" className='block text-xs font-medium mb-1.5'>Malzeme</label>
                                <AutoComplete
                                    id="material"
                                    options={materialsList}
                                    value={requestFormRef.current.requestDetails.material}
                                    handleOnChange={(option) => dispatch(
                                        handleFormChange({ 
                                            key: 'requestDetails.material', 
                                            value: option?.value as string || '' 
                                        })
                                    )}
                                />
                            </div>

                            
                            <div className='input-group w-full col-span-3 lg:col-span-1'>
                                <label htmlFor="branded" className='block text-xs font-medium mb-1.5'>Markalı</label>
                                <Stack direction="row" spacing={1}>
                                    <Switch
                                        id="branded"
                                        checked={requestFormRef.current.requestDetails.branded}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                            dispatch(handleFormChange({
                                                key: 'requestDetails.branded',
                                                value: event.target.checked ? '1' : '0'
                                            }))
                                        }}
                                    />
                                </Stack>
                            </div>
                        </div>
                    </div>

                    {/** Referans Fotoğrafları */}
                    <div className='p-6 bg-white shadow col-span-2'>
                        <h2 className='text-base font-semibold mb-6'>Referans Fotoğrafları</h2>

                        <div>
                            <ImagesUpload
                                requestNumber={requestFormRef.current.requestNumber} 
                                category='references'
                            />

                            {/* <StorageImage alt="sleepy-cat" path="public/BRH-2024-16849/references/4bf22b6b-5d49-43ec-98e5-686609a31bce.jpg" />; */}
                        </div>
                    </div>

                    {/** Tasarım ve Revizeler */}
                    <div className='p-6 bg-white shadow col-span-2'>
                        <h2 className='text-base font-semibold mb-6'>Tasarım ve Revizeler</h2>
                    </div>

                    {/** Baskı Fotoğrafları */}
                    <div className='p-6 bg-white shadow col-span-2'>
                        <h2 className='text-base font-semibold mb-6'>Baskı Fotoğrafları</h2>
                    </div>

                    {/** Montaj Fotoğrafları */}
                    <div className='p-6 bg-white shadow col-span-2'>
                        <h2 className='text-base font-semibold mb-6'>Uygulama Fotoğrafları</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateOrUpdateForm;