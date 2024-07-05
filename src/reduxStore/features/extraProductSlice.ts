import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ExtraProduct } from '@/API';

export type ImageStorage = {
    type: string;
    path: string;
}
interface ExtraProductState {
    extraProducts: ExtraProduct[];
    extraProductsForm: {
        id?: string;
        name?: string;
        isActive?: boolean;
        images?: ImageStorage[];
    }
}

const initialState: ExtraProductState = {
    extraProducts: [],
    extraProductsForm: {
        name: '',
        isActive: false,
        images: [],
    },
};

const extraProductSlice = createSlice({
    name: 'extraProduct',
    initialState,
    reducers: {
        setExtraProducts: (state, action: PayloadAction<ExtraProduct[]>) => {
            state.extraProducts = action.payload;
        },
        setExtraProductsForm: (state, action: PayloadAction<ExtraProductState['extraProductsForm']>) => {
            state.extraProductsForm = action.payload;
        },

        resetFormValues: (state) => {
            state.extraProductsForm = {
                name: '',
                isActive: false,
                images: [],
            };
        },

        handleFormChange: (state, action: PayloadAction<{ key: string, value: string | boolean | string[] }>) => {
            const { key, value } = action.payload;
            switch (key) {
                case 'name':
                    state.extraProductsForm.name = value as string;
                    break;
                case 'isActive':
                    state.extraProductsForm.isActive = value as boolean;
                    break;
                case 'images':
                    state.extraProductsForm.images = value as [];
                    break;
                default:
                    break;
            }
        }
    },
});

export const {
    setExtraProducts,
    setExtraProductsForm,
    resetFormValues,
    handleFormChange
} = extraProductSlice.actions;
export default extraProductSlice.reducer