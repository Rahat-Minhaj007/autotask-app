import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "@/interfaces/interfaces";

export interface AuthState {
    token: string | null;
    userInfo: User | null;
}

const initialState: AuthState = {
    token: null,
    userInfo: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,

    reducers: {
        setTokenUserInfo(state, action: PayloadAction<{ token: string; userInfo: User }>) {
            state.token = action.payload.token;
            state.userInfo = action.payload.userInfo;
        },
        logoutRemoveData(state, action: PayloadAction<{ token: null; userInfo: null }>) {
            state.token = action.payload.token;
            state.userInfo = action.payload.userInfo;
        }
    }
});

export const {setTokenUserInfo, logoutRemoveData} = authSlice.actions;

export default authSlice.reducer;