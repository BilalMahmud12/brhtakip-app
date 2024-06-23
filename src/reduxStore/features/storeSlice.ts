import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Store } from '@/API';


interface StoreFormState {
    stores: Store[];
    storeForm: {
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

        handleFormChange: (state, action: PayloadAction<{ key: string, value: string }>) => {
            const { key, value } = action.payload
            switch (key) {
                case 'cityID':
                    state.storeForm.areaID = value as string
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
                // case 'phones':
                //     state.storeForm = {
                //         ...state.storeForm,
                //         phones: JSON.stringify([...state.storeForm.phones as unknown as string[], value as string])
                //     }
                //     break;
                // case 'email':
                //     state.storeForm = {
                //         ...state.storeForm,
                //         email: JSON.stringify([...state.storeForm.email as unknown as string[], value as string]),
                //     }
                //     break;
                // case 'notes':
                //     state.storeForm = {
                //         ...state.storeForm,
                //         notes: JSON.stringify([...state.storeForm.notes as unknown as string[], value as string]),
                //     }
                //     break;
                // case 'created_by':
                //     state.storeForm = {
                //         ...state.storeForm,
                //         created_by: value,
                //     }
                //     break;
                // case 'updated_by':
                //     state.storeForm = {
                //         ...state.storeForm,
                //         updated_by: value,
                //     }
                //     break;
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