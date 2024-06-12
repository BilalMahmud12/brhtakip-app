import { listUserProfiles, getUserProfile } from '@/graphql/queries';
import {  } from '@/graphql/mutations';
import { client } from '@/repository';

const getAllUsers = async () => {
    try {
        const { data } = await client.graphql({ 
            query: listUserProfiles,
            variables: { 
                limit: 5 
            },
        });
        return data.listUserProfiles.items;
    } catch (error) {
        console.error(error);
    }
}

const getUserProfileById = async (id: string) => {
    try {
        const { data } = await client.graphql({
            query: listUserProfiles,
            variables: { 
                filter: { cognitoID: { eq: id } }
            },
        });

        return data.listUserProfiles.items[0];
    } catch (error) {
        console.error(error);
    }
}

export {
    getAllUsers,
    getUserProfileById,
}