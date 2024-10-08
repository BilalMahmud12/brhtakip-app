import { getExtraProduct, listExtraProducts } from '@/graphql/queries';
import { createExtraProduct, updateExtraProduct, deleteExtraProduct } from '@/graphql/mutations';
import { client } from '@/repository';

const getAllExtraProducts = async () => {
    try {
        const { data } = await client.graphql({ query: listExtraProducts });
        return data.listExtraProducts.items;
    } catch (error) {
        console.error(error);
    }
}

const getExtraProductById = async (id: string) => {
    try {
        const { data } = await client.graphql({
            query: getExtraProduct,
            variables: { id },
        });

        return data;
    } catch (error) {
        console.error(error);
    }
}

const create = async (extraProduct: any) => {
    try {
        const data = await client.graphql({
            query: createExtraProduct,
            variables: { input: extraProduct },
        });

        return data;
    } catch (error) {
        console.error(error);
    }
}

const update = async (extraProduct: any) => {
    try {
        const data = await client.graphql({
            query: updateExtraProduct,
            variables: { input: extraProduct },
        });

        return data;
    } catch (error) {
        console.error(error);
    }
}

const softDelete = async (id: string) => {
    try {
        const data = await client.graphql({
            query: deleteExtraProduct,
            variables: { input: { id } },
        });

        return data;
    } catch (error) {
        console.error(error);
    }
}

export {
    getAllExtraProducts,
    getExtraProductById,
    create,
    update,
    softDelete,
}


