import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Material } from '@/API';

const requiredInputs = ['name'];

interface MaterialState {
    materials: Material[];
    materialForm: {
        id?: string;
        name: string;
        isActive: boolean;
        [key: string]: string | boolean | string[] | undefined;
    }
    validationErrors: {
        name?: string | null;
    };
}

const initialState: MaterialState = {
    materials: [],
    materialForm: {
        name: '',
        isActive: false,
    },
    validationErrors: {
        name: null,
    }
}

const isValidName = (name: string): boolean => {
    return typeof name === 'string' && name.trim().length >= 3 && name !== '';
};

const materialSlice = createSlice({
    name: 'material',
    initialState,
    reducers: {
        setMaterials: (state, action: PayloadAction<Material[]>) => {
            state.materials = action.payload;
        },

        addMaterial: (state, action: PayloadAction<Material>) => {
            state.materials.push(action.payload);
        },

        setMaterialForm: (state, action: PayloadAction<MaterialState['materialForm']>) => {
            state.materialForm = action.payload;
            state.validationErrors = {};
        },

        resetFormValues: (state) => {
            state.materialForm = {
                name: '',
                isActive: false,
            };
        },

        handleFormChange: (state, action: PayloadAction<{ key: string, value: string | boolean }>) => {
            const { key, value } = action.payload
            switch (key) {
                case 'name':
                    if (isValidName(value as string)) {
                        state.materialForm.name = value as string;
                        state.validationErrors.name = null;
                    } else {
                        state.validationErrors.name = 'Malzeme adı zorunludur ve 3 harften fazla olmalıdır';
                    }
                    break;
                case 'isActive':
                    state.materialForm.isActive = value as boolean
                    break;
                case 'id':
                    state.materialForm.id = value as string
                    break;
                default:
                    break;
            }
        },
        validateForm: (state) => {
            Object.keys(state.materialForm).forEach((key) => {
                if (requiredInputs.includes(key) && !state.materialForm[key]) {
                    state.validationErrors = {
                        ...state.validationErrors,
                        [key]: key === 'name' ? 'Bu alan zorunludur ve 3 harften fazla olmalıdır' : 'Bu alan zorunludur'
                    };
                }
            })
        }
    },
})

export const {
    setMaterials,
    setMaterialForm,
    handleFormChange,
    addMaterial,
    resetFormValues,
    validateForm,
} = materialSlice.actions;

export default materialSlice.reducer