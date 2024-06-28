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
    };
    errors: {
        name?: string;
        address?: string;
        email?: string;
        phones?: string;
    };
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
    },
    errors: {},
};

const isValid = (field: string, value: string): boolean => {
    switch (field) {
        case 'name':
            return typeof value === 'string' && value.trim().length >= 3;
        case 'address':
            return typeof value === 'string' && value.trim().length >= 3;
        case 'email':
            return typeof value === 'string' && /\S+@\S+\.\S+/.test(value);
        case 'phones':
            return typeof value === 'string' && /^(\+90|0)?[5-9]\d{9}$/.test(value);
        default:
            return true;
    }
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
                phones: '',
                email: '',
                notes: '',
                created_by: '',
                updated_by: '',
            };
            state.errors = {};
        },
        handleFormChange: (state, action: PayloadAction<{ key: string, value: string | string[] }>) => {
            const { key, value } = action.payload;
            switch (key) {
                case 'cityID':
                    state.storeForm.cityID = value as string;
                    break;
                case 'districtID':
                    state.storeForm.districtID = value as string;
                    break;
                case 'areaID':
                    state.storeForm.areaID = value as string;
                    break;
                case 'name':
                    if (isValid('name', value as string)) {
                        state.storeForm.name = value as string;
                        delete state.errors.name;
                    } else {
                        state.errors.name = 'Magaza adı zorunludur ve 3 harften fazla olmalıdır.';
                    }
                    break;
                case 'address':
                    if (isValid('address', value as string)) {
                        state.storeForm.address = value as string;
                        delete state.errors.address;
                    } else {
                        state.errors.address = 'Adres zorunludur ve 3 harften fazla olmalıdır.';
                    }
                    break;
                case 'email':
                    if (isValid('email', value as string)) {
                        state.storeForm.email = value as string;
                        delete state.errors.email;
                    } else {
                        state.errors.email = 'Geçerli bir e-posta adresi gereklidir.';
                    }
                    break;
                case 'phones':
                    if (isValid('phones', value as string)) {
                        state.storeForm.phones = value as string;
                        delete state.errors.phones;
                    } else {
                        state.errors.phones = 'Geçerli bir Türk telefon numarası gereklidir.';
                    }
                    break;
                case 'notes':
                    state.storeForm.notes = value as string;
                    break;
                default:
                    break;
            }
        },
    },
});

export const {
    setStores,
    addStore,
    setStoreForm,
    resetFormValues,
    handleFormChange,
} = storeSlice.actions;

export default storeSlice.reducer;
