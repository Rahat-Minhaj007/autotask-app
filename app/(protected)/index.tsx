import {FlatList, Image, ImageBackground, Pressable, Text, TouchableOpacity, View} from "react-native";
import {handleLogoutAction} from "@/features/auth/authHelpers";
import {router} from "expo-router";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/redux/store";
import Feather from "@expo/vector-icons/Feather";
import {images} from "@/constants/images";
import ModalLayout from "@/components/ModalLayout";
import {useState} from "react";

const DashboardScreen = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const userInfo = useSelector((state: RootState) => state?.auth?.userInfo);

    console.log("User Info", userInfo);
    const handleLogout = async () => {
        await dispatch(handleLogoutAction());
        router.replace("/login");
    }
    return (
        <View className="flex-1 p-3">
            <ImageBackground source={images.startupBg} resizeMode="cover"
                             className=" bg-white p-6 overflow-hidden rounded-lg">
                <View className="absolute inset-0 bg-black/50"/>
                <View className="flex-row items-center gap-2">
                    <Image
                        source={{uri: userInfo?.avatar_url}}
                        className="w-9 h-9 rounded-full border-2 border-white"
                    />

                    <View>
                        <Text className="capitalize  text-gray-100 font-semibold">
                            {userInfo?.name} San
                        </Text>
                        <Text className="capitalize text-sm text-gray-300 font-semibold">
                            {userInfo?.role}
                        </Text>
                    </View>
                </View>
                <View className="flex-row items-center gap-1 py-3 pl-2">
                    <Feather name="clock" size={13} color="white"/>
                    <Text className="capitalize text-sm text-gray-100  font-semibold">

                        Quick Access
                    </Text>
                </View>
                <View className="flex-row items-center justify-center gap-2">
                    <TouchableOpacity className="bg-white rounded-full px-4 py-4 w-1/2 "
                                      onPress={() => setModalOpen(true)}>
                        <Text className="text-dark-200 text-center font-semibold">
                            Quick Search
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="bg-white rounded-full px-4 py-4 w-1/2">
                        <Text className="text-dark-200 text-center font-semibold">
                            History
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            {/*<Text className="font-bold text-2xl">Dashboard</Text>*/}
            {/*<TouchableOpacity onPress={() => handleLogout()}>*/}
            {/*    <Text className="bg-dark-200 text-center p-3 text-white">Logout</Text>*/}
            {/*</TouchableOpacity>*/}

            <ModalLayout isOpen={modalOpen} withInput>
                <View className="bg-white w-full p-4 rounded-xl">
                    <Text>MODAL</Text>
                    <Pressable onPress={() => setModalOpen(false)}>
                        <Text>Close</Text>
                    </Pressable>
                </View>
            </ModalLayout>
        </View>
    )
}

export default DashboardScreen;