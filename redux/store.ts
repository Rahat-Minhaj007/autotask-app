import {configureStore} from "@reduxjs/toolkit";
import {api} from "@/services/api/baseApi";
import authReducer from "@/redux/slices/authSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (gDM) => gDM({
        serializableCheck: false,
    }).concat(api.middleware),
    devTools: process.env.NODE_ENV === "development",
});


// Types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;