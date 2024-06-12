import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApplicationArea } from '@/API';

interface ApplicationAreaState {
    applicationAreas: ApplicationArea[];
    applicationAreaForm: {
        id?: string
        name: string,
        isActive: boolean,
    }
}

const initialState: ApplicationAreaState = {
    applicationAreas: [],
    applicationAreaForm: {
        name: '',
        isActive: false,
    }
}

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
        },

        resetFormValues: (state) => {
            state.applicationAreaForm = {
                name: '',
                isActive: false
            }
        },

        handleFormChange: (state, action: PayloadAction<{ key: string, value: string }>) => {
            const { key, value } = action.payload;
            switch (key) {
                case 'name':
                    state.applicationAreaForm = {
                        ...state.applicationAreaForm,
                        name: value,
                    }
                    break;
                case 'isActive':
                    state.applicationAreaForm.isActive = value === '1' || value === 'true';
                    break;
                default:
                    state.applicationAreaForm = {
                        ...state.applicationAreaForm,
                        [key]: value,
                    }
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