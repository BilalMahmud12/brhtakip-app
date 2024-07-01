import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '@/API';

const requiredInputs = ['name'];

interface ProductFormState {
    products: Product[];
    productForm: {
        id?: string;
        name: string;
        brandID?: string;
        isActive: boolean;
        [key: string]: string | boolean | string[] | undefined;
    }
    validationErrors: {
        name?: string | null;
    };
}

const initialState: ProductFormState = {
    products: [],
    productForm: {
        name: '',
        isActive: false,
        brandID: '',
    },
    validationErrors: {
        name: null,
    }
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
            state.validationErrors = {};
        },

        handleFormChange: (state, action: PayloadAction<{ key: string, value: string | boolean | string[] }>) => {
            const { key, value } = action.payload;
            switch (key) {
                case 'name':
                    if (isValidName(value as string)) {
                        state.productForm.name = value as string;
                        state.validationErrors.name = null;
                    } else {
                        state.validationErrors.name = 'Ürün adı zorunludur ve 3 harften fazla olmalıdır';
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

        validateForm: (state) => {
            Object.keys(state.productForm).forEach((key) => {
                if (requiredInputs.includes(key) && !state.productForm[key]) {
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
    setProducts,
    addProduct,
    setProductFormValues,
    handleFormChange,
    resetProductFormValues,
    validateForm,

} = productSlice.actions;

export default productSlice.reducer