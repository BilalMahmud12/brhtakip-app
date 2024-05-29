import { makeObservable, extendObservable, observable, action } from 'mobx';
import { UserStore } from './UserStore';
import { RequestStore } from './RequestStore';
import { ClientProfileStore } from './ClientProfileStore';
import type { ClientProfile } from '@/API';

interface RootStoreInitialState {
    currentClientProfile: ClientProfile;
}

const initialState: RootStoreInitialState = {
    currentClientProfile: {
        __typename: 'ClientProfile',
        id: '',
        isActive: true,
        name: '',
        createdAt: '',
        updatedAt: '',
    }
}

export class RootStore {
    userStore: UserStore;
    requestStore: RequestStore;
    clientProfileStore: ClientProfileStore;
    brandStore: BrandStore;

    currentClientProfile: ClientProfile | undefined;

    constructor() {
        this.userStore = new UserStore(this);
        this.requestStore = new RequestStore(this);
        this.clientProfileStore = new ClientProfileStore(this);

        makeObservable(this, {
            setCurrentClientProfile: action,
        });

        extendObservable(this, initialState);
    }

    initStore({ currentClientProfile }: RootStoreInitialState) {
        this.setCurrentClientProfile(currentClientProfile);
    }

    setCurrentClientProfile(clientProfile: ClientProfile) {
        this.currentClientProfile = clientProfile;
    }
}
