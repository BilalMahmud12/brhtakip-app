import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '@/API';

interface ProductFormState {
    products: Product[];
    productForm: {
        id?: string;
        name?: string;
        brandID?: string;
        isActive?: boolean;
    }
}

const initialState: ProductFormState = {
    products: [],
    productForm: {
        name: '',
        isActive: false,
    }
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload;
        },

        addProduct: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload);
        },

        setProductFormValues: (state, action: PayloadAction<ProductFormState['productForm']>) => {
            state.productForm = action.payload;
        },

        handleFormChange: (state, action: PayloadAction<{ key: string, value: string | boolean | string[] }>) => {
            const { key, value } = action.payload;
            switch (key) {
                case 'name':
                    state.productForm.name = value as string
                    break;
                case 'brandID':
                    state.productForm.brandID = value as string
                    break;
                case 'isActive':
                    state.productForm.isActive = value as boolean
                    break;
                default:
                    break;
            }
        },

        resetProductFormValues: (state) => {
            state.productForm = {
                name: '',
                isActive: false,
            };
        },
    }
});

export const {
    setProducts,
    addProduct,
    setProductFormValues,
    handleFormChange,
    resetProductFormValues,

} = productSlice.actions;

export default productSlice.reducer