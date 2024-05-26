import { listProducts, getProduct } from '@/graphql/queries';
import { createProduct, updateProduct, deleteProduct } from '@/graphql/mutations';
import { client } from '@/repository';
import type { Product } from '@/API';


const getAllProducts = async () => {
    try {
        const { data } = await client.graphql({ query: listProducts });
        return data.listProducts.items
    } catch (error) {
        console.error(error);
    }
}

const getProductById = async (id: string) => {
    try {
        const { data } = await client.graphql({
            query: getProduct,
            variables: { id },
        });

        return data;
    } catch (error) {
        console.error(error);
    }
}

const create = async (request: Product) => {
    try {
        const data = await client.graphql({
            query: createProduct,
            variables: { input: request },
        });

        return data;
    } catch (error) {
        console.error(error);
    }
}

const update = async (request: Product) => {
    try {
        const data = await client.graphql({
            query: updateProduct,
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
            query: deleteProduct,
            variables: { input: { id } },
        });

        return data;
    } catch (error) {
        console.error(error);
    }
}


export {
    getAllProducts,
    getProductById,
    create,
    update,
    softDelete
}