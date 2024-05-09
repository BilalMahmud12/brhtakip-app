// src/stores/RootStore.ts
import { UserStore } from './UserStore';
import { RequestStore } from './RequestStore';

export class RootStore {
    userStore: UserStore;
    requestStore: RequestStore;

    constructor() {
        this.userStore = new UserStore(this);
        this.requestStore = new RequestStore(this);
    }
}
