'use client'
import React, { useEffect, useRef } from 'react';
import * as Repo from '@/repository/index';
import { useAppDispatch, useAppSelector } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { handleFormChange, resetFormValues, setRequestForm } from '@/reduxStore/features/requestSlice';
import RequestUpdateView from './src/requestUpdateView';
import { usePathname } from 'next/navigation'
import { removeSchemaTypeName, removeRelationshipProperties } from '@/utils/helpers';

import type { Request } from '@/API';


const UpdateRequest: React.FC = () => {

    const pathname = usePathname();

    const dispatch = useAppDispatch<AppDispatch>();
    const requestForm = useAppSelector((state: RootState) => state.request.requestForm);
    const requests = useAppSelector((state: RootState) => state.request.requests);

    const requestFormRef = useRef(requestForm);
    requestFormRef.current = requestForm;
    console.log('requestFormRef.current', requestFormRef.current);

    const loadRequest = async () => {
        const requestID = pathname.split('/').pop();
        const request: Request | undefined = requests.find((request: Request) => request.id === requestID);

        if (request) {
            dispatch(resetFormValues());
            const cleanRequest = removeRelationshipProperties(
                removeSchemaTypeName(request)
            );
            
            cleanRequest.productionCost = cleanRequest.productionCost?.toFixed(2).toString();
            cleanRequest.cargoBudget = cleanRequest.cargoBudget?.toFixed(2).toString();
            cleanRequest.assemblyBudget = cleanRequest.assemblyBudget?.toFixed(2).toString();
            cleanRequest.monthlyFee = cleanRequest.monthlyFee?.toFixed(2).toString();
            dispatch(setRequestForm(cleanRequest));
        }
    }

    useEffect(() => {
        loadRequest();
    }, [pathname]);

    return (
        <div>
            <title>Talep Güncelle - BRH Takip</title>
           
            <RequestUpdateView />
        </div>
    )
}

export default UpdateRequest