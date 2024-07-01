import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApplicationArea } from '@/API';

const requiredInputs = ['name'];

interface ApplicationAreaState {
    applicationAreas: ApplicationArea[];
    applicationAreaForm: {
        id?: string;
        name: string;
        isActive: boolean;
        [key: string]: string | boolean | string[] | undefined;
    }
    validationErrors: {
        name?: string | null;
    };
}

const initialState: ApplicationAreaState = {
    applicationAreas: [],
    applicationAreaForm: {
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

const applicationAreaSlice = createSlice({
    name: 'applicationArea',
    initialState,
    reducers: {
        setApplicationAreas: (state, action: PayloadAction<ApplicationArea[]>) => {
            state.applicationAreas = action.payload
        },

        addApplicationArea: (state, action: PayloadAction<ApplicationArea>) => {
            state.applicationAreas.push(action.payload)
        },

        setApplicationAreaForm: (state, action: PayloadAction<ApplicationAreaState['applicationAreaForm']>) => {
            state.applicationAreaForm = action.payload
            state.validationErrors = {};
        },

        resetFormValues: (state) => {
            state.applicationAreaForm = {
                name: '',
                isActive: false
            }
        },

        handleFormChange: (state, action: PayloadAction<{ key: string, value: string | boolean }>) => {
            const { key, value } = action.payload;
            switch (key) {
                case 'name':
                    if (isValidName(value as string)) {
                        state.applicationAreaForm.name = value as string;
                        state.validationErrors.name = null;
                    } else {
                        state.validationErrors.name = 'Uygulama Alan adı zorunludur ve 3 harften fazla olmalıdır';
                    }
                    break;
                case 'isActive':
                    state.applicationAreaForm.isActive = value as boolean
                    break;
                case 'id':
                    state.applicationAreaForm.id = value as string
                    break;
                default:
                    break;
            }
        },
        validateForm: (state) => {
            Object.keys(state.applicationAreaForm).forEach((key) => {
                if (requiredInputs.includes(key) && !state.applicationAreaForm[key]) {
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
    setApplicationAreas,
    addApplicationArea,
    setApplicationAreaForm,
    resetFormValues,
    handleFormChange,
    validateForm,
} = applicationAreaSlice.actions

export default applicationAreaSlice.reducer