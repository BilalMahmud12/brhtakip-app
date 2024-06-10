import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

interface UserState {
    isFetching: boolean;
    userData: userData
}

const initialState: UserState = {
    isFetching: false,
    userData: {
        id: '',
        name: '',
        email: '',
        role: '',
        status: '',
        isClient: false,
        clientId: null,
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setIsFetching: (state, action: PayloadAction<boolean>) => {
            state.isFetching = action.payload
        },
        setUserData: (state, action: PayloadAction<userData>) => {
            state.userData = action.payload
        }
    }
})

export const { setIsFetching, setUserData } = userSlice.actions
export default userSlice.reducer