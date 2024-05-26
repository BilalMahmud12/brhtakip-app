import { UserStore } from './UserStore';
import { RequestStore } from './RequestStore';
import { ClientProfileStore } from './ClientProfileStore';

interface RootStoreInitialState {}

export class RootStore {
    userStore: UserStore;
    requestStore: RequestStore;
    clientProfileStore: ClientProfileStore;

    constructor() {
        this.userStore = new UserStore(this);
        this.requestStore = new RequestStore(this);
        this.clientProfileStore = new ClientProfileStore(this);
    }
}
