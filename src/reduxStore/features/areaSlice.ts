import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Area } from '@/API';
// district
interface AreaFormState {
    areas: Area[];
    areaForm: {
        id?: string;
        districtID?: string;
        isActive?: boolean;
        name: string;
        createdBy?: string;
        updatedBy?: string;
    }
    errors: {
        name?: string;
    }
}

const initialState: AreaFormState = {
    areas: [],
    areaForm: {
        isActive: false,
        name: '',
        createdBy: '',
        updatedBy: '',
    },
    errors: {}
}

const isValidName = (name: string): boolean => {
    return typeof name === 'string' && name.trim().length >= 3 && name !== ''
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
            state.errors = {}
        },

        resetFormValues: (state) => {
            state.areaForm = {
                isActive: false,
                name: '',
                createdBy: '',
                updatedBy: '',
            }
        },

        handleFormChange: (state, action: PayloadAction<{ key: string, value: string | boolean | string[] }>) => {
            const { key, value } = action.payload
            switch (key) {
                case 'name':
                    if (isValidName(value as string)) {
                        state.areaForm.name = value as string;
                        delete state.errors.name;
                    } else {
                        state.errors.name = 'Alan adı zorunludur ve 3 harften fazla olmalıdır.'
                    }
                    break;
                case 'districtID':
                    state.areaForm.districtID = value as string
                    break;
                case 'isActive':
                    state.areaForm.isActive = value as boolean
                    break;
                case 'createdBy':
                    state.areaForm.createdBy = value as string
                    break;
                case 'updatedBy':
                    state.areaForm.updatedBy = value as string
                    break;
                default:
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