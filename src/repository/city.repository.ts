import { listCities, getCity } from '@/graphql/queries';
import { createCity, updateCity, deleteCity } from '@/graphql/mutations';
import { client } from '@/repository';
import type { City } from '@/API';

const getAllCities = async () => {
    try {
        const { data } = await client.graphql({ query: listCities });
        return data.listCities.items
    } catch (error) {
        console.error(error);
    }
}

const getCityById = async (id: string) => {
    try {
        const { data } = await client.graphql({
            query: getCity,
            variables: { id },
        });

        return data;
    } catch (error) {
        console.error(error);
    }
}

const create = async (city: any) => {
    const required = ['name'];
    if (required.some((key) => !city[key])) {
        throw new Error('Required fields are missing');
    }
    try {
        const data = await client.graphql({
            query: createCity,
            variables: { input: city },
        });

        return data;
    } catch (error) {
        console.error(error);
    }
}

const update = async (city: any) => {
    try {
        const data = await client.graphql({
            query: updateCity,
            variables: { input: { ...city } },
        });

        return data;
    } catch (error) {
        console.error(error);
    }
}

const softDelete = async (id: string) => {
    try {
        const data = await client.graphql({
            query: deleteCity,
            variables: { input: { id } },
        });

        return data;
    } catch (error) {
        console.error(error);
    }
}

export {
    getAllCities,
    getCityById,
    create,
    update,
    softDelete
}