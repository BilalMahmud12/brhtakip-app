import { configureStore } from '@reduxjs/toolkit'
import requestReducer from './features/requestSlice'
import globalReducer from './features/globalSlice'
import clientReducer from './features/clientSlice'
import userReducer from './features/userSlice'
import brandReducer from './features/brandSlice'
import productReducer from './features/productSlice'
import materialReducer from './features/materialSlice'
import applicationAreaReducer from './features/applicationAreaSlice'
import storeReducer from './features/storeSlice'
import cityReducer from './features/citySlice'
import districtReducer from './features/districtSlice'
import areaReducer from './features/areaSlice'
import extraProductReducer from './features/extraProductSlice'


export const makeStore = () => {
    return configureStore({
        reducer: {
            request: requestReducer,
            global: globalReducer,
            client: clientReducer,
            user: userReducer,
            brand: brandReducer,
            product: productReducer,
            material: materialReducer,
            applicationArea: applicationAreaReducer,
            store: storeReducer,
            city: cityReducer,
            district: districtReducer,
            area: areaReducer,
            extraProduct: extraProductReducer
        }
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']