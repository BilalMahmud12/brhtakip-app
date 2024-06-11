import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '@/API';

interface ProductFormState {
    products: Product[];
    productForm: {
        name?: string;
        brandID?: string;
        isActive?: boolean;
    }
}

const initialState: ProductFormState = {
    products: [],
    productForm: {
        name: '',
        brandID: '',
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

        handleFormChange: (state, action: PayloadAction<{ key: string, value: string }>) => {
            const { key, value } = action.payload;
            switch (key) {
                case 'name':
                    state.productForm = {
                        ...state.productForm,
                        name: value
                    }
                    break;
                case 'brandID':
                    state.productForm = {
                        ...state.productForm,
                        brandID: value,
                    }
                    break;
                case 'isActive':
                    state.productForm.isActive = value === '1' || value === 'true';
                    break;
                default:
                    state.productForm = {
                        ...state.productForm,
                        [key]: value,
                    }
                    break;
            }
        },

        resetProductFormValues: (state) => {
            state.productForm = {
                name: '',
                brandID: '',
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