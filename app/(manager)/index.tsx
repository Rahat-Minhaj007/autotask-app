import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {AppDispatch} from "@/redux/store";
import {useDispatch} from "react-redux";
import { handleLogoutAction} from "@/features/auth/authHelpers";
import {router} from "expo-router";


const Dashboard = () => {


    const dispatch = useDispatch<AppDispatch>();
    const handleLogoutApp = async() =>{
        await dispatch(handleLogoutAction());
        router.replace("/(auth)");
    }


    return (
        <View className="flex-1 bg-white justify-center items-center p-10">
            <Text className="text-5xl text-dark-200 font-bold">Dashboard</Text>
            <TouchableOpacity
                className="bg-dark-200 py-[1.2rem] rounded-lg w-full "
                onPress={() => handleLogoutApp()}
            >
                <Text className="text-white text-xl font-semibold text-center">
                    Logout
                </Text>
                {/*<Feather name="arrow-right" size={20} color="black"/>*/}
            </TouchableOpacity>
        </View>
    );
};

export default Dashboard;