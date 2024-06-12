import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { UserProfile as UserProfileType } from '@/API';

type UserProfile = Omit<UserProfileType, '__typename'>

interface UserState {
    isFetching: boolean;
    userProfile: UserProfile;
}

const initialState: UserState = {
    isFetching: false,
    userProfile: {
        id: '',
        cognitoID: '',
        clientprofileID: '',
        isActive: false,
        firstName: '',
        lastName: '',
        email: '',
        role: undefined,
        createdAt: '',
        updatedAt: '',
    },
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setIsFetching: (state, action: PayloadAction<boolean>) => {
            state.isFetching = action.payload
        },
        setUserProfile: (state, action: PayloadAction<UserProfile>) => {
            state.userProfile = action.payload
        },
    }
})

export const { setIsFetching, setUserProfile } = userSlice.actions
export default userSlice.reducer