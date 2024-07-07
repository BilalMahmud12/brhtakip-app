import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ExtraProduct } from '@/API';
import { isValidKey } from '@/utils/helpers';

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

        handleFormChange(state, action: PayloadAction<{ key: string, value: any }>) {
            const { key, value } = action.payload;

            if (isValidKey(key, state.extraProductsForm)) {
                state.extraProductsForm = {
                    ...state.extraProductsForm,
                    [key]: value
                }
            } else {
                console.warn(`Invalid key: ${key}`);
            }
        },
    },
});

export const {
    setExtraProducts,
    setExtraProductsForm,
    resetFormValues,
    handleFormChange
} = extraProductSlice.actions;
export default extraProductSlice.reducer