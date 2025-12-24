import {FlatList, Image, ImageBackground, Pressable, Text, TextInput, TouchableOpacity, View} from "react-native";
import {handleLogoutAction} from "@/features/auth/authHelpers";
import {router} from "expo-router";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/redux/store";
import Feather from "@expo/vector-icons/Feather";
import {images} from "@/constants/images";
import ModalLayout from "@/components/ModalLayout";
import {useState} from "react";
import {Dropdown} from "react-native-element-dropdown";

const DashboardScreen = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [value, setValue] = useState('1'); // Default value is '2' (Option 2)
    const dispatch = useDispatch<AppDispatch>();
    const userInfo = useSelector((state: RootState) => state?.auth?.userInfo);

    console.log("User Info", userInfo);
    const handleLogout = async () => {
        await dispatch(handleLogoutAction());
        router.replace("/login");
    }
    const data = [
        {label: "Vehicle ID", value: "1"},
        {label: "Chassis Number", value: "2"},

    ];
    return (
        <View className="flex-1 p-3">
            <ImageBackground source={images.startupBg} resizeMode="cover"
                             className=" bg-white p-6 overflow-hidden rounded-lg">
                <View className="absolute inset-0 bg-black/50"/>
               <View className="flex-row justify-between border-b-2 border-b-white">
                   <View className="flex-row items-center gap-2">
                       <Image
                           source={{uri: userInfo?.avatar_url}}
                           className="w-12 h-12 rounded-full border-2 border-white mb-5"
                       />

                       <View className="mb-5">
                           <Text className="capitalize  text-gray-100 font-semibold">
                               {userInfo?.name} San
                           </Text>
                           <Text className="capitalize text-sm text-gray-300 font-semibold">
                               {userInfo?.role}
                           </Text>
                       </View>
                   </View>
                   <Image
                       source={images.logoWhite}
                       className="w-11 h-11"
                       resizeMode="contain"
                   />
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
                <View className="bg-white w-full p-6 rounded-md">
                    <Text className="text-dark-100 font-semibold">Search Vehicle</Text>
                    <Text className="text-dark-100 font-medium text-sm py-2">Select search type and enter search query
                        to find vehicle details.</Text>

                    <Dropdown
                        data={data}
                        labelField="label"
                        valueField="value"
                        placeholder="Select option"
                        value={value}
                        onChange={(item) => setValue(item.value)}
                        style={{
                            height: 54,
                            paddingHorizontal: 16,
                            borderWidth: 1,
                            borderColor: "#D1D5DB", // gray-300
                            borderRadius: 6,
                            backgroundColor: "#FFFFFF",
                        }}
                        placeholderStyle={{
                            fontSize: 14,
                            color: "#9CA3AF", // gray-400
                        }}
                        selectedTextStyle={{
                            fontSize: 14,
                            color: "#111827", // gray-900
                        }}
                        itemTextStyle={{
                            fontSize: 14,
                            color: "#111827",
                        }}
                        containerStyle={{
                            borderRadius: 6,
                        }}
                        activeColor="#FBFBFB" // blue-100
                    />

                    <TextInput
                        className="h-16 px-4 text-mdghc text-gray-900 bg-white border border-gray-300 rounded focus:border-gray-500 focus:ring-2 focus:ring-blue-100 mt-4"
                        placeholder="Enter search query"
                        placeholderTextColor="#9CA3AF" // gray-400
                    />

                    <TouchableOpacity className="bg-dark-200 w-full rounded my-3">
                        <Text className="text-white font-medium text-center p-4">Search</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalOpen(false)}>
                        <Text className="text-dark-200 text-center px-4 py-1">Cancel</Text>
                    </TouchableOpacity>
                </View>
            </ModalLayout>
        </View>
    )
}

export default DashboardScreen;