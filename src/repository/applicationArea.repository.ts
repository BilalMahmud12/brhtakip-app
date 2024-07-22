import { listApplicationAreas, getApplicationArea } from '@/graphql/queries'
import { createApplicationArea, updateApplicationArea, deleteApplicationArea } from '@/graphql/mutations'
import { client } from '@/repository';

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

const create = async (applicationArea: any) => {
    const required = ['name'];
    if (required.some((key) => !applicationArea[key])) {
        throw new Error('Required fields are missing');
    }
    try {
        const data = await client.graphql({
            query: createApplicationArea,
            variables: { input: applicationArea },
        });

        return data;
    } catch (error) {
        console.error(error);
    }
}

const update = async (applicationArea: any) => {
    try {
        const data = await client.graphql({
            query: updateApplicationArea,
            variables: { input: applicationArea },
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