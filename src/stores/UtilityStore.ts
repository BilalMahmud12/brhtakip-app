import { makeObservable, extendObservable, observable, action } from 'mobx';
import { RootStore } from './RootStore';

interface UtilityStoreInitialState {
    currentPageTitle: string;
}

const initialState: UtilityStoreInitialState = {
    currentPageTitle: '',
}

export class UtilityStore {
    currentPageTitle: string;

    constructor(private rootStore: RootStore) {
        this.rootStore = rootStore;
        this.currentPageTitle = '';
        this.setCurrentPageTitle = this.setCurrentPageTitle.bind(this)

        makeObservable(this, {
            setCurrentPageTitle: action,
            setLocalStorage: action,
            getLocalStorage: action,
            removeLocalStorage: action,
        });

        extendObservable(this, initialState);
    }

    initStore({ currentPageTitle }: UtilityStoreInitialState) {
        this.setCurrentPageTitle(currentPageTitle);
    }

    setLocalStorage(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    getLocalStorage(key: string) {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    }

    removeLocalStorage(key: string) {
        localStorage.removeItem(key);
    }

    setCurrentPageTitle(title: string) {
        this.currentPageTitle = title;
    }

    get getCurrentPageTitle() {
        return this.currentPageTitle;
    }
}