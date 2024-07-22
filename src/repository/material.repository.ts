/* eslint-disable @typescript-eslint/no-explicit-any */
import { listMaterials, getMaterial } from '@/graphql/queries';
import { createMaterial, updateMaterial, deleteMaterial } from '@/graphql/mutations';
import { client } from '@/repository';


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

const create = async (material: any) => {
    const required = ['name'];
    if (required.some((key) => !material[key])) {
        throw new Error('Required fields are missing');
    }
    try {
        const data = await client.graphql({
            query: createMaterial,
            variables: { input: material },
        });

        return data;
    } catch (error) {
        console.error(error);
    }
}

const update = async (material: any) => {
    try {
        const data = await client.graphql({
            query: updateMaterial,
            variables: { input: material },
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


// if (!material.name || material.name.trim() === "") {
//     console.error("Brand name cannot be empty.");
//     return;
// }
// if (!material.clientprofileID || material.clientprofileID.trim() === "") {
//     console.error("Brand clientprofileID cannot be empty.");
//     return;
// }