'use client'
import React from "react";
import type { Store } from '@/API';
import StoreView from "./src/storeView";

const Store: React.FC = () => {
    return (
        <div>
            <title>Mağazalar - BRH Takip</title>

            <div><StoreView /></div>
        </div>
    )
}

export default Store