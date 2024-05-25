import { listApplicationAreas, getApplicationArea } from '@/graphql/queries'
import { createApplicationArea, updateApplicationArea, deleteApplicationArea } from '@/graphql/mutations'
import { client } from '@/repository';
import type { ApplicationArea } from '@/API';

const getApplicationAreas = async () => {
    try {
        const { data } = await client.graphql({ query: listApplicationAreas });
        return data.listApplicationAreas.items
    } catch (error) {
        console.error(error);
    }
}

const getApplicationAreaById = async (id: string) => {
    try {
        const { data } = await client.graphql({
            query: getApplicationArea,
            variables: { id },
        });

        return data;
    } catch (error) {
        console.error(error);
    }
}

const create = async (request: ApplicationArea) => {
    try {
        const data = await client.graphql({
            query: createApplicationArea,
            variables: { input: request },
        });

        return data;
    } catch (error) {
        console.error(error);
    }
}

const update = async (request: ApplicationArea) => {
    try {
        const data = await client.graphql({
            query: updateApplicationArea,
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
            query: deleteApplicationArea,
            variables: { input: { id } },
        });

        return data;
    } catch (error) {
        console.error(error);
    }
}

export {
    getApplicationAreas,
    getApplicationAreaById,
    create,
    update,
    softDelete
}