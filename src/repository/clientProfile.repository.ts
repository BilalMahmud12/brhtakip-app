import { listClientProfiles, getClientProfile } from '@/graphql/queries';
import { createClientProfile, updateClientProfile, deleteClientProfile } from '@/graphql/mutations';
import { client } from '@/repository';
import type { ClientProfile } from '@/API';

const getClientProfiles = async () => {
    try {
        const { data } = await client.graphql({ query: listClientProfiles });
        return data.listClientProfiles.items as ClientProfile[];
    } catch (error) {
        console.error(error);
    }
}

const getClientProfileById = async (id: string) => {
    try {
        const { data } = await client.graphql({
            query: getClientProfile,
            variables: { id },
        });

        return data.getClientProfile as ClientProfile;
    } catch (error) {
        console.error(error);
    }
}

const create = async (request: ClientProfile) => {
    try {
        const data = await client.graphql({
            query: createClientProfile,
            variables: { input: request },
        });

        return data;
    } catch (error) {
        console.error(error);
    }
}

const update = async (request: ClientProfile) => {
    try {
        const data = await client.graphql({
            query: updateClientProfile,
            variables: { input: request },
        });

        return data;
    } catch (error) {
        console.error(error);
    }
}

const softDelete = async (id: string) => {
    try {
        const data = await client.graphql({
            query: deleteClientProfile,
            variables: { input: { id } },
        });

        return data;
    } catch (error) {
        console.error(error);
    }
}

export {
    getClientProfiles,
    getClientProfileById,
    create,
    update,
    softDelete
}