import AsyncStorage from "@react-native-async-storage/async-storage";
import {handleReloadAuthDataAction} from "@/features/auth/authHelpers";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/redux/store";
import {SplashScreen} from "expo-router";


export const useAuthData = () => {

    const dispatch = useDispatch<AppDispatch>();
    const {token, userInfo} = useSelector((state: RootState) => state?.auth);
    const [loading, setLoading] = useState(true);


    const checkTokenAndReset = async () => {

        try {
            const storedToken = await AsyncStorage.getItem("token");
            if (!token && storedToken) {
                await dispatch(handleReloadAuthDataAction());
            }
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        checkTokenAndReset();
    }, [token]);


    return {
        loading,
        userRole: userInfo?.role,
        isAuthenticated: !!token,

    }
};