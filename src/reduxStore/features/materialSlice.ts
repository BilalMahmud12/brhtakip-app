import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Material } from '@/API';

interface MaterialState {
    materials: Material[];
    materialForm: {
        id?: string;
        name: string;
        isActive: boolean;
    }
    errors: {
        name?: string;
    };
}

const initialState: MaterialState = {
    materials: [],
    materialForm: {
        name: '',
        isActive: false,
    },
    errors: {}
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
            state.errors = {};
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
                        delete state.errors.name;
                    } else {
                        state.errors.name = 'Malzeme adı zorunludur ve 3 harften fazla olmalıdır';
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
        }
    },
})

export const {
    setMaterials,
    setMaterialForm,
    handleFormChange,
    addMaterial,
    resetFormValues,
} = materialSlice.actions;

export default materialSlice.reducer