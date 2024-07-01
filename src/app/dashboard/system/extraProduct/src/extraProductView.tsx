'use client'
import React, { useRef } from 'react';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import * as Repo from '@/repository/index';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next-nprogress-bar';
import { setExtraProducts, setExtraProductsForm } from '@/reduxStore/features/extraProductSlice';

import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { ExtraProduct } from '@/API';
import ExtraProductsDataTable from './extraProductsDataTable';
import { toast } from 'sonner';

const ExtraProductView: React.FC = () => {

    const dispatch = useAppDispatch();
    const router = useRouter();
    const extraProducts = useAppSelector((state: RootState) => state.extraProduct.extraProducts);

    const handleDeleteExtraProduct = async (data: any) => {
        try {
            const deleteExtraProduct = await Repo.ExtraProductRepository.default.softDelete(data.originalData.id);
            if (deleteExtraProduct && deleteExtraProduct.data) {
                const newExtraProducts = await Repo.ExtraProductRepository.default.getAllExtraProducts();
                dispatch(setExtraProducts(newExtraProducts as unknown as ExtraProduct[]));
                toast.success('Ürun Silindi');
            }
        } catch (error) {
            console.log('Failed Delete Extra Product', error)
        }
    }

    return (
        <div className="mb-8">
            <div className='mb-4 space-y-5'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-3'>
                        <h1 className='text-2xl font-semibold'>Extra Ürunler</h1>
                    </div>
                    <div className='flex items-center space-x-3'>
                        <div className='flex items-center space-x-2'>
                            <Button
                                variant="contained"
                                startIcon={<AddIcon />}
                                onClick={() => router.push('/dashboard/system/extraProduct/create')}
                            >
                                Ürun Ekle
                            </Button>
                        </div>
                    </div>
                </div>

                <div className='mt-8 bg-white shadow'>
                    <ExtraProductsDataTable
                        dataPayload={extraProducts}
                        onDelete={handleDeleteExtraProduct}
                    // handleEdit={ }
                    />
                </div>
            </div>
        </div>
    )
}

export default ExtraProductView

