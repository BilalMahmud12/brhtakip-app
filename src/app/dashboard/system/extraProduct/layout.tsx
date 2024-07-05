'use client'
import React, { useEffect } from 'react'
import * as Repo from '@/repository/index'
import type { ExtraProduct } from '@/API';
import { useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch } from '@/reduxStore/store';
import { setExtraProducts } from '@/reduxStore/features/extraProductSlice'

export default function ExtraProductLayout({ children }: { children: React.ReactNode }) {
    const dispatch = useAppDispatch();
    useEffect(() => {
        const fetchExtraProducts = async () => {
            const extraProducts = await Repo.ExtraProductRepository.getAllExtraProducts();
            dispatch(setExtraProducts(extraProducts as unknown as ExtraProduct[]));
            console.log('extraProducts', extraProducts);
        }
        fetchExtraProducts();
    }, [dispatch]);
    return (
        <div>
            {children}
        </div>
    )
}