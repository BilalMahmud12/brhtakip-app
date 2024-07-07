import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Request } from '@/API';
import { isValidKey } from '@/utils/helpers';

export type ImageStorage = {
    type: string;
    path: string;
}

export type DesignRevision = {
    date?: string;
    note?: string;
    images?: string[];
    owner?: {
        id: string;
        name: string;
        role: string;
    }
}

export type ExtraProductRequest = {
    id: string;
    name?: string;
    quantity: number;
    image?: string;
    note?: string;
}

export type designRevisionsRequest = {
    date?: string;
    note?: string;
    images?: string[];
    owner?: {
        id: string;
        name: string;
        role: string;
    }
}

interface RequestState {
    isFetching: boolean;
    requests: Request[];
    requestForm: {
        id?: string;
        status: string;
        requestNumber: string;
        clientprofileID: string;
        storeID: string;
        requestBrandId: string;
        requestProductId: string;
        requestMaterialId: string;
        requestApplicationAreaId: string;
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
        designRevisions?: DesignRevision[];
        extraProducts?: ExtraProductRequest[];
        passedRevision?: boolean;
    },
    selectedRequests: string[],
    validationErrors: {
        requestNumber?: string|null;
        status?: string | null
        clientprofileID?: string | null
        storeID?: string | null
        requestBrandId?: string | null
        requestProductId?: string | null
        requestApplicationAreaId?: string | null
        quantity?: string | null
        width?: string | null
        height?: string | null
        referenceImages?: string | null
    },
    imagesDrawerOpen: boolean;
    selectedRevisionImages: string[];
    [key: string]: any;
}

const initialState: RequestState = {
    isFetching: false,
    requests: [],
    requestForm: {
        id: '',
        status: '',
        requestNumber: '',
        clientprofileID: '',
        storeID: '',
        requestBrandId: '',
        requestProductId: '',
        requestMaterialId: '',
        requestApplicationAreaId: '',
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
        applicationImages: [],
        designRevisions: [],
        extraProducts: [],
        passedRevision: false
    },
    selectedRequests: [],
    validationErrors: {},
    imagesDrawerOpen: false,
    selectedRevisionImages: []
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
        setImageDrawerOpen(state, action: PayloadAction<boolean>) {
            state.imagesDrawerOpen = action.payload;
        },
        setSelectedRevisionImages(state, action: PayloadAction<string[]>) {
            state.selectedRevisionImages = action.payload;
        }
    },
})

export const {
    setIsFetching,
    setRequests,
    setSelectedRequests,
    setRequestForm,
    resetFormValues,
    handleFormChange,
    setImageDrawerOpen,
    setSelectedRevisionImages
} = requestSlice.actions
export default requestSlice.reducer