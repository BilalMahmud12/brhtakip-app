import { makeObservable, extendObservable, observable, action } from 'mobx';
import { RootStore } from './RootStore';
import type { Request, RequestStatus } from '@/API'

interface RequestStoreInitialState {
    requests: Request[];
}

const initialState: RequestStoreInitialState = {
    requests: []
}


export class RequestStore {
    requests: Request[] = [];

    requestForm = {
        request_number: '',
        clientprofileID: '',
        requestBrandId: '',
        requestProductId: '',
        requestMaterialId: '',
        status: '' as RequestStatus,
        storeID: '',
    }

    constructor(private rootStore: RootStore) {
        this.rootStore = rootStore;
        
        makeObservable(this, {
            requestForm: observable,
            setRequests: action,
            removeRequest: action,
            handleFormChange: action,
        });

        extendObservable(this, initialState);
    }

    initStore({ requests }: RequestStoreInitialState) {
        this.setRequests(requests);
    }

    setRequests(requests: Request[]) {
        this.requests = requests;
    }

    addRequest(request: Request) {
        this.requests.push(request);
    }

    removeRequest(requestId: string) {
        this.requests = this.requests.filter(request => request.id !== requestId);
    }

    setRequestFormValues(values: any) {
        this.requestForm = {
            ...this.requestForm,
            ...values,
        }
    }

    handleFormChange = (input: string, field: keyof typeof this.requestForm) => {
        this.requestForm = {
            ...this.requestForm,
            [field]: input,
        }

        console.log('request form' ,this.requestForm);
    }

    get getAllRequests() {
        return this.requests;
    }

    get getRequestFormValues() {
        return this.requestForm;
    }
}