import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { City } from '@/API';

const requiredInputs = ['name'];

interface CityFormState {
    cities: City[];
    cityForm: {
        id?: string;
        name: string;
        isActive: boolean;
        createdBy?: string;
        updatedBy?: string;
        [key: string]: string | boolean | string[] | undefined;
    };
    validationErrors: {
        name?: string | null;
    };
}

const initialState: CityFormState = {
    cities: [],
    cityForm: {
        name: '',
        isActive: false,
        createdBy: '',
        updatedBy: '',
    },
    validationErrors: {
        name: null,
    },
}

const isValidName = (name: string): boolean => {
    return typeof name === 'string' && name.trim().length >= 3 && name !== '';
};

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
            state.validationErrors = {}
        },

        resetFormValues: (state) => {
            state.cityForm = {
                name: '',
                isActive: false,
                createdBy: '',
                updatedBy: '',
            }
        },

        handleFormChange: (state, action: PayloadAction<{ key: string, value: string | boolean }>) => {
            const { key, value } = action.payload
            switch (key) {
                case 'name':
                    if (isValidName(value as string)) {
                        state.cityForm.name = value as string;
                        state.validationErrors.name = null;
                    } else {
                        state.validationErrors.name = 'Sehir adı zorunludur ve 3 harften fazla olmalıdır';
                    }
                    break;
                case 'isActive':
                    state.cityForm.isActive = value as boolean;
                    break;
                case 'createdBy':
                    state.cityForm.createdBy = value as string
                    break;
                case 'updatedBy':
                    state.cityForm.updatedBy = value as string
                    break;
                default:
                    break;
            }
        },

        validateForm: (state) => {
            Object.keys(state.cityForm).forEach((key) => {
                if (requiredInputs.includes(key) && !state.cityForm[key]) {
                    state.validationErrors = {
                        ...state.validationErrors,
                        [key]: key === 'name' ? 'Bu alan zorunludur ve 3 harften fazla olmalıdır' : 'Bu alan zorunludur'
                    };
                }
            })
        }
    }
})


export const {
    setCities,
    addCity,
    setCityForm,
    resetFormValues,
    handleFormChange,
    validateForm,
} = citySlice.actions

export default citySlice.reducer