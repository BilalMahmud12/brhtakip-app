import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Area } from '@/API';
// district
interface AreaFormState {
    areas: Area[];
    areaForm: {
        districtID: string;
        isActive: boolean;
        name: string;
        createdBy?: string;
        updatedBy?: string;
    }
}

const initialState: AreaFormState = {
    areas: [],
    areaForm: {
        districtID: '',
        isActive: false,
        name: '',
        createdBy: '',
        updatedBy: '',
    }
}

const areaSlice = createSlice({
    name: 'area',
    initialState,
    reducers: {
        setAreas: (state, action: PayloadAction<Area[]>) => {
            state.areas = action.payload
        },

        addArea: (state, action: PayloadAction<Area>) => {
            state.areas.push(action.payload)
        },

        setAreaForm: (state, action: PayloadAction<AreaFormState['areaForm']>) => {
            state.areaForm = action.payload
        },

        resetFormValues: (state) => {
            state.areaForm = {
                districtID: '',
                isActive: false,
                name: '',
                createdBy: '',
                updatedBy: '',
            }
        },

        handleFormChange: (state, action: PayloadAction<{ key: string, value: string }>) => {
            const { key, value } = action.payload
            switch (key) {
                case 'districtID':
                    state.areaForm = {
                        ...state.areaForm,
                        districtID: value,
                    }
                    break;
                case 'name':
                    state.areaForm = {
                        ...state.areaForm,
                        name: value,
                    }
                    break;
                case 'isActive':
                    state.areaForm.isActive = value === '1' || value === 'true';
                    break;
                case 'createdBy':
                    state.areaForm = {
                        ...state.areaForm,
                        createdBy: value,
                    }
                    break;
                case 'updatedBy':
                    state.areaForm = {
                        ...state.areaForm,
                        updatedBy: value,
                    }
                    break;
                default:
                    state.areaForm = {
                        ...state.areaForm,
                        [key]: value,
                    }
                    break;
            }
        }
    }
})

export const {
    setAreas,
    addArea,
    setAreaForm,
    resetFormValues,
    handleFormChange,
} = areaSlice.actions

export default areaSlice.reducer