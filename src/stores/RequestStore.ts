import { makeAutoObservable } from 'mobx';
import { RootStore } from './RootStore';
import type { Request } from '@/API'


export class RequestStore {
    requests: Request[] = [];

    constructor(private rootStore: RootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
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