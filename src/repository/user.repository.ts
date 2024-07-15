import { listUserProfiles, getUserProfile } from '@/graphql/queries';
import { createUserProfile, updateUserProfile } from '@/graphql/mutations';
import { client } from '@/repository';
import { signUp, updatePassword, UpdatePasswordInput } from 'aws-amplify/auth';
import { uploadData } from 'aws-amplify/storage';

type SignUpParameters = {
    username: string;
    password: string;
    email: string;
    name: string;
};

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
    console.log("user update repo", user)
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

const signUserUp = async (
    {
        username,
        password,
        email,
        name
    }: SignUpParameters
) => {
    // const required = ['firstName', 'lastName', 'email'];
    // if (required.some((key) => !User[key])) {
    //     throw new Error('Required fields are missing');
    // }
    try {
        const { isSignUpComplete, userId, nextStep } = await signUp({
            username,
            password,
            options: {
                userAttributes: {
                    email,
                    name
                }
                // optional
                // autoSignIn: true // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
            }
        });

        return {
            isSignUpComplete,
            userId,
            nextStep
        }
    } catch (error) {
        console.error(error);
    }
}

const UpdatePassword = async ({ oldPassword, newPassword }: UpdatePasswordInput) => {
    try {
        await updatePassword({ oldPassword, newPassword });
    } catch (err) {
        console.log(err);
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

export {
    getAllUsers,
    getUserProfileById,
    create,
    signUserUp,
    update,
    UpdatePassword,
    uploadProfilePhoto
}