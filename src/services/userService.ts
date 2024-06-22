import * as Repo from '@/repository/index';
import { AppDispatch } from '@/reduxStore/store';
import { getCurrentUserId } from './authService';
import { setCurrentClientProfile, setCurrentUserProfile } from '@/reduxStore/features/globalSlice';

export const loadUserData = async (dispatch: AppDispatch): Promise<boolean> => {
    try {
        const userId = await getCurrentUserId();

        if (!userId) {
            throw new Error("User not authenticated");
        }

        const userProfile = await Repo.UserRepository.getUserProfileById(userId);

        if (!userProfile) {
            throw new Error("User profile not found");
        }
    
        const { __typename, ...cleanUserProfile } = userProfile
        dispatch(setCurrentUserProfile(cleanUserProfile));

        if (userProfile.clientprofileID !== 'BRH_ADMIN') {
            const clientProfile = await Repo.ClientProfileRepository.getClientProfileById(userProfile.clientprofileID as string);
            if (clientProfile) {
                //dispatch(setCurrentClientProfile(clientProfile));
            }
        }

        return true;
    } catch (error) {
        console.error("Error loading user data:", error);
        return false;
    }
}