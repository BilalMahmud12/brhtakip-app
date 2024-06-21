import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { District } from '@/API';

interface DistrictFormState {
    districts: District[];
    districtForm: {
        id?: string;
        cityID?: string;
        isActive: boolean;
        name: string;
        createdBy?: string;
        updatedBy?: string;
    }
}

const initialState: DistrictFormState = {
    districts: [],
    districtForm: {
        cityID: '',
        isActive: false,
        name: '',
        createdBy: '',
        updatedBy: '',
    }
}

const districtSlice = createSlice({
    name: 'district',
    initialState,
    reducers: {
        setDistricts: (state, action: PayloadAction<District[]>) => {
            state.districts = action.payload
        },

        addDistrict: (state, action: PayloadAction<District>) => {
            state.districts.push(action.payload)
        },

        setDistrictForm: (state, action: PayloadAction<DistrictFormState['districtForm']>) => {
            state.districtForm = action.payload
        },

        resetFormValues: (state) => {
            state.districtForm = {
                cityID: '',
                isActive: false,
                name: '',
                createdBy: '',
                updatedBy: '',
            }
        },

        handleFormChange: (state, action: PayloadAction<{ key: string, value: string }>) => {
            const { key, value } = action.payload
            switch (key) {
                case 'name':
                    state.districtForm = {
                        ...state.districtForm,
                        name: value,
                    }
                    break;
                case 'isActive':
                    state.districtForm.isActive = value === '1' || value === 'true';
                    break;
                case 'cityID':
                    state.districtForm = {
                        ...state.districtForm,
                        cityID: value,
                    }
                    break;
                case 'createdBy':
                    state.districtForm = {
                        ...state.districtForm,
                        createdBy: value,
                    }
                    break;
                case 'updatedBy':
                    state.districtForm = {
                        ...state.districtForm,
                        updatedBy: value,
                    }
                    break;
                default:
                    state.districtForm = {
                        ...state.districtForm,
                        [key]: value,
                    }
                    break;
            }
        }
    }
})

export const {
    setDistricts,
    addDistrict,
    setDistrictForm,
    resetFormValues,
    handleFormChange,
} = districtSlice.actions

export default districtSlice.reducer