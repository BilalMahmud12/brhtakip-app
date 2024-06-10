import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ClientProfile } from '@/API'

interface GlobalState {
    isFetching: boolean;
    currentPageTitle: string
}

const initialState: GlobalState = {
    isFetching: false,
    currentPageTitle: '',
}

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setIsFetching: (state, action: PayloadAction<boolean>) => {
            state.isFetching = action.payload
        },
        setCurrentPageTitle: (state, action: PayloadAction<string>) => {
            state.currentPageTitle = action.payload
        }
    }
})

export const { setIsFetching, setCurrentPageTitle } = globalSlice.actions
export default globalSlice.reducer
