import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ClientProfile } from '@/API'

const requiredInputs = ['name', 'contactEmail']; // Add 'rootUserId'

interface GlobalState {
    isFetching: boolean;
    clientProfiles: ClientProfile[]
    clientProfileForm: {
        id?: string,
        isActive?: boolean,
        name?: string,
        rootUserId?: string,
        contactEmail?: string,
        contactPhone?: string,
        address?: string,
        [key: string]: string | boolean | string[] | undefined;
    }
    validationErrors: {
        name?: string | null,
        rootUserId?: string | null,
        contactEmail?: string | null,
    }
}

const initialState: GlobalState = {
    isFetching: false,
    clientProfiles: [],
    clientProfileForm: {
        name: '',
        isActive: false,
        // rootUserId: '',
        contactEmail: '',
    },
    validationErrors: {
        name: null,
        // rootUserId: null,
        contactEmail: null,
    }
}

const isValidName = (name: string): boolean => {
    return typeof name === 'string' && name.trim().length >= 3 && name !== ''
}

const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};


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
            state.validationErrors = {};
        },

        resetClientForm: (state) => {
            state.clientProfileForm = {
                name: '',
                isActive: false,
                // rootUserId: '',
                contactEmail: '',
            }
            state.validationErrors = {};
        },

        handleFormChange: (state, action: PayloadAction<{ key: string, value: string | boolean | string[] }>) => {
            const { key, value } = action.payload
            switch (key) {
                case 'name':
                    if (isValidName(value as string)) {
                        state.clientProfileForm.name = value as string;
                        state.validationErrors.name = null;
                    }
                    break
                case 'isActive':
                    state.clientProfileForm.isActive = value as boolean
                    break
                case 'rootUserId':
                    state.clientProfileForm.rootUserId = value as string
                    break
                case 'contactEmail':
                    if (isValidEmail(value as string)) {
                        state.clientProfileForm.contactEmail = value as string;
                        state.validationErrors.contactEmail = null;
                    }
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
        },

        validateForm: (state) => {
            Object.keys(state.clientProfileForm).forEach((key) => {
                if (requiredInputs.includes(key) && !state.clientProfileForm[key]) {
                    state.validationErrors = {
                        ...state.validationErrors,
                        [key]: key === 'name' ? 'Bu alan zorunludur ve 3 harften fazla olmalıdır' : 'Bu alan zorunludur',
                        [key]: key === 'contactEmail' ? 'Bu alan zorunludur' : 'Bu alan zorunludur'
                    }
                }
            })
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
    setClientProfileForm,
    validateForm

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