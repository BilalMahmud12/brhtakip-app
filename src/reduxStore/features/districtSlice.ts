import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { District } from '@/API';

interface DistrictFormState {
    districts: District[];
    districtForm: {
        id?: string;
        cityID?: string;
        isActive?: boolean;
        name?: string;
        createdBy?: string;
        updatedBy?: string;
    }
}

const initialState: DistrictFormState = {
    districts: [],
    districtForm: {
        isActive: false,
        name: '',
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
                isActive: false,
                name: '',
            }
        },

        handleFormChange: (state, action: PayloadAction<{ key: string, value: string | boolean | string[] }>) => {
            const { key, value } = action.payload
            switch (key) {
                case 'name':
                    state.districtForm.name = value as string
                    break;
                case 'isActive':
                    state.districtForm.isActive = value as boolean
                    break;
                case 'cityID':
                    state.districtForm.cityID = value as string
                    break;
                // case 'createdBy':
                //     state.districtForm.createdBy = value as string
                //     break;
                // case 'updatedBy':
                //     state.districtForm.updatedBy = value as string
                //     break;
                default:
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