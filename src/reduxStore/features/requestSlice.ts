import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { isValidKey } from '@/utils/helpers';
import type { Request, RequestStatus, RequestExtraProductInput, DesignRevisionInput, ImageStorageItemInput, RevisionOwnerInput } from '@/API';


export type RequestForm = {
    id: string;
    status: RequestStatus;
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
    referenceImages?: ImageStorageItemInput[];
    designImages?: ImageStorageItemInput[];
    printImages?: ImageStorageItemInput[];
    applicationImages?: ImageStorageItemInput[];
    designRevisions?: DesignRevisionInput[];
    extraProducts?: RequestExtraProductInput[];
    passedRevision?: boolean;
    [key: string]: string | number | boolean | ImageStorageItemInput[] | DesignRevisionInput[] | RequestExtraProductInput[]|undefined;
}

export interface RequestState {
    isFetching: boolean;
    requests: Request[];
    requestForm: RequestForm,
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
        status: '' as RequestStatus,
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