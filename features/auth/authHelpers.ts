import AsyncStorage from "@react-native-async-storage/async-storage";
import {logoutRemoveData, setTokenUserInfo} from "@/redux/slices/authSlice";
import {AppDispatch} from "@/redux/store";
import {LoginResponse} from "@/interfaces/interfaces";

export const handleLoginSuccessAction = (loginResponseData: LoginResponse) => async (dispatch: AppDispatch) => {
    console.log("loginResponseData",loginResponseData);
    const token = loginResponseData.token;
    const userInfo = loginResponseData?.user

    await AsyncStorage.setItem("token", JSON.stringify(token));
    await AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));

    dispatch(setTokenUserInfo({token, userInfo}));
}

export const handleReloadAuthDataAction = () => async (dispatch: AppDispatch) => {
    const token = await AsyncStorage.getItem("token");
    const userInfo = await AsyncStorage.getItem("userInfo");

    if (token && userInfo) {
        dispatch(setTokenUserInfo({
            token: JSON.parse(token),
            userInfo: JSON.parse(userInfo)
        }));
    }
};


export const handleLogoutAction = () => async (dispatch: AppDispatch) => {
    await AsyncStorage.clear();
    dispatch(logoutRemoveData({
        token: null,
        userInfo: null
    }));
}