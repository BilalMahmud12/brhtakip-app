/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { UserProfile as OriginalUserProfile, Roles } from '@/API';
import { isValidKey } from '@/utils/helpers';

type UserProfile = Omit<OriginalUserProfile, '__typename' | 'createdAt' | 'updatedAt'>

export interface UserProfileForm extends UserProfile {
    password?: string | null
    confirmPassword?: string | null
    [key: string]: any;
}

export interface UserFormInputValidationErrors {
    clientprofileID?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    email?: string | null;
    role?: string | null;
    permissions?: string | null;
    password?: string | null;
    confirmPassword?: string | null;
    [key: string]: any;
}

interface UserState {
    isFetching: boolean;
    users: UserProfile[];
    userForm: UserProfileForm;
    validationErrors: UserFormInputValidationErrors,
}

const initialState: UserState = {
    isFetching: false,
    users: [],
    userForm: {
        id: '',
        cognitoID: '',
        clientprofileID: '',
        isActive: false,
        firstName: '',
        lastName: '',
        email: '',
        role: '' as Roles,
        permissions: [],
        password: null,
        confirmPassword: null,
        profilePhoto: null,
    },
    validationErrors: {
        clientprofileID: null,
        firstName: null,
        lastName: null,
        email: null,
        role: null,
        permissions: null,
        password: null,
        confirmPassword: null,
    },
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setIsFetching: (state, action: PayloadAction<boolean>) => {
            state.isFetching = action.payload
        },
        setUsers: (state, action: PayloadAction<UserProfile[]>) => {
            state.users = action.payload
        },
        handleFormChange(state, action: PayloadAction<{ key: string, value: any }>) {
            const { key, value } = action.payload;

            if (isValidKey(key, state.userForm)) {
                state.userForm = {
                    ...state.userForm,
                    [key]: value
                }
            } else {
                console.warn(`Invalid key: ${key}`);
            }
        },
        setUserForm(state, action: PayloadAction<UserProfileForm>) {
            state.userForm = action.payload
        },
        resetUserForm(state) {
            state.userForm = initialState.userForm
        },
        setValidationErrors: (state, action: PayloadAction<UserFormInputValidationErrors>) => {
            state.validationErrors = action.payload
        },
        resetValidationErrors: (state) => {
            state.validationErrors = initialState.validationErrors
        }
    }
});

export const {
    setIsFetching,
    setUsers,
    handleFormChange,
    setUserForm,
    resetUserForm,
    setValidationErrors,
    resetValidationErrors
} = userSlice.actions;

export default userSlice.reducer;
