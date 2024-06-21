import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { 
    ClientProfile as ClientProfileType,
    UserProfile as UserProfileType, 
} from '@/API'

type ClientProfile = Omit<ClientProfileType, '__typename'>
type UserProfile = Omit<UserProfileType, '__typename'>

interface GlobalState {
    isFetching: boolean;
    currentPageTitle: string;
    currentClientProfile: ClientProfile;
    currentUserProfile: UserProfile;
}

const initialState: GlobalState = {
    isFetching: false,
    currentPageTitle: '',
    currentClientProfile: {
        id: '',
        name: '',
        isActive: false,
        createdAt: '',
        updatedAt: '',
    },
    currentUserProfile: {
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

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setIsFetching: (state, action: PayloadAction<boolean>) => {
            state.isFetching = action.payload
        },
        setCurrentPageTitle: (state, action: PayloadAction<string>) => {
            state.currentPageTitle = action.payload
        },
        setCurrentClientProfile: (state, action: PayloadAction<ClientProfile>) => {
            state.currentClientProfile = action.payload
        },
        setCurrentUserProfile: (state, action: PayloadAction<UserProfile>) => {
            state.currentUserProfile = action.payload
        },
    }
})

export const { 
    setIsFetching, 
    setCurrentPageTitle, 
    setCurrentClientProfile,
    setCurrentUserProfile, 
} = globalSlice.actions
export default globalSlice.reducer
