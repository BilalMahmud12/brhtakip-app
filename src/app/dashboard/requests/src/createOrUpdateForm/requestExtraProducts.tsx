'use client'
import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { handleFormChange } from '@/reduxStore/features/requestSlice';
import AutoComplete, { Option } from '@/components/core/autoComplete';
import { TextField, IconButton, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import * as Repo from '@/repository/index';
import { RequestExtraProductInput  } from '@/API';


const RequestExtraProducts: React.FC = () => {
    const dispatch = useAppDispatch<AppDispatch>();
    const requestExtraProducts = useAppSelector((state: RootState) => state.request.requestForm.extraProducts);
    const [allExtraProducts, setAllExtraProducts] = useState<Array<any>>([]); 
    const [extraProductsOptions, setExtraProductsOptions] = useState<Option[]>([]);

    const [localExtraProducts, setLocalExtraProducts] = useState<RequestExtraProductInput[]>(requestExtraProducts || []);

    useEffect(() => {
        const fetchExtraProducts = async () => {
            try {
                const products = await Repo.ExtraProductRepository.getAllExtraProducts();
                setAllExtraProducts(products || []);
                setExtraProductsOptions(products?.map(product => ({
                    value: product.id,
                    label: product.name,
                })) || []);
            } catch (error) {
                console.error('Failed to fetch extra products:', error);
            }
        };

        fetchExtraProducts();
    }, []);

    useEffect(() => {
        setLocalExtraProducts(requestExtraProducts || []);
    }, [requestExtraProducts]);

    const handleAddProduct = () => {
        setLocalExtraProducts([...localExtraProducts, { id: '', quantity: '0' }]);
    };

    const handleRemoveProduct = (index: number) => {
        const updatedProducts = localExtraProducts.filter((_, idx) => idx !== index);
        setLocalExtraProducts(updatedProducts);
        dispatch(handleFormChange({ key: 'extraProducts', value: updatedProducts }));
    };

    const handleProductChange = (index: number, key: string, value: string|number|boolean) => {
        const updatedProducts = localExtraProducts.map((product, idx) => {
            console.log('idx', idx);
            console.log('index', index);
            if (idx === index) {
                return {
                    ...product,
                    [key]: value
                };
            }
            return product;
        }
            
        );
        console.log('updatedProducts', updatedProducts);
        setLocalExtraProducts(updatedProducts);
        dispatch(handleFormChange({ key: 'extraProducts', value: updatedProducts }));
    };

    return (
        <React.Fragment>
            <h2 className='text-base font-semibold mb-6'>Ek Ürünleri</h2>
            <div className='space-y-3'>
                <div className='flex items-center justify-start'>
                    <Button 
                        variant="contained" 
                        size='small'
                        startIcon={<AddIcon />}
                        onClick={handleAddProduct}
                    >
                        Ek Ürün Ekle
                    </Button>
                </div>
                <div className='space-y-3 bg-zinc-100 rounded-md border border-zinc-200 px-4 py-4'>
                    {localExtraProducts.length === 0 && (
                        <div className='text-sm text-center text-gray-400 w-full block'>Ek ürün bulunamadı.</div>
                    )}
                    
                    {localExtraProducts.map((product, index) => (
                        <div key={index} className='w-full bg-white shadow px-6 pb-2 pt-4 rounded-md'>
                            <div className='grid grid-cols-1 lg:grid-cols-5 gap-x-6 gap-y-8 mb-4'>
                                <div className='input-group w-full col-span-2 lg:col-span-1'>
                                    <label htmlFor={`extraProduct_${index}`} className='block text-xs font-medium mb-1.5'>
                                        Ürün
                                    </label>
                                    <AutoComplete
                                        id={`extraProduct_${index}`}
                                        options={extraProductsOptions}
                                        value={product.id || ''}
                                        handleOnChange={(option, reason) => {
                                            console.log('option', option, index);
                                            if (reason === 'clear') {
                                                handleProductChange(index, 'id', '');
                                                return;
                                            }

                                            handleProductChange(index, 'id', option.value);
                                        }}
                                    />
                                </div>
                                <div className='input-group w-full col-span-2 lg:col-span-1'>
                                    <label htmlFor={`quantity_${index}`} className='block text-xs font-medium mb-1.5'>
                                        Adet
                                    </label>
                                    <TextField
                                        id={`quantity_${index}`}
                                        type='number'
                                        variant="standard"
                                        sx={{ width: '100%' }}
                                        value={product.quantity || 0}
                                        onChange={(e) => handleProductChange(index, 'quantity', parseInt(e.target.value))}
                                    />
                                </div>
                                <div className='input-group w-full col-span-2'>
                                    <label htmlFor="extraProductNote" className='block text-xs font-medium mb-1.5'>
                                        Not
                                    </label>
                                    <TextField
                                        id='extraProductNote'
                                        variant="standard"
                                        sx={{ width: '100%' }}
                                        helperText={''}
                                        value={product.note || ''}
                                        onChange={(e) => handleProductChange(index, 'note', e.target.value)}
                                        multiline={true}
                                        rows={1}
                                    />
                                </div>
                                <div className='flex items-end justify-start col-span-2 lg:col-span-1'>
                                    <IconButton aria-label="delete" size='small' onClick={() => handleRemoveProduct(index)}>
                                        <DeleteIcon fontSize='inherit' />
                                    </IconButton>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>            
        </React.Fragment>
    );
};

export default RequestExtraProducts;
