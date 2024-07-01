import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Area } from '@/API';
const requiredInputs = ['name'];
interface AreaFormState {
    areas: Area[];
    areaForm: {
        id?: string;
        districtID?: string;
        isActive?: boolean;
        name: string;
        createdBy?: string;
        updatedBy?: string;
        [key: string]: string | boolean | string[] | undefined;
    }
    validationErrors: {
        name?: string | null;
    };
}

const initialState: AreaFormState = {
    areas: [],
    areaForm: {
        isActive: false,
        name: '',
        createdBy: '',
        updatedBy: '',
    },
    validationErrors: {
        name: null,
    }
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
            state.validationErrors = {};
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
                        state.validationErrors.name = null
                    } else {
                        state.validationErrors.name = 'Alan adı zorunludur ve 3 harften fazla olmalıdır.'
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
        },

        validateForm: (state) => {
            Object.keys(state.areaForm).forEach((key) => {
                if (requiredInputs.includes(key) && !state.areaForm[key]) {
                    state.validationErrors = {
                        ...state.validationErrors,
                        [key]: key === 'name' ? 'Bu alan zorunludur ve 3 harften fazla olmalıdır' : 'Bu alan zorunludur'
                    }
                }
            })
        }
    }
})

export const {
    setAreas,
    addArea,
    setAreaForm,
    resetFormValues,
    handleFormChange,
    validateForm,
} = areaSlice.actions

export default areaSlice.reducer