import { makeObservable, extendObservable, observable, action } from 'mobx';
import { RootStore } from './RootStore';

type userData = {
    id: string,
    name: string,
    email: string,
    role: string,
    status: string,
    isClient: boolean,
    clientId?: string | null,
    permissions?: {
        [key: string]: boolean,
    }
}

type userPreferences = {
    [key: string]: any,
}

interface userStoreInitialState {
    userData: {},
    userPreferences: {},
}

const initialState: userStoreInitialState = {
    userData: {
        id: '',
        name: '',
        email: '',
        role: '',
        status: '',
        isClient: false,
        clientId: null,
    },
    userPreferences: {
        locale: 'tr',
    }
}

export class UserStore {
    userData: userData = {
        id: '',
        name: '',
        email: '',
        role: '',
        status: '',
        isClient: false,
        clientId: null,
    };

    userPreferences: userPreferences = {
        locale: 'tr',
    };

    constructor(private rootStore: RootStore) {
        this.rootStore = rootStore;
        makeObservable(this, {
            setUserData: action,
            setUserPreferences: action,
        })

        extendObservable(this, initialState);
    }

    setUserData(userData: userData) {
        this.userData = userData;
    }

    setUserPreferences(userPreferences: userPreferences) {
        this.userPreferences = userPreferences;
    }
}
