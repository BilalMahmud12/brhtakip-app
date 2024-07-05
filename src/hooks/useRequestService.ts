import * as Repo from '@/repository/index';
import { useState, useEffect, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { handleFormChange as onHandleFormChange, resetFormValues, setRequests } from '@/reduxStore/features/requestSlice';
import { client } from '@/repository';
import { listProducts, listStores, listMaterials } from '@/graphql/queries';
import type { Request, RequestItem } from '@/API';

type RequestForm = Omit<Request, 'id' | 'createdAt' | 'updatedAt' | '__typename'> 

interface UseRequestService {
    getClientOptions: () => { value: string; label: string }[]
}

export const useRequestService = (): UseRequestService => {
    const clientProfiles = useAppSelector((state: RootState) => state.client.clientProfiles);
    const getClientOptions = () => {
        return clientProfiles?.map((client) => {
            return { value: client.id, label: client.name || '' }
        }) || [];
    }

    return {
        getClientOptions
    };
};
