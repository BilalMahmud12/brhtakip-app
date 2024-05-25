import { getBrand, listBrands } from '@/graphql/queries';
import { createBrand, updateBrand, deleteBrand } from '@/graphql/mutations';
import type { Brand } from '@/API';
import { client } from '@/repository';

const getAllBrands = async () => {
    try {
        const { data } = await client.graphql({ query: listBrands });
        return data.listBrands.items
    } catch (error) {
        console.error(error);
    }
}

const getBrandById = async (id: string) => {
    try {
        const { data } = await client.graphql({
            query: getBrand,
            variables: { id },
        });

        return data
    } catch (error) {
        console.error(error);
    }
}

const create = async (request: Brand) => {
    try {
        const data = await client.graphql({
            query: createBrand,
            variables: { input: request },
        });

        return data;
    } catch (error) {
        console.error(error);
    }
}

const update = async (request: Brand) => {
    try {
        const data = await client.graphql({
            query: updateBrand,
            variables: { input: request }
        });

        return data
    } catch (error) {
        console.error(error);
    }
}

const softDelete = async (id: string) => {
    try {
        const data = await client.graphql({
            query: deleteBrand,
            variables: { input: { id } }
        });

        return data
    } catch (error) {
        console.error(error);
    }
}

export {
    getAllBrands,
    getBrandById,
    create,
    update,
    softDelete,
}