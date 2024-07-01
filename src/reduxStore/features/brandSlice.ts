import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Brand } from '@/API';

const requiredInputs = ['name', 'clientprofileID'];

interface BrandFormState {
    brands: Brand[];
    brandForm: {
        id?: string;
        name: string;
        isActive: boolean;
        clientprofileID?: string;
        [key: string]: string | boolean | string[] | undefined;
    }
    validationErrors: {
        name?: string | null;
        clientprofileID?: string | null;
    }
}

const initialState: BrandFormState = {
    brands: [],
    brandForm: {
        name: '',
        clientprofileID: '',
        isActive: false
    },
    validationErrors: {
        name: null,
        clientprofileID: null
    }
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
                        state.validationErrors.name = null;
                    } else {
                        state.validationErrors.name = 'Marka adı zorunludur ve 3 harften fazla olmalıdır';
                    }
                    break;
                case 'isActive':
                    state.brandForm.isActive = value as boolean;
                    break;
                case 'clientprofileID':
                    state.brandForm.clientprofileID = value as string;
                    state.validationErrors.clientprofileID = null;
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
            state.validationErrors = {};
        },
        setBrandFormValues(state, action: PayloadAction<BrandFormState['brandForm']>) {
            state.brandForm = action.payload;
            state.validationErrors = {};
        },
        validateForm: (state) => {
            Object.keys(state.brandForm).forEach((key) => {
                if (requiredInputs.includes(key) && !state.brandForm[key]) {
                    state.validationErrors = {
                        ...state.validationErrors,
                        [key]: key === 'name' ? 'Bu alan zorunludur ve 3 harften fazla olmalıdır' : 'Bu alan zorunludur'
                    };
                }
            })
        }
    }
});

export const {
    setBrands,
    addBrand,
    setBrandFormValues,
    handleFormChange,
    resetFormValues,
    validateForm
} = brandSlice.actions;

export default brandSlice.reducer;
