import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '@/API';

interface ProductFormState {
    products: Product[];
    productForm: {
        id?: string;
        name: string;
        brandID?: string;
        isActive: boolean;
    }
    errors: {
        name?: string;
    };
}

const initialState: ProductFormState = {
    products: [],
    productForm: {
        name: '',
        isActive: false,
        brandID: '',
    },
    errors: {}
};

const isValidName = (name: string): boolean => {
    return typeof name === 'string' && name.trim().length >= 3 && name !== '';
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
            state.errors = {};
        },

        handleFormChange: (state, action: PayloadAction<{ key: string, value: string | boolean | string[] }>) => {
            const { key, value } = action.payload;
            switch (key) {
                case 'name':
                    if (isValidName(value as string)) {
                        state.productForm.name = value as string;
                        delete state.errors.name;
                    } else {
                        state.errors.name = 'Ürün adı zorunludur ve 3 harften fazla olmalıdır';
                    }
                    break;
                case 'brandID':
                    state.productForm.brandID = value as string
                    break;
                case 'isActive':
                    state.productForm.isActive = value as boolean
                    break;
                case 'id':
                    state.productForm.id = value as string
                    break;
                default:
                    break;
            }
        },

        resetProductFormValues: (state) => {
            state.productForm = {
                name: '',
                isActive: false,
                brandID: '',
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