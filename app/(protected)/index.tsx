import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {handleLogoutAction} from "@/features/auth/authHelpers";
import {router} from "expo-router";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/redux/store";
import {useRef, useState} from "react";

const DashboardScreen = () => {
    const dispatch = useDispatch<AppDispatch>();
    const userInfo = useSelector<RootState>(state => state.auth.userInfo);

    console.log("User Info", userInfo);
    const handleLogout = async () => {
        await dispatch(handleLogoutAction());
        router.replace("/login");
    }
    return (
        <View className="flex-1 p-3">
            <View className="border bg-white border-slate-300 p-3">
                <Image
                    source={{uri: userInfo.avatar_url}}
                    style={{
                        width: 36,
                        height: 36,
                        borderRadius: 100,
                        borderWidth: 2,
                        borderColor: "#fff",
                    }}
                />
            </View>
            <Text className="font-bold text-2xl">Dashboard</Text>
            <TouchableOpacity onPress={() => handleLogout()}>
                <Text className="bg-dark-200 text-center p-3 text-white">Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DashboardScreen;