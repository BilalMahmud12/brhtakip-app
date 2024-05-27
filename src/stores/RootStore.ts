import { UserStore } from './UserStore';
import { RequestStore } from './RequestStore';
import { ClientProfileStore } from './ClientProfileStore';
import { BrandStore } from './BrandStore';

interface RootStoreInitialState { }

export class RootStore {
    userStore: UserStore;
    requestStore: RequestStore;
    clientProfileStore: ClientProfileStore;
    brandStore: BrandStore;

    constructor() {
        this.userStore = new UserStore(this);
        this.requestStore = new RequestStore(this);
        this.clientProfileStore = new ClientProfileStore(this);
        this.brandStore = new BrandStore(this);
    }
}
