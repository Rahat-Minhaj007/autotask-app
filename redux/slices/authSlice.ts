import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: null,
        userInfo: null
    },

    reducers: {
        setTokenUserInfo(state, action) {
            state.token = action.payload.token;
            state.userInfo = action.payload.userInfo;
        },
        logoutRemoveData(state, action) {
            state.token = action.payload.token;
            state.userInfo = action.payload.userInfo;
        }
    }
});

export const {setTokenUserInfo, logoutRemoveData} = authSlice.actions;

export default authSlice.reducer;