import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Material } from '@/API';

interface MaterialState {
    materials: Material[];
    materialForm: {
        id?: '';
        name: string;
        isActive: boolean;
    }
}

const initialState: MaterialState = {
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

        setMaterialForm: (state, action: PayloadAction<MaterialState['materialForm']>) => {
            state.materialForm = action.payload;
        },

        resetFormValues: (state) => {
            state.materialForm = {
                name: '',
                isActive: false,
            };
        },

        handleFormChange: (state, action: PayloadAction<{ key: string, value: string }>) => {
            const { key, value } = action.payload
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