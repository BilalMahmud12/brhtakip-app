import { client } from '.';
import { listDistricts, getDistrict } from '@/graphql/queries'
import { createDistrict, updateDistrict, deleteDistrict } from '@/graphql/mutations'


const getAllDistricts = async () => {
    try {
        const { data } = await client.graphql({ query: listDistricts });
        return data.listDistricts.items
    } catch (error) {
        console.error(error);
    }
}

const getDistrictById = async (id: string) => {
    try {
        const { data } = await client.graphql({
            query: getDistrict,
            variables: { id },
        });

        return data;
    } catch (error) {
        console.error(error);
    }
}

const create = async (district: any) => {
    const required = ['name'];
    if (required.some((key) => !district[key])) {
        throw new Error('Required fields are missing');
    }
    try {
        const data = await client.graphql({
            query: createDistrict,
            variables: { input: { ...district } },
        });

        return data;
    } catch (error) {
        console.error(error);
    }
}


const update = async (district: any) => {
    try {
        const data = await client.graphql({
            query: updateDistrict,
            variables: { input: { ...district } },
        });

        return data;
    } catch (error) {
        console.error(error);
    }
}

const softDelete = async (id: string) => {
    try {
        const data = await client.graphql({
            query: deleteDistrict,
            variables: { input: { id } },
        });

        return data;
    } catch (error) {
        console.error(error);
    }
}


export {
    getAllDistricts,
    getDistrictById,
    create,
    update,
    softDelete
}