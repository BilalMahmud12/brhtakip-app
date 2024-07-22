/* eslint-disable @typescript-eslint/no-explicit-any */
import { CognitoIdentityProviderClient, AdminDeleteUserCommand } from '@aws-sdk/client-cognito-identity-provider';
import { listUserProfiles } from '@/graphql/queries';
import { createUserProfile, updateUserProfile } from '@/graphql/mutations';
import { client } from '@/repository';
import { signUp, updatePassword as updateCognitoPassword, UpdatePasswordInput } from 'aws-amplify/auth';
import { uploadData } from 'aws-amplify/storage';

type SignUpParameters = {
    username: string;
    password: string;
    email: string;
    name: string;
};

const sdkClient = new CognitoIdentityProviderClient({ region: 'us-east-1' });

const getAllUsers = async () => {
    try {
        const { data } = await client.graphql({
            query: listUserProfiles,
            variables: {
                limit: 100
            },
        });
        return data.listUserProfiles.items;
    } catch (error) {
        console.error(error);
    }
}

const getUsersByClient = async (clientID: string) => {
    try {
        const { data } = await client.graphql({
            query: listUserProfiles,
            variables: {
                limit: 100,
                filter: { clientprofileID: { eq: clientID } }
            }
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

const create = async (user: any) => {
    const required = ['firstName', 'lastName', 'email', 'role'];
    if (required.some((key) => !user[key])) {
        throw new Error('Required fields are missing');
    }
    try {
        const { data } = await client.graphql({
            query: createUserProfile,
            variables: { input: user },
        });

        return data.createUserProfile;
    } catch (error) {
        console.error(error);
    }
}

const update = async (user: any) => {
    try {
        const { data } = await client.graphql({
            query: updateUserProfile,
            variables: { input: user },
        });

        return data.updateUserProfile;
    } catch (error) {
        console.error(error);
    }
}

const uploadProfilePhoto = async (userId: string, file: File, onProgress: (progress: number) => void): Promise<string> => {
    try {
        const result = await uploadData({
            path: `public/users/${userId}/${file.name}`,
            data: file,
            options: {
                contentType: file.type,
                onProgress: ({ transferredBytes, totalBytes }) => {
                    if (totalBytes) {
                        const progress = Math.round((transferredBytes / totalBytes) * 100);
                        onProgress(progress);
                    }
                }
            }
        }).result;

        return result.path;
    } catch (error) {
        console.error('Error uploading profile photo:', error);
        throw error;
    }
};

const createCognitoAccount = async (data: SignUpParameters) => {
    const { username, password, email, name } = data;
    try {
        const { isSignUpComplete, userId, nextStep } = await signUp({
            username,
            password,
            options: {
                userAttributes: {
                    email,
                    name
                }
            }
        })

        return { isSignUpComplete, userId, nextStep };
    } catch (error) {
        console.error(error);
    }
}

const updatePassword = async ({ oldPassword, newPassword }: UpdatePasswordInput) => {
    try {
        await updateCognitoPassword({ oldPassword, newPassword });
    } catch (err) {
        console.log(err);
    }
}

const deleteCognitoAccount = async (username: string) => {
    const command = new AdminDeleteUserCommand({
        UserPoolId: 'us-east-1_4G7b8y1h5',
        Username: username
    });

    try {
        const result = await sdkClient.send(command);
        console.log('result', result);
    } catch (error) {
        console.error('error', error);
    }
}

export {
    getAllUsers,
    getUsersByClient,
    getUserProfileById,
    create,
    update,
    updatePassword,
    uploadProfilePhoto,
    createCognitoAccount,
    deleteCognitoAccount
}