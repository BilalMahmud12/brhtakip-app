import { listStores, getStore } from '@/graphql/queries';
import { createStore, updateStore, deleteStore } from '@/graphql/mutations';
import { client } from '@/repository';
import type { Store } from '@/API';

const getAllStores = async () => {
    try {
        const { data } = await client.graphql({ query: listStores });
        return data.listStores.items
    } catch (error) {
        console.error(error);
    }
}

const getStoreById = async (id: string) => {
    try {
        const { data } = await client.graphql({
            query: getStore,
            variables: { id },
        });

        return data;
    } catch (error) {
        console.error(error);
    }
}

const create = async (store: any) => {
    try {
        const data = await client.graphql({
            query: createStore,
            variables: { input: store },
        });

        return data;
    } catch (error) {
        console.error(error);
    }
}

const update = async (store: any) => {
    try {
        const data = await client.graphql({
            query: updateStore,
            variables: { input: store },
        });

        return data;
    } catch (error) {
        console.error(error);
    }
}

const softDelete = async (id: string) => {
    try {
        const data = await client.graphql({
            query: deleteStore,
            variables: { input: { id } },
        });

        return data;
    } catch (error) {
        console.error(error);
    }
}

export {
    getAllStores,
    getStoreById,
    create,
    update,
    softDelete
}