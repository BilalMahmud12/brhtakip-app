import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ClientProfile as ClientProfileType } from '@/API'

type ClientProfile = Omit<ClientProfileType, '__typename'>

interface GlobalState {
    isFetching: boolean;
    currentPageTitle: string;
    currentClientProfile: ClientProfile;
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
    }
})

export const { setIsFetching, setCurrentPageTitle, setCurrentClientProfile } = globalSlice.actions
export default globalSlice.reducer
