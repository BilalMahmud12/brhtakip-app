'use client'
import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { useStore } from '@/stores/utils/useStore';
import { listBrands, listProducts, listClientProfiles, listStores, listMaterials } from '@/graphql/queries';
import { Input, Label, Autocomplete, ComboBoxOption } from '@aws-amplify/ui-react';
import { generateRequestNumber } from '@/utils/helpers';
import { client } from '@/repository';

import type { Request} from '@/API';


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

const CreateOrUpdateForm: React.FC<CreateOrUpdateFormProps> = observer((props) => {
    const { 
        isCreate = true, 
        request = {} as Request
    } = props;

    const { userStore, clientProfileStore, requestStore } = useStore();
    const { userData } = userStore;
    const { getClientProfiles } = clientProfileStore;
    const { handleFormChange, getRequestFormValues } = requestStore;

    const [storesList, setStoresList] = useState<{ id: string, label: string }[]>([]);
    const [productsList, setProductsList] = useState<{ id: string, label: string }[]>([]);
    const [applicationAreasList, setApplicationAreasList] = useState<{ id: string, label: string }[]>([]);
    const [materialsList, setMaterialsList] = useState<{ id: string, label: string }[]>([]);

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
            setMaterialsList(materialsData.data.listMaterials.items.map((item: any) => ({ id: item.id, label: item.name })));
            setApplicationAreasList([
                { id: 'INTERIOR', label: 'İç Mekan' },
                { id: 'EXTERIOR', label: 'Dış Mekan' },
                { id: 'VEHICLE', label: 'Araç Giydirme' },
                { id: 'WINDOW', label: 'Cam' },
                { id: 'OTHER', label: 'Diğer' }
            ]);
        };

        fetchData();
        if (!isCreate) {}
    }, []);
  
    // @TODO: isolate this function to a helper file
    const getClientsList = (): { id: string, label: string }[] => {
        return getClientProfiles?.map((client) => ({
            id: client.id,
            label: client?.name as string || ''
        }));
    }

    // @TODO: isolate this function to a helper file
    const getBrandsList = (clientID: string): { id: string, label: string }[] => {
        return getClientProfiles
                .find(client => client.id === clientID)
                ?.Brands
                ?.items
                ?.map(brand => ({
                    id: brand?.id as string,
                    label: brand?.name as string
                })) 
                || [];
    }

    const handleOnBrandSelection = async (option: ComboBoxOption) => {
        handleFormChange(option.id, 'requestBrandId')
        setProductsList(await getProductsList(option.id));
    }

    const handleOnBrandClear = () => {
        handleFormChange('', 'requestBrandId');
        handleFormChange('', 'requestProductId');
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

    return (
        <div>
            <div className=''>
                <form>
                    <div className=''>
                        <div className='grid grid-cols-2 gap-8 mb-6'>
                            {!userData.isClient && (
                                <div className='input-group col-span-2'>
                                    <Label htmlFor="client_name" className='block text-xs font-medium mb-1.5'>Müşteri</Label>
                                    <Autocomplete
                                        id="client_name"
                                        label="Müşteri"
                                        placeholder='Müşteri Seç'
                                        variation="quiet"
                                        options={getClientsList()}
                                        value={getClientsList().find(client => client.id === getRequestFormValues.clientprofileID)?.label}
                                        onSelect={(option) => handleFormChange(option.id, 'clientprofileID')}
                                        onClear={() => handleFormChange('', 'clientprofileID')}
                                        className='custom-input'
                                        isDisabled
                                    />
                                </div>
                            )}

                            <div className='input-group'>
                                <Label htmlFor="status" className='block text-xs font-medium mb-1.5'>Talep Durumu</Label>
                                <Autocomplete
                                    id="status"
                                    label="Talep Durumu"
                                    placeholder='Talep Durumu Seç'
                                    variation="quiet"
                                    options={statusOptions}
                                    renderOption={renderStatusOption}
                                    onChange={(e) => { console.log('selected status', e.target.value) }}
                                    onSelect={(option) => handleFormChange(option.id, 'status')}
                                    className='custom-input'
                                    value={request.status}
                                />
                            </div>

                            <div className='input-group'>
                                <Label htmlFor="requestNumber" className='block text-xs font-medium mb-1.5'>Talep Numarası</Label>
                                <Input
                                    id="requestNumber"
                                    name="requestNumber"
                                    variation="quiet"
                                    className='custom-input'
                                    defaultValue={getRequestFormValues.requestNumber}
                                    isDisabled
                                />
                            </div>
                        </div>
                    </div>

                    <div className='my-2 pt-5' />

                    <div>
                        <span className='block mb-3 text-xs font-medium'>Mağaza Bilgileri</span>

                        <div className='bg-white px-6 py-8 rounded-md shadow'>
                            <div className='grid grid-cols-2 gap-8'>
                                <div className='input-group col-span-2'>
                                    <Label htmlFor="store_name" className='block text-xs font-medium mb-1.5'>Mağaza</Label>
                                    <Autocomplete
                                        id="store_name"
                                        label="Mağaza"
                                        placeholder='Mağaza Seç'
                                        variation="quiet"
                                        options={storesList}
                                        renderOption={renderStoreOption}
                                        value={storesList.find(store => store.id === getRequestFormValues.storeID)?.label}
                                        onSelect={(option) => handleFormChange(option.id, 'storeID')}
                                        className='custom-input'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='my-2 pt-5' />
                    
                    <div>
                        <span className='block mb-3 text-xs font-medium'>Talep Detaiları</span>
                        <div>
                            <div className='space-y-5'>
                                <div className='bg-white px-6 py-8 rounded-md shadow'>
                                    <div className='grid grid-cols-2 gap-8'>
                                        <div className='input-group'>
                                            <Label htmlFor="brand_name" className='block text-xs font-medium mb-1.5'>Marka</Label>
                                            <Autocomplete
                                                id="brand_name"
                                                label="Marka"
                                                placeholder='Marka Seç'
                                                variation="quiet"
                                                options={getBrandsList(getRequestFormValues.clientprofileID !== '' ? getRequestFormValues.clientprofileID : '')}
                                                onSelect={(option) => handleOnBrandSelection(option)}
                                                onClear={() => handleOnBrandClear}
                                                className='custom-input'
                                            />
                                        </div>

                                        <div className='input-group'>
                                            <Label htmlFor="product_name" className='block text-xs font-medium mb-1.5'>Ürün</Label>
                                            <Autocomplete
                                                id="product_name"
                                                label="Ürün"
                                                placeholder='Ürün Seç'
                                                variation="quiet"
                                                options={productsList}
                                                value={productsList.find(product => product.id === getRequestFormValues.requestProductId)?.label || ''}
                                                onSelect={(option) => handleFormChange(option.id, 'requestProductId')}
                                                onClear={() => handleFormChange('', 'requestProductId')}
                                                className='custom-input'
                                            />
                                        </div>
                                    </div>

                                    <div className='grid grid-cols-3 gap-8 my-6'>
                                        <div className='input-group'>
                                            <Label htmlFor="application_area" className='block text-xs font-medium mb-1.5'>Uygulama Alanı</Label>
                                            <Autocomplete
                                                id="application_area"
                                                label="Uygulama Alanı"
                                                placeholder='Uygulama Alanı Seç'
                                                variation="quiet"
                                                options={applicationAreasList}
                                                onSelect={(option) => handleFormChange(option.id, 'requestDetails.applicationArea')}
                                                className='custom-input'
                                            />
                                        </div>
                                        <div className='input-group'>
                                            <Label htmlFor="material" className='block text-xs font-medium mb-1.5'>Malzeme</Label>
                                            <Autocomplete
                                                id="material"
                                                label="Malzeme"
                                                placeholder='Malzeme Seç'
                                                variation="quiet"
                                                options={materialsList}
                                                onSelect={(option) => {
                                                    handleFormChange(option.id, 'requestMaterialId')
                                                    handleFormChange(option.id, 'requestDetails.material')
                                                }}
                                                className='custom-input'
                                            />
                                        </div>
                                        <div className='input-group'>
                                            <Label htmlFor="branded" className='block text-xs font-medium mb-1.5'>Markalı mı?</Label>
                                            <Autocomplete
                                                id="branded"
                                                label="Markalı mı?"
                                                placeholder='Cevap Seç'
                                                variation="quiet"
                                                options={[
                                                    { id: '1', label: 'Evet' },
                                                    { id: '0', label: 'Hayır' }
                                                ]}
                                                onSelect={(option) => handleFormChange(option.id, 'requestDetails.branded')}
                                                className='custom-input'
                                            />
                                        </div>

                                        <div className='input-group'>
                                            <Label htmlFor="quantity" className='block text-xs font-medium mb-1.5'>Adet</Label>
                                            <Input
                                                id="quantity"
                                                name="quantity"
                                                variation="quiet"
                                                className='custom-input'
                                                onChange={(e) => handleFormChange(e.target.value, 'requestDetails.quantity')}
                                            />
                                        </div>

                                        <div className='input-group'>
                                            <Label htmlFor="width" className='block text-xs font-medium mb-1.5'>Genişlik / cm</Label>
                                            <Input
                                                id="width"
                                                name="width"
                                                variation="quiet"
                                                className='custom-input'
                                                onChange={(e) => handleFormChange(e.target.value, 'requestDetails.width')}
                                            />
                                        </div>

                                        <div className='input-group'>
                                            <Label htmlFor="height" className='block text-xs font-medium mb-1.5'>Yükseklik / cm</Label>
                                            <Input
                                                id="height"
                                                name="height"
                                                variation="quiet"
                                                className='custom-input'
                                                onChange={(e) => handleFormChange(e.target.value, 'requestDetails.height')}
                                            />
                                        </div>

                                        <div className='input-group col-span-3'>
                                            <Label htmlFor="designNote" className='block text-xs font-medium mb-1.5'>Tasarım Notu</Label>
                                            <Input
                                                id="designNote"
                                                name="designNote"
                                                variation="quiet"
                                                className='custom-input'
                                                onChange={(e) => handleFormChange(e.target.value, 'requestDetails.designNote')}
                                            />
                                        </div>

                                    </div>
                                </div>

                                {/*formData.items?.map((requestItem, index) => {
                                    return (
                                        <div key={index} className='bg-gray-100 px-6 py-2.5 rounded-md border border-zinc-200'>
                                            <div className='flex items-center justify-end pt-2'>
                                                <Button
                                                    size="small"
                                                    onClick={() => setFormData({
                                                        ...formData,
                                                        items: formData.items.filter((item, i) => i !== index)
                                                    })}
                                                    className='rounded-md text-red-500 p-1 text-xs border-gray-300 hover:bg-red-600 hover:text-white hover:border-red-600'
                                                >
                                                    <span className='flex items-center'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                        </svg>
                                                    </span>
                                                </Button>
                                            </div>
                                            <RequestItemsForm 
                                                brandsList={brandsList}
                                                productsList={productsList}
                                                applicationAreasList={applicationAreasList}
                                                materialsList={materialsList}
                                            />
                                        </div>
                                    )
                                })*/}
                            </div>
                        </div>
                    </div>
                </form> 
            </div>
        </div>
    );
})

export default CreateOrUpdateForm;