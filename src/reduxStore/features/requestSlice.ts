import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Request } from '@/API';
import { isValidKey } from '@/utils/helpers';

export type ImageStorage = {
    type: string;
    path: string;
}

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
        applicationArea: string;
        branded: boolean;
        quantity: number;
        width: number;
        height: number;
        designNote: string;
        isExtraProductRequest?: boolean;
        productionCost?: number;
        cargoBudget?: number;
        assemblyBudget?: number;
        monthlyFee?: number;
        referenceImages?: ImageStorage[];
        designImages?: ImageStorage[];
        printImages?: ImageStorage[];
        applicationImages?: ImageStorage[];
    },
    selectedRequests: string[],
    [key: string]: any;
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
        applicationArea: '',
        branded: false,
        quantity: 0,
        width: 0,
        height: 0,
        designNote: '',
        isExtraProductRequest: false,
        productionCost: 0,
        cargoBudget: 0,
        assemblyBudget: 0,
        monthlyFee: 0,
        referenceImages: [],
        designImages: [],
        printImages: [],
        applicationImages: []
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
            state.requests = action.payload;
        },
        setSelectedRequests: (state, action: PayloadAction<string[]>) => {
            state.selectedRequests = action.payload
        },
        setRequestForm: (state, action: PayloadAction<RequestState['requestForm']>) => {
            state.requestForm = action.payload
        },
        handleFormChange(state, action: PayloadAction<{ key: string, value: any }>) {
            const { key, value } = action.payload;
            
            if (isValidKey(key, state.requestForm)) {
                state.requestForm = {
                    ...state.requestForm,
                    [key]: value
                }
            } else {
                console.warn(`Invalid key: ${key}`);
            }
        },
        resetFormValues(state) {
           state.requestForm = {
               ...initialState.requestForm
           }
        },
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