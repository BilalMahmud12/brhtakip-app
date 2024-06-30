'use client'
import React, { use, useEffect } from 'react';
import * as Repo from '@/repository/index';
import { useRequestService } from '@/hooks/useRequestService';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { handleFormChange } from '@/reduxStore/features/requestSlice';
import AutoComplete from '@/components/core/autoComplete';
import { usePathname } from 'next/navigation';

type Option = {
    value: string;
    label: string;
};

const RequestBrandAndProduct: React.FC = () => {
    const pathname = usePathname();
    const { getClientOptions } = useRequestService();

    const dispatch = useAppDispatch<AppDispatch>();
    const clientProfiles = useAppSelector((state: RootState) => state.client.clientProfiles);
    const currentUser = useAppSelector((state: RootState) => state.global.currentUserProfile);
    const requestForm = useAppSelector((state: RootState) => state.request.requestForm);
    const requestFormRef = React.useRef(requestForm);
    requestFormRef.current = requestForm;
    const { clientprofileID } = currentUser;

    const [brandOptionsList, setBrandOptionsList] = React.useState<Option[]>([]);
    const [productOptionsList, setProductOptionsList] = React.useState<Option[]>([]);

    const [selectedClient, setSelectedClient] = React.useState<Option | null>(null);
    const [selectedBrand, setSelectedBrand] = React.useState<Option | null>(null);
    const [selectedProduct, setSelectedProduct] = React.useState<Option | null>(null);

    useEffect(() => {
        setSelectedClient(null);
        setSelectedBrand(null);
        setSelectedProduct(null);
    }, [pathname]);

    useEffect(() => {
        // Initialize form values for update
        const initializeFormValues = async () => {
            const client = clientProfiles.find(client => client.id === requestFormRef.current.clientprofileID);
            const brandOptions = client ? getBrandsList(client.id) : [];
            setBrandOptionsList(brandOptions);

            const selectedBrandOption = brandOptions.find(option => option.value === requestFormRef.current.requestBrandId);
            setSelectedBrand(selectedBrandOption || null);

            const productOptions = selectedBrandOption ? await getProductsList(selectedBrandOption.value) : [];
            setProductOptionsList(productOptions);

            setSelectedClient(client ? { value: client.id, label: client.name || 'Unknown Client' } : null);
            setSelectedProduct(productOptions.find(option => option.value === requestFormRef.current.requestProductId) || null);
        };

        initializeFormValues();
    }, [clientProfiles]);

    const getBrandsList = (clientID: string): Option[] => {
        return clientProfiles
            .find(client => client.id === clientID)
            ?.Brands
            ?.items
            ?.map(brand => ({
                value: brand?.id as string,
                label: brand?.name as string
            }))
            || [];
    };

    const getProductsList = async (brandId: string): Promise<Option[]> => {
        const productsData = await Repo.ProductRepository.getProductByBrandId(brandId);
        return productsData?.map((item: any) => ({ value: item.id, label: item.name })) || [];
    };

    const handleSelectChange = async (
        type: 'client' | 'brand' | 'product',
        option: Option | null,
        reason: string,
        updateOptionsList: (options: Option[]) => void,
        setSelected: (option: Option | null) => void,
        clearFields: { key: string, value: string }[] = []
    ) => {
        const isClear = reason === 'clear';
        const value = isClear || !option ? '' : option.value;

        setSelected(isClear ? null : option);
        dispatch(handleFormChange({ key: `${type}profileID`, value }));

        if (type === 'client' && !isClear) {
            updateOptionsList(getBrandsList((option as Option).value));
            clearFields.forEach(field => {
                dispatch(handleFormChange({ key: field.key, value: field.value }));
            });
        } else if (type === 'brand' && !isClear) {
            updateOptionsList(await getProductsList((option as Option).value));
            dispatch(handleFormChange({ key: 'requestBrandId', value: (option as Option).value }));
            clearFields.forEach(field => {
                dispatch(handleFormChange({ key: field.key, value: field.value }));
            });
        } else if (type === 'product' && !isClear) {
            dispatch(handleFormChange({ key: 'requestProductId', value: (option as Option).value }));
            clearFields.forEach(field => {
                dispatch(handleFormChange({ key: field.key, value: field.value }));
            });
        } else {
            clearFields.forEach(field => {
                dispatch(handleFormChange({ key: field.key, value: field.value }));
            });
            updateOptionsList([]);
            setSelected(null);
            setSelectedBrand(null);
            setSelectedProduct(null);
        }
    };

    return (
        <React.Fragment>
            <h2 className='text-base font-semibold mb-6'>Marka ve Ürün</h2>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8 mb-4'>
                {clientprofileID === 'BRH_ADMIN' && (
                    <div className='input-group w-full col-span-2'>
                        <label htmlFor="clientName" className='block text-xs font-medium mb-1.5'>Firma</label>
                        <AutoComplete
                            id="clientName"
                            options={getClientOptions()}
                            value={selectedClient ? selectedClient.value : ''}
                            handleOnChange={(option, reason) =>
                                handleSelectChange(
                                    'client',
                                    option,
                                    reason,
                                    setBrandOptionsList,
                                    setSelectedClient,
                                    [{ key: 'requestBrandId', value: '' }, { key: 'requestProductId', value: '' }]
                                )
                            }
                        />
                    </div>
                )}

                <div className='input-group w-full col-span-2 lg:col-span-1'>
                    <label htmlFor="brandName" className='block text-xs font-medium mb-1.5'>Marka</label>
                    <AutoComplete
                        id="brandName"
                        options={brandOptionsList}
                        value={selectedBrand ? selectedBrand.value : ''}
                        handleOnChange={(option, reason) =>
                            handleSelectChange(
                                'brand',
                                option,
                                reason,
                                setProductOptionsList,
                                setSelectedBrand,
                                [{ key: 'requestProductId', value: '' }]
                            )
                        }
                    />
                </div>

                <div className='input-group w-full col-span-2 lg:col-span-1'>
                    <label htmlFor="productName" className='block text-xs font-medium mb-1.5'>Ürün</label>
                    <AutoComplete
                        id="productName"
                        options={productOptionsList}
                        value={selectedProduct ? selectedProduct.value : ''}
                        handleOnChange={(option, reason) =>
                            handleSelectChange(
                                'product',
                                option,
                                reason,
                                setProductOptionsList,
                                setSelectedProduct
                            )
                        }
                    />
                </div>
            </div>
        </React.Fragment>
    );
};

export default RequestBrandAndProduct;
