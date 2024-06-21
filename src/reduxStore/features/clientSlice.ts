import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ClientProfile } from '@/API'

interface GlobalState {
    isFetching: boolean;
    clientProfiles: ClientProfile[]
}

const initialState: GlobalState = {
    isFetching: false,
    clientProfiles: []
}

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setIsFetching: (state, action: PayloadAction<boolean>) => {
            state.isFetching = action.payload
        },
        setClientProfiles: (state, action: PayloadAction<ClientProfile[]>) => {
            state.clientProfiles = action.payload
        },
        addClientProfile: (state, action: PayloadAction<ClientProfile>) => {
            state.clientProfiles.push(action.payload)
        },
        removeClientProfile: (state, action: PayloadAction<string>) => {
            state.clientProfiles = state.clientProfiles.filter(clientProfile => clientProfile.id !== action.payload)
        }
    }
})

export const { 
    setIsFetching,
    setClientProfiles,
    addClientProfile,
    removeClientProfile 
} = globalSlice.actions
export default globalSlice.reducer