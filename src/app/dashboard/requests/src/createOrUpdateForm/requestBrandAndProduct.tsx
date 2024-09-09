'use client'
import React, { useEffect, useState, useMemo, useRef } from 'react';
import * as Repo from '@/repository/index';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { handleFormChange } from '@/reduxStore/features/requestSlice';
import AutoComplete from '@/components/core/autoComplete';
import { usePathname } from 'next/navigation';
import CircularProgress from '@mui/material/CircularProgress';

type Option = {
    value: string;
    label: string;
};

const RequestBrandAndProduct: React.FC = () => {
    const pathname = usePathname();

    const dispatch = useAppDispatch<AppDispatch>();
    const clientProfiles = useAppSelector((state: RootState) => state.client.clientProfiles);
    const currentUser = useAppSelector((state: RootState) => state.global.currentUserProfile);
    const requestForm = useAppSelector((state: RootState) => state.request.requestForm);
    const requestFormRef = useRef(requestForm);
    requestFormRef.current = requestForm;
    const { clientprofileID } = currentUser;

    const [brandOptionsList, setBrandOptionsList] = useState<Option[]>([]);
    const [productOptionsList, setProductOptionsList] = useState<Option[]>([]);

    const [selectedClient, setSelectedClient] = useState<Option | null>(null);
    const [selectedBrand, setSelectedBrand] = useState<Option | null>(null);
    const [selectedProduct, setSelectedProduct] = useState<Option | null>(null);

    const [isLoadingBrands, setIsLoadingBrands] = useState(false);
    const [isLoadingProducts, setIsLoadingProducts] = useState(false);

    // Memoize the client options to avoid unnecessary recalculations
    const getClientOptions = useMemo(() => {
        return clientProfiles?.map((client) => {
            return { value: client.id, label: client.name || '' };
        }) || [];
    }, [clientProfiles]);

    useEffect(() => {
        // Reset all fields when the pathname changes
        setSelectedClient(null);
        setSelectedBrand(null);
        setSelectedProduct(null);
    }, [pathname]);

    useEffect(() => {
        let isMounted = true;

        const initializeFormValues = async () => {
            setSelectedClient(null);
            setSelectedBrand(null);
            setSelectedProduct(null);

            const client = clientProfiles.find(client => client.id === requestFormRef.current.clientprofileID);
            if (client && isMounted) {
                setSelectedClient({ value: client.id, label: client.name || 'Unknown Client' });

                setIsLoadingBrands(true);
                const brandOptions = getBrandsList(client.id);
                setBrandOptionsList(brandOptions);
                setIsLoadingBrands(false);

                const selectedBrandOption = brandOptions.find(option => option.value === requestFormRef.current.requestBrandId);
                setSelectedBrand(selectedBrandOption || null);

                if (selectedBrandOption) {
                    setIsLoadingProducts(true);
                    const productOptions = await getProductsList(selectedBrandOption.value);
                    if (isMounted) {
                        setProductOptionsList(productOptions);
                        setIsLoadingProducts(false);

                        const selectedProductOption = productOptions.find(option => option.value === requestFormRef.current.requestProductId);
                        setSelectedProduct(selectedProductOption || null);
                    }
                }
            }
        };

        initializeFormValues();

        return () => {
            isMounted = false; // Cleanup function to set isMounted to false on unmount
        };
    }, [clientProfiles, requestFormRef.current.clientprofileID]);

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
        try {
            const productsData = await Repo.ProductRepository.getProductByBrandId(brandId);
            return productsData?.map((item: any) => ({ value: item.id, label: item.name })) || [];
        } catch (error) {
            console.error("Error fetching products:", error);
            return [];
        }
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
            setIsLoadingBrands(true);
            const newBrandOptions = getBrandsList((option as Option).value);
            updateOptionsList(newBrandOptions);
            setIsLoadingBrands(false);

            clearFields.forEach(field => {
                dispatch(handleFormChange({ key: field.key, value: field.value }));
            });
        } else if (type === 'brand' && !isClear) {
            setIsLoadingProducts(true);
            const newProductOptions = await getProductsList((option as Option).value);
            updateOptionsList(newProductOptions);
            setIsLoadingProducts(false);
            dispatch(handleFormChange({ key: 'requestBrandId', value: (option as Option).value }));

            clearFields.forEach(field => {
                dispatch(handleFormChange({ key: field.key, value: field.value }));
            });
        } else if (type === 'product' && !isClear) {
            dispatch(handleFormChange({ key: 'requestProductId', value: (option as Option).value }));
        }

        if (isClear) {
            updateOptionsList([]);
            setSelected(null);
            setSelectedBrand(null);
            setSelectedProduct(null);
        }
    };

    return (
        <React.Fragment>
            <h2 className='text-base font-semibold mb-12'>Marka ve Ürün</h2>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8 mb-4'>
                {clientprofileID === 'BRH_ADMIN' && (
                    <div className='input-group w-full col-span-2'>
                        <label htmlFor="clientName" className='block text-xs font-medium text-zinc-500 mb-1.5'>Firma</label>
                        <AutoComplete
                            id="clientName"
                            options={getClientOptions}
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

                <div className='input-group w-full col-span-2 lg:col-span-1 relative'>
                    <label htmlFor="brandName" className='block text-xs font-medium text-zinc-500 mb-1.5'>Marka</label>
                    {isLoadingBrands && (
                        <div className='absolute z-50 w-full h-full top-0 left-0 bg-white/50 flex items-center justify-center'>
                            <CircularProgress size={30} />
                        </div>
                    )}
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

                <div className='input-group w-full col-span-2 lg:col-span-1 relative'>
                    <label htmlFor="productName" className='block text-xs font-medium text-zinc-500 mb-1.5'>Ürün</label>
                    {isLoadingProducts && (
                        <div className='absolute z-50 w-full h-full top-0 left-0 bg-white/50 flex items-center justify-center'>
                            <CircularProgress size={30} />
                        </div>
                    )}
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
