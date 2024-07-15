import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { UserProfile as UserProfileType, Roles } from '@/API';

const requiredInputs = ['firstName', 'lastName', 'email', 'role', 'password', 'confirmPassword'];  // Include password fields in required inputs

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
        password?: string | null;  // Include password error state
        confirmPassword?: string | null;  // Include confirmPassword error state
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
        password: '',
        confirmPassword: '',
        profilePhoto: '',
    },
    validationErrors: {
        firstName: null,
        lastName: null,
        email: null,
        role: null,
        password: null,
        confirmPassword: null,
    },
}

const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const isStrongPassword = (password: string): boolean => {
    if (password.length < 8) {
        return false;
    }

    if (!/[A-Z]/.test(password)) {
        return false;
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        return false;
    }

    return true;
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
                        state.userForm.email = value as string;
                        state.validationErrors.email = null;
                    } else {
                        state.validationErrors.email = 'Geçerli bir email adresi giriniz';
                    }
                    break;
                case 'password':
                    state.userForm.password = value as string;
                    state.validationErrors.password = null;
                    break
                case 'confirmPassword':
                    state.userForm.confirmPassword = value as string;
                    state.validationErrors.confirmPassword = null;
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
            const { password, confirmPassword } = state.userForm;
            Object.keys(state.userForm).forEach((key) => {
                if (requiredInputs.includes(key) && !state.userForm[key]) {
                    state.validationErrors[key as keyof UserState['validationErrors']] = 'Bu alan zorunludur';
                }
            });

            // Validate password
            if (password && !isStrongPassword(password)) {
                state.validationErrors.password = 'Şifreniz en az 8 karakter uzunluğunda olmalıdır en az 1 büyük harf ve 1 özel karakter içermelidir.';
            }

            // Validate confirmPassword
            if (password !== confirmPassword) {
                state.validationErrors.confirmPassword = 'Şifreler eşleşmiyor';
            } else {
                state.validationErrors.confirmPassword = null;
            }
        }
    }
});

export const {
    setIsFetching,
    setUsers,
    handleFormChange,
    setUserForm,
    resetUserForm,
    validateForm
} = userSlice.actions;

export default userSlice.reducer;
