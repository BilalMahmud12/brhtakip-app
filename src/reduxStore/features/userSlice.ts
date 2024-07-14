import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { UserProfile as UserProfileType, Roles } from '@/API';

const requiredInputs = ['firstName', 'lastName', 'email', 'role'];
type UserProfile = Omit<UserProfileType, '__typename' | 'createdAt' | 'updatedAt'>
interface UserProfileForm extends UserProfile {
    password?: string;
    confirmPassword?: string;
    [key: string]: any;
}

interface UserState {
    isFetching: boolean;
    users: UserProfile[];
    userForm: UserProfileForm;
    validationErrors: {
        firstName?: string | null;
        lastName?: string | null;
        email?: string | null;
        role?: string | null;
        address?: string | null;
    },
}

const initialState: UserState = {
    isFetching: false,
    users: [],
    userForm: {
        id: '',
        isActive: false,
        firstName: '',
        lastName: '',
        email: '',
        role: null,
        profilePhoto: '',
    },
    validationErrors: {
        firstName: null,
        lastName: null,
        email: null,
        role: null,
        address: null,
    },
}


const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

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
        handleFormChange: (state, action: PayloadAction<{ key: keyof UserProfileForm, value: string | boolean | string[] }>) => {
            const { key, value } = action.payload
            switch (key) {
                case 'id':
                    state.userForm.id = value as string
                    break
                case 'isActive':
                    state.userForm.isActive = value as boolean
                    break
                case 'clientprofileID':
                    state.userForm.clientprofileID = value as string
                    break
                case 'firstName':
                    state.userForm.firstName = value as string
                    state.validationErrors.firstName = null
                    break
                case 'lastName':
                    state.userForm.lastName = value as string
                    state.validationErrors.lastName = null
                    break
                case 'email':
                    if (isValidEmail(value as string)) {
                        state.userForm.name = value as string;
                        state.validationErrors.email = null;
                    } else {
                        state.validationErrors.email = 'example@example.com formatında bir email adresi giriniz.'
                    }
                    break;
                case 'password':
                    state.userForm.password = value as string
                    break
                case 'confirmPassword':
                    state.userForm.confirmPassword = value as string
                    break
                case 'role':
                    state.userForm.role = value as Roles
                    state.validationErrors.role = null
                    break
                case 'permissions':
                    state.userForm.permissions = value as string[]
                    break
                case 'profilePhoto':
                    state.userForm.profilePhoto = value as string
                    break
                default:
                    break
            }
        },
        setUserForm(state, action: PayloadAction<UserProfileForm>) {
            state.userForm = action.payload
        },
        resetUserForm(state) {
            state.userForm = initialState.userForm
        },

        validateForm: (state) => {
            Object.keys(state.userForm).forEach((key) => {
                if (requiredInputs.includes(key) && !state.userForm[key]) {
                    state.validationErrors = {
                        ...state.validationErrors,
                        [key]: key === 'firstName' ? 'Bu alan zorunludur' : 'Bu alan zorunludur',
                        [key]: key === 'lastName' ? 'Bu alan zorunludur' : 'Bu alan zorunludur',
                    };
                }
            })
        }
    }
})

export const {
    setIsFetching,
    setUsers,
    handleFormChange,
    setUserForm,
    resetUserForm,
    validateForm
} = userSlice.actions
export default userSlice.reducer