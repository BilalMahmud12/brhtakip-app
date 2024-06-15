import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { City } from '@/API';

interface CityFormState {
    cities: City[];
    cityForm: {
        id?: string;
        name?: string;
        isActive: boolean;
        createdBy?: string;
        updatedBy?: string;
    }
}

const initialState: CityFormState = {
    cities: [],
    cityForm: {
        name: '',
        isActive: false,
        createdBy: '',
        updatedBy: '',
    }
}

const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        setCities: (state, action: PayloadAction<City[]>) => {
            state.cities = action.payload
        },

        addCity: (state, action: PayloadAction<City>) => {
            state.cities.push(action.payload)
        },

        setCityForm: (state, action: PayloadAction<CityFormState['cityForm']>) => {
            state.cityForm = action.payload
        },

        resetFormValues: (state) => {
            state.cityForm = {
                name: '',
                isActive: false,
                createdBy: '',
                updatedBy: '',
            }
        },

        handleFormChange: (state, action: PayloadAction<{ key: string, value: string }>) => {
            const { key, value } = action.payload
            switch (key) {
                case 'name':
                    state.cityForm = {
                        ...state.cityForm,
                        name: value,
                    }
                    break;
                case 'isActive':
                    state.cityForm.isActive = value === '1' || value === 'true';
                    break;
                case 'createdBy':
                    state.cityForm = {
                        ...state.cityForm,
                        createdBy: value,
                    }
                    break;
                case 'updatedBy':
                    state.cityForm = {
                        ...state.cityForm,
                        updatedBy: value,
                    }
                    break;
                default:
                    state.cityForm = {
                        ...state.cityForm,
                        [key]: value,
                    }
                    break;
            }
        }
    }
})


export const {
    setCities,
    addCity,
    setCityForm,
    resetFormValues,
    handleFormChange,
} = citySlice.actions

export default citySlice.reducer