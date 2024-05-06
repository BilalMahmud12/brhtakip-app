// src/stores/UserStore.ts
import { makeAutoObservable } from 'mobx';
import { RootStore } from './RootStore';

export interface UserProfile {
    username: string;
    email: string;
}

export class UserStore {
    userProfile: UserProfile | null = null;
    user = null;
    isAuthenticated = false;

    constructor(private rootStore: RootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }

    setUserProfile(profile: UserProfile) {
        this.userProfile = profile;
    }

    updateUserProfile(updatedFields: Partial<UserProfile>) {
        if (this.userProfile) {
            this.userProfile = {
                ...this.userProfile,
                ...updatedFields
            };
        }
    }
}
