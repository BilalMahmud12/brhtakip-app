import { configureStore } from '@reduxjs/toolkit'
import requestReducer from './features/requestSlice'
import globalReducer from './features/globalSlice'
import clientReducer from './features/clientSlice'
import userReducer from './features/userSlice'

export const makeStore = () => {
    return configureStore({
        reducer: {
            request: requestReducer,
            global: globalReducer,
            client: clientReducer,
            user: userReducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false,
            }),
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']