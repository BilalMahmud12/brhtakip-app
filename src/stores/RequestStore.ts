import { makeObservable, extendObservable, observable, action, toJS } from 'mobx';
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
        status: '' as RequestStatus,
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

    selectedRequests: string[] = [];

    constructor(private rootStore: RootStore) {
        this.rootStore = rootStore;
        
        makeObservable(this, {
            requestForm: observable,
            selectedRequests: observable,
            setRequests: action,
            removeRequest: action,
            handleFormChange: action,
            resetFormValues: action
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

    handleFormChange = (input: string, field: string) => {
        switch (field) {
            case 'requestNumber':
                this.requestForm = {
                    ...this.requestForm,
                    requestNumber: input,
                }
                break;
            case 'requestDetails.applicationArea':
                const currentFormValues = Object.assign({}, this.requestForm);

                this.requestForm = {
                    ...this.requestForm,
                    requestDetails: {
                        ...currentFormValues.requestDetails,
                        applicationArea: JSON.stringify({
                            id: input,
                        }) as string,
                    }
                }
                break;
            case 'requestDetails.branded':
                this.requestForm = {
                    ...this.requestForm,
                    requestDetails: {
                        ...this.requestForm.requestDetails,
                        branded: input === '1',
                    }
                }
                break;
            case 'requestDetails.quantity':
                this.requestForm = {
                    ...this.requestForm,
                    requestDetails: {
                        ...this.requestForm.requestDetails,
                        quantity: parseInt(input),
                    }
                }
                break
            case 'requestDetails.width':
                this.requestForm = {
                    ...this.requestForm,
                    requestDetails: {
                        ...this.requestForm.requestDetails,
                        width: parseInt(input),
                    }
                }
                break;
            case 'requestDetails.height':
                this.requestForm = {
                    ...this.requestForm,
                    requestDetails: {
                        ...this.requestForm.requestDetails,
                        height: parseInt(input),
                    }
                }
                break;
            case 'requestDetails.material':
                const currentFormValues2 = Object.assign({}, this.requestForm);

                this.requestForm = {
                    ...this.requestForm,
                    requestDetails: {
                        ...currentFormValues2.requestDetails,
                        material: JSON.stringify({
                            id: input,
                        }) as string,
                    }
                }
                break;

            case 'requestDetails.designNote':
                this.requestForm = {
                    ...this.requestForm,
                    requestDetails: {
                        ...this.requestForm.requestDetails,
                        designNote: input,
                    }
                }
                break;
            default:
                this.requestForm = {
                    ...this.requestForm,
                    [field]: input,
                }
                break;
        }

        console.log('request form', toJS(this.requestForm));
    }

    resetFormValues = () => {
        this.requestForm = {
            status: '' as RequestStatus,
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
        };
    }

    get getSelectedRequests() {
        return this.selectedRequests;
    }

    setSelectedRequests(requestIds: string[]) {
        this.selectedRequests = requestIds;
    }

    get getAllRequests() {
        return this.requests;
    }

    get getRequestFormValues() {
        return this.requestForm;
    }
}