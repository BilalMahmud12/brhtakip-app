'use client'
import React from 'react'
import type { ExtraProduct } from '@/API';
import ExtraProductView from './src/extraProductView';

const ExtraProduct: React.FC = () => {
    return (
        <div>
            <title>Ekstra Ürünler - BRH Takip</title>

            <div>
                <ExtraProductView />
            </div>
        </div>
    )
}

export default ExtraProduct