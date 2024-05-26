import { makeObservable, extendObservable, action } from 'mobx';
import { RootStore } from './RootStore';
import type { ClientProfile } from '@/API'

interface ClientStoreInitialState {
    clientProfiles: ClientProfile[];
}

const initialState: ClientStoreInitialState = {
    clientProfiles: []
}

export class ClientProfileStore {
    clientProfiles: ClientProfile[] = [];

    constructor(private rootStore: RootStore) {
        this.rootStore = rootStore;
        
        makeObservable(this, {
            setClientProfiles: action,
            addClientProfile: action,
            removeClientProfile: action,
        });
        extendObservable(this, initialState);
    }

    initStore({ clientProfiles }: ClientStoreInitialState) {
        this.setClientProfiles(clientProfiles);
    }

    setClientProfiles(clientProfiles: ClientProfile[]) {
        this.clientProfiles = clientProfiles;
    }

    get getAllClientProfiles() {
        return this.clientProfiles;
    }

    addClientProfile(clientProfile: ClientProfile) {
        this.clientProfiles.push(clientProfile);
    }

    removeClientProfile(clientProfileId: string) {
        this.clientProfiles = this.clientProfiles.filter(clientProfile => clientProfile.id !== clientProfileId);
    }
}