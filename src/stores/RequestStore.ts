import { makeObservable, extendObservable, action } from 'mobx';
import { RootStore } from './RootStore';
import type { Request } from '@/API'

interface RequestStoreInitialState {
    requests: Request[];
}

const initialState: RequestStoreInitialState = {
    requests: []
}


export class RequestStore {
    requests: Request[] = [];

    constructor(private rootStore: RootStore) {
        this.rootStore = rootStore;
        
        makeObservable(this, {
            setRequests: action,
            removeRequest: action,
        });
        extendObservable(this, initialState);
    }

    initStore({ requests }: RequestStoreInitialState) {
        this.setRequests(requests);
    }

    setRequests(requests: Request[]) {
        this.requests = requests;
    }

    get getAllRequests() {
        return this.requests;
    }

    addRequest(request: Request) {
        this.requests.push(request);
    }

    removeRequest(requestId: string) {
        this.requests = this.requests.filter(request => request.id !== requestId);
    }
}