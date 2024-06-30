import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Store } from '@/API';
const requiredInputs = ['name', 'cityID', 'districtID', 'areaID', 'address'];
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
        [key: string]: string | boolean | string[] | undefined;
    };
    validationErrors: {
        name?: string | null;
        cityID?: string | null;
        districtID?: string | null;
        areaID?: string | null;
        address?: string | null;
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
        created_by: '',
        updated_by: '',
    },
    validationErrors: {
        name: null,
        cityID: null,
        districtID: null,
        areaID: null,
        address: null,
    },
};

const isValidName = (name: string): boolean => {
    return typeof name === 'string' && name.trim().length >= 3 && name !== '';
};


const storeSlice = createSlice({
    name: 'store',
    initialState,
    reducers: {
        setStores: (state, action: PayloadAction<Store[]>) => {
            state.stores = action.payload;
        },
        addStore: (state, action: PayloadAction<Store>) => {
            state.stores.push(action.payload);
        },
        setStoreForm: (state, action: PayloadAction<StoreFormState['storeForm']>) => {
            state.storeForm = action.payload;
        },
        resetFormValues: (state) => {
            state.storeForm = {
                cityID: '',
                districtID: '',
                areaID: '',
                name: '',
                address: '',
                created_by: '',
                updated_by: '',
            };
            state.validationErrors = {};
        },
        handleFormChange: (state, action: PayloadAction<{ key: string, value: string | string[] }>) => {
            const { key, value } = action.payload;
            switch (key) {
                case 'name':
                    if (isValidName(value as string)) {
                        state.storeForm.name = value as string;
                        state.validationErrors.name = null;
                    } else {
                        state.validationErrors.name = 'Bu alan zorunludur ve 3 harften fazla olmalıdır.'
                    }
                    break;
                case 'cityID':
                    state.storeForm.cityID = value as string;
                    state.validationErrors.cityID = null;
                    break;
                case 'districtID':
                    state.storeForm.districtID = value as string;
                    state.validationErrors.districtID = null;
                    break;
                case 'areaID':
                    state.storeForm.areaID = value as string;
                    state.validationErrors.areaID = null;
                    break;
                case 'address':
                    state.storeForm.address = value as string;
                    state.validationErrors.address = null;
                    break;
                case 'email':
                    state.storeForm.email = value as string;
                    break;
                case 'phones':
                    state.storeForm.phones = value as string;
                    break;
                case 'notes':
                    state.storeForm.notes = value as string;
                    break;
                default:
                    break;
            }
        },
        validateForm: (state) => {
            Object.keys(state.storeForm).forEach((key) => {
                if (requiredInputs.includes(key) && !state.storeForm[key]) {
                    state.validationErrors = {
                        ...state.validationErrors,
                        [key]: key === 'name' ? 'Bu alan zorunludur ve 3 harften fazla olmalıdır' : 'Bu alan zorunludur',
                        [key]: key === 'cityID',
                        [key]: key === 'areaID',
                        [key]: key === 'districtID',
                        [key]: key === 'address' ? 'Bu alan zorunludur' : 'Bu alan zorunludur'
                    };
                }
            })
        }
    },
});

export const {
    setStores,
    addStore,
    setStoreForm,
    resetFormValues,
    handleFormChange,
    validateForm,
} = storeSlice.actions;

export default storeSlice.reducer;
