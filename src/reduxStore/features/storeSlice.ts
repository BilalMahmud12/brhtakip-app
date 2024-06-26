import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Store } from '@/API';


interface StoreFormState {
    stores: Store[];
    storeForm: {
        id?: string;
        cityID: string;
        districtID: string;
        areaID: string;
        name: string;
        address?: string;
        phones?: string;
        email?: string;
        notes?: string;
        created_by?: string;
        updated_by?: string;
    }
}

const initialState: StoreFormState = {
    stores: [],
    storeForm: {
        cityID: '',
        districtID: '',
        areaID: '',
        name: '',
        address: '',
        phones: '',
        email: '',
        notes: '',
        created_by: '',
        updated_by: '',
    }
}

const storeSlice = createSlice({
    name: 'store',
    initialState,
    reducers: {
        setStores: (state, action: PayloadAction<Store[]>) => {
            state.stores = action.payload
        },

        addStore: (state, action: PayloadAction<Store>) => {
            state.stores.push(action.payload)
        },

        setStoreForm: (state, action: PayloadAction<StoreFormState['storeForm']>) => {
            state.storeForm = action.payload
        },

        resetFormValues: (state) => {
            state.storeForm = {
                cityID: '',
                districtID: '',
                areaID: '',
                name: '',
                address: '',
                phones: '',
                email: '',
                notes: '',
                created_by: '',
                updated_by: '',
            }
        },

        handleFormChange: (state, action: PayloadAction<{ key: string, value: string | string[] }>) => {
            const { key, value } = action.payload
            switch (key) {
                case 'cityID':
                    state.storeForm.cityID = value as string
                    break;
                case 'districtID':
                    state.storeForm.districtID = value as string
                    break;
                case 'areaID':
                    state.storeForm.areaID = value as string
                    break;
                case 'name':
                    state.storeForm.name = value as string
                    break;
                case 'address':
                    state.storeForm.address = value as string
                    break;
                case 'phones':
                    state.storeForm.phones = value as string
                    break;
                case 'email':
                    state.storeForm.email = value as string
                    break;
                case 'notes':
                    state.storeForm.notes = value as string
                    break;
                default:
                    break;
            }
        }
    },
})

export const {
    setStores,
    addStore,
    setStoreForm,
    resetFormValues,
    handleFormChange,
} = storeSlice.actions

export default storeSlice.reducer