import { getCurrentUser } from 'aws-amplify/auth'

export const getCurrentUserId = async (): Promise<string | null> => {
    const user = await getCurrentUser();
    return user?.userId || null;
}