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

const create = async (area: any) => {
    const required = ['name'];
    if (required.some((key) => !area[key])) {
        throw new Error('Required fields are missing');
    }
    try {
        const data = await client.graphql({
            query: createArea,
            variables: { input: { ...area } },
        });

        return data;
    } catch (error) {
        console.error(error);
    }
}

const update = async (area: any) => {
    try {
        const data = await client.graphql({
            query: updateArea,
            variables: { input: { ...area } },
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