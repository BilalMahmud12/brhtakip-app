import { listRequests, getRequest } from '@/graphql/queries';
import { createRequest, updateRequest, deleteRequest } from '@/graphql/mutations';
import { client } from '@/repository';
import type { Request, RequestStatus } from '@/API';

const getAllRequests = async () => {
    try {
        const { data } = await client.graphql({ 
            query: listRequests,
            variables: { 
                limit: 5 
            },
        });
        return data.listRequests.items
    } catch (error) {
        console.error(error);
    }
}

const getRequestById = async (id: string) => {
    try {
        const { data } = await client.graphql({
            query: getRequest,
            variables: { id },
        });

        return data;
    } catch (error) {
        console.error(error);
    }
}

const getRequestsByStatus = async (status: string, clientId: string | undefined = undefined) => {
    try {
        const { data } = await client.graphql({
            query: listRequests,
            variables: { 
                filter: { 
                    status: { 
                        eq: status as RequestStatus 
                    },
                    ...(clientId && { clientprofileID: { eq: clientId } })
                },
                limit: 100 
            },
        });

        console.log('getRequestsByStatus', data)
        return data.listRequests.items;
    } catch (error) {
        console.error(error);
    }
}

const create = async (request: any) => {
    console.log("Request repo create", request)
    try {
        const data = await client.graphql({
            query: createRequest,
            variables: { 
                input: { ...request } 
            },
        });

        return data;
    } catch (error) {
        console.error(error);
    }
}

const update = async (request: Request) => {
    try {
        const data = await client.graphql({
            query: updateRequest,
            variables: { input: request },
        });

        return data;
    } catch (error) {
        console.error(error);
    }
}

const updateStatus = async (id: string, status: RequestStatus) => {
    try {
        const data = await client.graphql({
            query: updateRequest,
            variables: { input: { id, status } },
        });

        return data;
    } catch (error) {
        console.error(error);
    }
}

const softDelete = async (id: string) => {
    try {
        const data = await client.graphql({
            query: deleteRequest,
            variables: { input: { id } },
        });

        return data;
    } catch (error) {
        console.error(error);
    }
}

export {
    getAllRequests,
    getRequestById,
    getRequestsByStatus,
    create,
    update,
    updateStatus,
    softDelete
}