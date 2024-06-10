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

const create = async (brand: any) => {
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
    // 
    if (!brand.id || brand.id.trim() === "") {
        console.error("Brand ID cannot be empty.");
        return;
    }
    // Add similar checks for other key attributes if needed
    if (!brand.name || brand.name.trim() === "") {
        console.error("Brand name cannot be empty.");
        return;
    }
    if (!brand.clientprofileID || brand.clientprofileID.trim() === "") {
        console.error("Brand clientprofileID cannot be empty.");
        return;
    }
    // 

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