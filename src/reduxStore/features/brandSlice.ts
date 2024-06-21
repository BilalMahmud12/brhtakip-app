import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Brand } from '@/API';

interface BrandFormState {
    brands: Brand[];
    brandForm: {
        id?: string;
        name: string;
        isActive: boolean;
        clientprofileID?: string;
    }
}

const initialState: BrandFormState = {
    brands: [],
    brandForm: {
        name: '',
        clientprofileID: '',
        isActive: false
    }
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

        setBrandFormValues: (state, action: PayloadAction<BrandFormState['brandForm']>) => {
            state.brandForm = action.payload
        },

        handleFormChange: (state, action: PayloadAction<{ key: string, value: string }>) => {
            const { key, value } = action.payload;
            switch (key) {
                case 'name':
                    state.brandForm = {
                        ...state.brandForm,
                        name: value,
                    }
                    break;
                case 'isActive':
                    state.brandForm.isActive = value === '1' || value === 'true';
                    break;
                case 'clientprofileID':
                    state.brandForm = {
                        ...state.brandForm,
                        clientprofileID: value,
                    }
                    break;

                default:
                    state.brandForm = {
                        ...state.brandForm,
                        [key]: value,
                    }
                    break;
            }
        },
        resetFormValues: (state) => {
            state.brandForm = {
                name: '',
                clientprofileID: '',
                isActive: false
            };
        }
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
