import { listAreas, getArea } from '@/graphql/queries';
import { createArea, updateArea, deleteArea } from '@/graphql/mutations';
import { client } from '@/repository';
import type { Area } from '@/API';

const getAllAreas = async () => {
    try {
        const { data } = await client.graphql({ query: listAreas });
        return data.listAreas.items
    } catch (error) {
        console.error(error);
    }
}

const getAreasById = async (id: string) => {
    try {
        const { data } = await client.graphql({
            query: getArea,
            variables: { id },
        });

        return data;
    } catch (error) {
        console.error(error);
    }
}

const create = async (request: Area) => {
    try {
        const data = await client.graphql({
            query: createArea,
            variables: { input: request },
        });

        return data;
    } catch (error) {
        console.error(error);
    }
}

const update = async (request: Area) => {
    try {
        const data = await client.graphql({
            query: updateArea,
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
            query: deleteArea,
            variables: { input: { id } },
        });

        return data;
    } catch (error) {
        console.error(error);
    }
}

export {
    getAllAreas,
    getAreasById,
    create,
    update,
    softDelete
}