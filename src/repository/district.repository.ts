import { client } from '.';
import { listDistricts, getDistrict } from '@/graphql/queries'
import { createDistrict, updateDistrict, deleteDistrict } from '@/graphql/mutations'
import type { District } from '@/API'


const getAllDistricts = async () => {
    try {
        const { data } = await client.graphql({ query: listDistricts });
        return data.listDistricts
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
    try {
        const data = await client.graphql({
            query: createDistrict,
            variables: { input: district },
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
            variables: { input: district },
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