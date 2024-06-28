import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApplicationArea } from '@/API';

interface ApplicationAreaState {
    applicationAreas: ApplicationArea[];
    applicationAreaForm: {
        id?: string;
        name: string;
        isActive: boolean;
    }
    errors: {
        name?: string;
    };
}

const initialState: ApplicationAreaState = {
    applicationAreas: [],
    applicationAreaForm: {
        name: '',
        isActive: false,
    },
    errors: {}
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
            state.errors = {};
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
                        delete state.errors.name;
                    } else {
                        state.errors.name = 'Uygulama Alan adı zorunludur ve 3 harften fazla olmalıdır';
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
        }
    }
});

export const {
    setApplicationAreas,
    addApplicationArea,
    setApplicationAreaForm,
    resetFormValues,
    handleFormChange,
} = applicationAreaSlice.actions

export default applicationAreaSlice.reducer