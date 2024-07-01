import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ClientProfile } from '@/API'

const requiredInputs = [];

interface GlobalState {
    isFetching: boolean;
    clientProfiles: ClientProfile[]
    clientProfileForm: {
        id?: string,
        isActive?: boolean,
        name?: string,
        rootUserId?: string,
        contactEmail?: string | null,
        contactPhone?: string,
        address?: string,
    }
}

const initialState: GlobalState = {
    isFetching: false,
    clientProfiles: [],
    clientProfileForm: {
        name: '',
        isActive: false,
        rootUserId: '',
        contactEmail: '',
    }
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
        },

        setClientProfileForm: (state, action: PayloadAction<GlobalState['clientProfileForm']>) => {
            state.clientProfileForm = action.payload
        },

        resetClientForm: (state) => {
            state.clientProfileForm = {
                name: '',
                isActive: false,
                rootUserId: '',
                contactEmail: '',
            }
        },

        handleFormChange: (state, action: PayloadAction<{ key: string, value: string | boolean | string[] }>) => {
            const { key, value } = action.payload
            switch (key) {
                case 'name':
                    state.clientProfileForm.name = value as string
                    break
                case 'isActive':
                    state.clientProfileForm.isActive = value as boolean
                    break
                case 'rootUserId':
                    state.clientProfileForm.rootUserId = value as string
                    break
                case 'contactEmail':
                    state.clientProfileForm.contactEmail = value as string
                    break
                case 'contactPhone':
                    state.clientProfileForm.contactPhone = value as string
                    break
                case 'address':
                    state.clientProfileForm.address = value as string
                    break
                default:
                    break
            }
        }
    }
})

export const {
    setIsFetching,
    setClientProfiles,
    addClientProfile,
    removeClientProfile,
    resetClientForm,
    handleFormChange,
    setClientProfileForm
} = globalSlice.actions
export default globalSlice.reducer


/*
    id?: string | null,

    isActive?: boolean | null,
    name?: string | null,
    rootUserId?: string | null,
    contactEmail?: string | null,
    contactPhone?: string | null,
    address?: string | null,
*/