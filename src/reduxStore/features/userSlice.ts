import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { UserProfile as UserProfileType, Roles } from '@/API';

type UserProfile = Omit<UserProfileType, '__typename' | 'createdAt' | 'updatedAt'>
interface UserProfileForm extends UserProfile {
    password?: string;
    confirmPassword?: string;
}

interface UserState {
    isFetching: boolean;
    users: UserProfile[];
    userForm: UserProfileForm;
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
    }
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
        handleFormChange: (state, action: PayloadAction<{ key: keyof UserProfileForm, value: string | boolean | string[] }>) => {
            const { key, value } = action.payload
            switch (key) {
                case 'id':
                    state.userForm.id = value as string
                    break
                case 'isActive':
                    console.log('isActive', value)
                    state.userForm.isActive = value as boolean
                    break
                case 'clientprofileID':
                    state.userForm.clientprofileID = value as string
                    break
                case 'firstName':
                    state.userForm.firstName = value as string
                    break
                case 'lastName':
                    state.userForm.lastName = value as string
                    break
                case 'email':
                    state.userForm.email = value as string
                    break
                case 'password':
                    state.userForm.password = value as string
                    break
                case 'confirmPassword':
                    state.userForm.confirmPassword = value as string
                    break
                case 'role':
                    state.userForm.role = value as Roles
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
        }
    }
})

export const {
    setIsFetching,
    setUsers,
    handleFormChange,
    setUserForm,
    resetUserForm
} = userSlice.actions
export default userSlice.reducer