import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Material } from '@/API';

interface MaterialFormState {
    materials: Material[];
    materialForm: {
        name?: string;
        isActive?: boolean;
    }
}

const initialState: MaterialFormState = {
    materials: [],
    materialForm: {
        name: '',
        isActive: false,
    }
}

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

        setMaterialFormValues: (state, action: PayloadAction<MaterialFormState['materialForm']>) => {
            state.materialForm = action.payload;
        },

        handleFormChange: (state, action: PayloadAction<{ key: string, value: string }>) => {
            const { key, value } = action.payload;
            switch (key) {
                case 'name':
                    state.materialForm = {
                        ...state.materialForm,
                        name: value
                    }
                    break;
                case 'isActive':
                    state.materialForm.isActive = value === '1' || value === 'true';
                    break;
                default:
                    state.materialForm = {
                        ...state.materialForm,
                        [key]: value,
                    }
                    break;
            }
        },
        resetMaterialFormValues: (state) => {
            state.materialForm = {
                name: '',
                isActive: false,
            };
        },
    }
})

export const {
    setMaterials,
    setMaterialFormValues,
    handleFormChange,
    addMaterial,
    resetMaterialFormValues,
} = materialSlice.actions;

export default materialSlice.reducer