import {Text, TouchableOpacity, View} from "react-native";
import {handleLogoutAction} from "@/features/auth/authHelpers";
import {router} from "expo-router";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/redux/store";

const DashboardScreen = () => {
    const dispatch = useDispatch<AppDispatch>();
    const handleLogout = async () => {
        await dispatch(handleLogoutAction());
        router.replace("/login");
    }
    return (
        <View className="flex-1 justify-center items-center bg-white">
            <Text className="font-bold text-2xl">Dashboard</Text>

            <TouchableOpacity onPress={() => handleLogout()}>
                <Text className="bg-dark-200 text-center p-3 text-white">Logout</Text>
            </TouchableOpacity>

        </View>
    )
}

export default DashboardScreen;