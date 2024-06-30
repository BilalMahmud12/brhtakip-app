'use client'
import React, { useEffect, useRef } from 'react';
import * as Repo from '@/repository/index';

import { usePathname } from 'next/navigation'


const UpdateRequest: React.FC = () => {
    const pathname = usePathname();

    return (
        <div>
            <h1>Update Request</h1>
        </div>
    )
}

export default UpdateRequest