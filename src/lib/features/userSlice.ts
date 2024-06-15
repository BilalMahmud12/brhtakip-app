import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { UserProfile as UserProfileType } from '@/API';

type UserProfile = Omit<UserProfileType, '__typename'>

interface UserState {
    isFetching: boolean;
    users: UserProfile[];
}

const initialState: UserState = {
    isFetching: false,
    users: [],
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
    }
})

export const { 
    setIsFetching,
    setUsers, 
} = userSlice.actions
export default userSlice.reducer