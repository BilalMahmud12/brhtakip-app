'use client'
import React, { useEffect, useRef } from 'react';
import * as Repo from '@/repository/index';
import { useAppDispatch, useAppSelector } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { handleFormChange, resetFormValues } from '@/reduxStore/features/requestSlice';
import RequestUpdateView from './src/requestUpdateView';
import { usePathname } from 'next/navigation'

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
            dispatch(handleFormChange({ key: 'id', value: requestID }));
            dispatch(handleFormChange({ key: 'requestNumber', value: request.requestNumber }));
            dispatch(handleFormChange({ key: 'status', value: request.status }));
            dispatch(handleFormChange({ key: 'storeID', value: request.storeID }));
            dispatch(handleFormChange({ key: 'clientprofileID', value: request.clientprofileID }));
            dispatch(handleFormChange({ key: 'requestBrandId', value: request.requestBrandId }));
            dispatch(handleFormChange({ key: 'requestProductId', value: request.requestProductId }));
            dispatch(handleFormChange({ key: 'requestApplicationAreaId', value: request.requestApplicationAreaId }));
            dispatch(handleFormChange({ key: 'requestMaterialId', value: request.requestMaterialId }));
            dispatch(handleFormChange({ key: 'branded', value: request.branded }));
            dispatch(handleFormChange({ key: 'quantity', value: request.quantity }));
            dispatch(handleFormChange({ key: 'width', value: request.width }));
            dispatch(handleFormChange({ key: 'height', value: request.height }));
            dispatch(handleFormChange({ key: 'designNote', value: request.designNote }));
            dispatch(handleFormChange({ key: 'isExtraProductRequest', value: request.isExtraProductRequest }));
            dispatch(handleFormChange({ key: 'productionCost', value: request.productionCost?.toFixed(2).toString() }));
            dispatch(handleFormChange({ key: 'cargoBudget', value: request.cargoBudget?.toFixed(2).toString() }));
            dispatch(handleFormChange({ key: 'assemblyBudget', value: request.assemblyBudget?.toFixed(2).toString() }));
            dispatch(handleFormChange({ key: 'monthlyFee', value: request.monthlyFee?.toFixed(2).toString() }));
            dispatch(handleFormChange({ key: 'referenceImages', value: request.referenceImages }));
            dispatch(handleFormChange({ key: 'designImages', value: request.designImages }));
            dispatch(handleFormChange({ key: 'printImages', value: request.printImages }));
            dispatch(handleFormChange({ key: 'applicationImages', value: request.applicationImages }));
            dispatch(handleFormChange({ key: 'extraProducts', value: request.extraProducts }));
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