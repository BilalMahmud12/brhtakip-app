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
    requestForm: RequestForm;
    storesList: { id: string; label: string; description?: string }[];
    productsList: { id: string; label: string }[];
    applicationAreasList: { id: string; label: string }[];
    materialsList: { id: string; label: string }[];
    handleFormChange: (key: string, value: any) => void;
    loadFormData: (request: Request) => Promise<void>;
    handleCreateRequest: () => Promise<void>;
    handleUpdateRequest: (data: any) => Promise<void>;
    handleDeleteRequest: (data: any) => void;
    fetchClientData: () => void;
    getClientOptions: () => { value: string; label: string }[]
}

export const useRequestService = (): UseRequestService => {
    const dispatch = useAppDispatch<AppDispatch>();
    const requestForm = useAppSelector((state: RootState) => state.request.requestForm);
    const clientProfiles = useAppSelector((state: RootState) => state.client.clientProfiles);
    const [storesList, setStoresList] = useState<{ id: string; label: string; description?: string }[]>([]);
    const [productsList, setProductsList] = useState<{ id: string; label: string }[]>([]);
    const [applicationAreasList, setApplicationAreasList] = useState<{ id: string; label: string }[]>([]);
    const [materialsList, setMaterialsList] = useState<{ id: string; label: string }[]>([]);

    const fetchClientData = useCallback(async () => {
        const [storesData, materialsData] = await Promise.all([
            client.graphql({ query: listStores }),
            client.graphql({ query: listMaterials })
        ]);

        setStoresList(storesData.data.listStores.items.map((item: any) => ({ id: item.id, label: item.name, description: item.address })));
        setMaterialsList(materialsData.data.listMaterials.items.map((item: any) => ({ id: item.id, label: item.name })));
        setApplicationAreasList([
            { id: 'INTERIOR', label: 'İç Mekan' },
            { id: 'EXTERIOR', label: 'Dış Mekan' },
            { id: 'VEHICLE', label: 'Araç Giydirme' },
            { id: 'WINDOW', label: 'Cam' },
            { id: 'OTHER', label: 'Diğer' }
        ]);
    }, []);

    useEffect(() => {
        fetchClientData();
    }, [fetchClientData]);

    const handleFormChange = (key: string, value: any) => {
        dispatch(onHandleFormChange({ key, value }));
    };

    const loadFormData = async (request: Request) => {
        const {
            status,
            requestNumber,
            clientprofileID,
            storeID,
            requestBrandId,
            requestProductId,
            requestMaterialId,
            requestDetails
        } = request;

        const {
            applicationArea,
            material,
            branded = false,
            quantity = 0,
            width = 0,
            height = 0,
            designNote = ''
        } = requestDetails as RequestItem;

        setProductsList(await getProductsList(requestBrandId as string));

        dispatch(onHandleFormChange({ key: 'status', value: status }));
        dispatch(onHandleFormChange({ key: 'requestNumber', value: requestNumber }));
        dispatch(onHandleFormChange({ key: 'clientprofileID', value: clientprofileID }));
        dispatch(onHandleFormChange({ key: 'storeID', value: storeID }));
        dispatch(onHandleFormChange({ key: 'requestBrandId', value: requestBrandId as string }));
        dispatch(onHandleFormChange({ key: 'requestProductId', value: requestProductId as string }));
        dispatch(onHandleFormChange({ key: 'requestMaterialId', value: requestMaterialId as string }));
        dispatch(onHandleFormChange({ key: 'requestDetails.applicationArea', value: applicationArea as string }));
        dispatch(onHandleFormChange({ key: 'requestDetails.material', value: material as string }));
        dispatch(onHandleFormChange({ key: 'requestDetails.branded', value: branded ? '1' : '0' }));
        dispatch(onHandleFormChange({ key: 'requestDetails.quantity', value: (quantity as number)?.toString() }));
        dispatch(onHandleFormChange({ key: 'requestDetails.width', value: (width as number)?.toString() }));
        dispatch(onHandleFormChange({ key: 'requestDetails.height', value: (height as number)?.toString() }));
        dispatch(onHandleFormChange({ key: 'requestDetails.designNote', value: designNote as string }));
    };

    const handleCreateRequest = async () => {
        // try {
        //     const createRequest = await client.graphql({
        //         query: /* Your create request mutation here */,
        //         variables: { input: requestForm }
        //     });

        //     if (createRequest.data) {
        //         dispatch(setRequests([]));
        //         const newRequests = await client.graphql({ query: /* Your list requests query here */ });
        //         dispatch(setRequests(newRequests.data.listRequests.items));
        //         dispatch(resetFormValues());
        //     }
        // } catch (error) {
        //     console.error('Error creating request:', error);
        // }
    };

    const handleUpdateRequest = async (data: any) => {
        // try {
        //     const updateRequest = await client.graphql({
        //         query: /* Your update request mutation here */,
        //         variables: { input: data }
        //     });

        //     if (updateRequest.data) {
        //         const newRequests = await client.graphql({ query: /* Your list requests query here */ });
        //         dispatch(setRequests(newRequests.data.listRequests.items));
        //     }
        // } catch (error) {
        //     console.error('Error updating request:', error);
        // }
    };

    const handleDeleteRequest = async (data: any) => {
        // try {
        //     await client.graphql({
        //         query: /* Your delete request mutation here */,
        //         variables: { input: { id: data.id } }
        //     });

        //     const newRequests = await client.graphql({ query: /* Your list requests query here */ });
        //     dispatch(setRequests(newRequests.data.listRequests.items));
        // } catch (error) {
        //     console.error('Error deleting request:', error);
        // }
    };

    const getProductsList = async (brandId: string): Promise<{ id: string; label: string }[]> => {
        if (!brandId) return [];

        const productsData = await client.graphql({
            query: listProducts,
            variables: { filter: { brandID: { eq: brandId } } }
        });

        return productsData.data.listProducts.items.map((item: any) => ({ id: item.id, label: item.name }));
    };

    const getClientOptions = () => {
        return clientProfiles?.map((client) => {
            return { value: client.id, label: client.name || '' }
        }) || [];
    }

    return {
        requestForm: requestForm as unknown as RequestForm,
        storesList,
        productsList,
        applicationAreasList,
        materialsList,
        handleFormChange,
        loadFormData,
        handleCreateRequest,
        handleUpdateRequest,
        handleDeleteRequest,
        fetchClientData,
        getClientOptions
    };
};
