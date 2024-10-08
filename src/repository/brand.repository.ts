import { getBrand, listBrands } from '@/graphql/queries';
import { createBrand, updateBrand, deleteBrand } from '@/graphql/mutations';
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

const create = async (brand: any) => {
    const required = ['name', 'clientprofileID'];
    if (required.some((key) => !brand[key])) {
        throw new Error('Required fields are missing');
    }
    
    try {
        const data = await client.graphql({
            query: createBrand,
            variables: { input: brand },
        });

        return data;
    } catch (error) {
        console.error(error);
    }
}

const update = async (brand: any) => {

    try {
        const data = await client.graphql({
            query: updateBrand,
            variables: { input: { ...brand } }
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