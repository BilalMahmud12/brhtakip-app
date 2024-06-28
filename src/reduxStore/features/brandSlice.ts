import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Brand } from '@/API';

interface BrandFormState {
    brands: Brand[];
    brandForm: {
        id?: string;
        name: string;
        isActive: boolean;
        clientprofileID?: string;
    };
    errors: {
        name?: string;
    };
}

const initialState: BrandFormState = {
    brands: [],
    brandForm: {
        name: '',
        clientprofileID: '',
        isActive: false
    },
    errors: {}
};

const isValidName = (name: string): boolean => {
    return typeof name === 'string' && name.trim().length >= 3 && name !== '';
};

const brandSlice = createSlice({
    name: 'brand',
    initialState,
    reducers: {
        setBrands: (state, action: PayloadAction<Brand[]>) => {
            state.brands = action.payload;
        },

        addBrand: (state, action: PayloadAction<Brand>) => {
            state.brands.push(action.payload);
        },

        handleFormChange: (state, action: PayloadAction<{ key: string, value: string | boolean | string[] }>) => {
            const { key, value } = action.payload;
            switch (key) {
                case 'name':
                    if (isValidName(value as string)) {
                        state.brandForm.name = value as string;
                        delete state.errors.name;
                    } else {
                        state.errors.name = 'Marka adı zorunludur ve 3 harften fazla olmalıdır';
                    }
                    break;
                case 'isActive':
                    state.brandForm.isActive = value as boolean;
                    break;
                case 'clientprofileID':
                    state.brandForm.clientprofileID = value as string;
                    break;
                case 'id':
                    state.brandForm.id = value as string;
                    break;
                default:
                    break;
            }
        },
        resetFormValues: (state) => {
            state.brandForm = {
                name: '',
                clientprofileID: '',
                isActive: false
            };
            state.errors = {};
        },

        setBrandFormValues(state, action: PayloadAction<BrandFormState['brandForm']>) {
            state.brandForm = action.payload;
            state.errors = {};
        },
    }
});

export const {
    setBrands,
    addBrand,
    setBrandFormValues,
    handleFormChange,
    resetFormValues
} = brandSlice.actions;

export default brandSlice.reducer;
