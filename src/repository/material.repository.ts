import { listMaterials, getMaterial } from '@/graphql/queries';
import { createMaterial, updateMaterial, deleteMaterial } from '@/graphql/mutations';
import { client } from '@/repository';
import type { Material } from '@/API';

const getAllMaterials = async () => {
    try {
        const { data } = await client.graphql({ query: listMaterials });
        return data.listMaterials.items
    } catch (error) {
        console.error(error);
    }
}

const getMaterialById = async (id: string) => {
    try {
        const { data } = await client.graphql({
            query: getMaterial,
            variables: { id },
        });

        return data;
    } catch (error) {
        console.error(error);
    }
}

const create = async (request: Material) => {
    try {
        const data = await client.graphql({
            query: createMaterial,
            variables: { input: request },
        });

        return data;
    } catch (error) {
        console.error(error);
    }
}

const update = async (request: Material) => {
    try {
        const data = await client.graphql({
            query: updateMaterial,
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
            query: deleteMaterial,
            variables: { input: { id } },
        });

        return data;
    } catch (error) {
        console.error(error);
    }
}


export {
    getAllMaterials,
    getMaterialById,
    create,
    update,
    softDelete
}