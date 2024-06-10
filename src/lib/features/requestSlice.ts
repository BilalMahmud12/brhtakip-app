import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Request } from '@/API';

interface RequestState {
    isFetching: boolean;
    requests: Request[];
    requestForm: {
        status: string;
        requestNumber: string;
        clientprofileID: string;
        storeID: string;
        requestBrandId: string;
        requestProductId: string;
        requestMaterialId: string;
        requestDetails: {
            applicationArea: string;
            branded: boolean;
            quantity: number;
            width: number;
            height: number;
            material: string;
            designNote: string;
        }
    },
    selectedRequests: string[]
}

const initialState: RequestState = {
    isFetching: false,
    requests: [],
    requestForm: {
        status: '',
        requestNumber: '',
        clientprofileID: '',
        storeID: '',
        requestBrandId: '',
        requestProductId: '',
        requestMaterialId: '',
        requestDetails: {
            applicationArea: '',
            branded: false,
            quantity: 0,
            width: 0,
            height: 0,
            material: '',
            designNote: '',
        },
    },
    selectedRequests: []
};

const requestSlice = createSlice({
    name: 'request',
    initialState,
    reducers: {
        setIsFetching: (state, action: PayloadAction<boolean>) => {
            state.isFetching = action.payload
        },
        setRequests: (state, action: PayloadAction<Request[]>) => {
            console.log('setting requests', action.payload);
            state.requests = action.payload;
        },
        setSelectedRequests: (state, action: PayloadAction<string[]>) => {
            state.selectedRequests = action.payload
        },
        setRequestForm: (state, action: PayloadAction<RequestState['requestForm']>) => {
            state.requestForm = action.payload
        },
        resetFormValues: (state) => {
            state.requestForm = {
                status: '',
                requestNumber: '',
                clientprofileID: '',
                storeID: '',
                requestBrandId: '',
                requestProductId: '',
                requestMaterialId: '',
                requestDetails: {
                    applicationArea: '',
                    branded: false,
                    quantity: 0,
                    width: 0,
                    height: 0,
                    material: '',
                    designNote: '',
                },
            }
        },
        handleFormChange: (state, action: PayloadAction<{ key: string, value: string }>) => {
            const { key, value } = action.payload
            switch (key) {
                case 'status':
                    state.requestForm = {
                        ...state.requestForm,
                        status: value,
                    }
                    break;
                case 'requestNumber':
                    state.requestForm = {
                        ...state.requestForm,
                        requestNumber: value,
                    }
                    break;
                case 'clientprofileID':
                    state.requestForm = {
                        ...state.requestForm,
                        clientprofileID: value,
                    }
                    break;
                case 'storeID':
                    state.requestForm = {
                        ...state.requestForm,
                        storeID: value,
                    }
                    break;
                case 'requestBrandId':
                    state.requestForm = {
                        ...state.requestForm,
                        requestBrandId: value,
                    }
                    break;
                case 'requestProductId':
                    state.requestForm = {
                        ...state.requestForm,
                        requestProductId: value,
                    }
                    break;
                case 'requestMaterialId':
                    state.requestForm = {
                        ...state.requestForm,
                        requestMaterialId: value,
                    }
                    break;
                case 'requestDetails.applicationArea':
                    state.requestForm = {
                        ...state.requestForm,
                        requestDetails: {
                            ...state.requestForm.requestDetails,
                            applicationArea: value,
                        }
                    }
                    break;
                case 'requestDetails.branded':
                    state.requestForm = {
                        ...state.requestForm,
                        requestDetails: {
                            ...state.requestForm.requestDetails,
                            branded: value === 'true' ? true : false,
                        }
                    }
                    break;
                case 'requestDetails.quantity':
                    state.requestForm = {
                        ...state.requestForm,
                        requestDetails: {
                            ...state.requestForm.requestDetails,
                            quantity: parseInt(value),
                        }
                    }
                    break;
                case 'requestDetails.width':
                    state.requestForm = {
                        ...state.requestForm,
                        requestDetails: {
                            ...state.requestForm.requestDetails,
                            width: parseInt(value),
                        }
                    }
                    break;
                case 'requestDetails.height':
                    state.requestForm = {
                        ...state.requestForm,
                        requestDetails: {
                            ...state.requestForm.requestDetails,
                            height: parseInt(value),
                        }
                    }
                    break;
                case 'requestDetails.material':
                    state.requestForm = {
                        ...state.requestForm,
                        requestDetails: {
                            ...state.requestForm.requestDetails,
                            material: value,
                        }
                    }
                    break;
                case 'requestDetails.designNote':
                    state.requestForm = {
                        ...state.requestForm,
                        requestDetails: {
                            ...state.requestForm.requestDetails,
                            designNote: value,
                        }
                    }
                    break;
                default:
                    state.requestForm = {
                        ...state.requestForm,
                        [key]: value,
                    }
                    break;
            }
        }
    },
})

export const {
    setIsFetching,
    setRequests,
    setSelectedRequests,
    setRequestForm,
    resetFormValues,
    handleFormChange
} = requestSlice.actions
export default requestSlice.reducer