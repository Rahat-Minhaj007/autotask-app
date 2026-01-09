import {ActivityIndicator, Image, ImageBackground, Text, TextInput, TouchableOpacity, View} from "react-native";
import {handleLogoutAction} from "@/features/auth/authHelpers";
import {router, useLocalSearchParams} from "expo-router";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/redux/store";
import Feather from "@expo/vector-icons/Feather";
import {images} from "@/constants/images";
import ModalLayout from "@/components/ModalLayout";
import {useState} from "react";
import {Dropdown} from "react-native-element-dropdown";
import Toast from "react-native-toast-message";
import {useLazyVehiclesQuery} from "@/services/api/vehicleDetailsApi";

const DashboardScreen = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [searchType, setSearchType] = useState('vehicle_id');
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch<AppDispatch>();
    const userInfo = useSelector((state: RootState) => state?.auth?.userInfo);
    const [searchVehicles, {data, isLoading, error}] = useLazyVehiclesQuery();

    // console.log("User Info", userInfo);
    const handleLogout = async () => {
        await dispatch(handleLogoutAction());
        router.replace("/login");
    }
    const selectFieldData = [
        {label: "Vehicle ID", value: "vehicle_id"},
        {label: "Chassis Number", value: "veh_chassis_number"},

    ];

    const showToast = () => {
        Toast.show({
            type: 'success',
            text1: 'Hello',
            text2: 'This is some something 👋',
            position: 'bottom',
        });
    }

    const onSearch = async () => {
        try {
            const res = await searchVehicles({
                search_type: searchType,
                search_query: searchValue,
            }).unwrap();

            if (res.data.vehicles.length === 0) {
                Toast.show({
                    type: 'error',
                    text1: 'Sorry',
                    text2: 'Vehicle not found!',
                    position: 'top',
                });
                return;
            }

            setModalOpen(false);
            router.push({
                pathname: "/vehicle/[vehicleDetailsId]",
                params: {
                    vehicleDetailsId: searchValue,
                    searchType,
                },
            });
            Toast.show({
                type: 'success',
                text1: 'Hello',
                text2: 'This is some something 👋',
                position: 'top',
            });


        } catch (e) {
            Toast.show({
                type: 'error',
                text1: 'Sorry',
                text2: 'Search Failed!',
                position: 'top',
            });
        }

    }
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

                            <Text className="text-sm text-gray-200 font-medium">
                                {userInfo?.email}
                            </Text>
                            <View className="self-start bg-white px-2 py-0.5 rounded-sm mt-1">
                                <Text className="capitalize text-xs text-dark-300 font-semibold">
                                    {userInfo?.role}
                                </Text>
                            </View>
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
                                      onPress={() => {
                                          setSearchType('vehicle_id');
                                          setSearchValue('');
                                          setModalOpen(true);
                                      }}>
                        <Text className="text-dark-200 text-center font-semibold">
                            Quick Search
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="bg-white rounded-full px-4 py-4 w-1/2" onPress={showToast}>
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
                <View className="bg-white w-full px-6 py-8 rounded-md">
                    <Text className="text-dark-100 font-semibold">Search Vehicle</Text>
                    <Text className="text-dark-100 font-medium text-sm py-2">Select search type and enter search query
                        to find vehicle details.</Text>

                    <Dropdown
                        data={selectFieldData}
                        labelField="label"
                        valueField="value"
                        placeholder="Select option"
                        value={searchType}
                        onChange={(item) => setSearchType(item?.value)}
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
                        onChangeText={(value) => setSearchValue(value)}
                    />

                    <TouchableOpacity
                        className={`w-full rounded my-3 p-5 ${
                            isLoading ? "bg-gray-400" : "bg-dark-200"
                        }`}
                        disabled={isLoading}
                        onPress={onSearch}
                    >
                        {isLoading ? (
                            <ActivityIndicator color="#fff"/>
                        ) : (
                            <Text className="text-white font-medium text-center">
                                Search
                            </Text>
                        )}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalOpen(false)}>
                        <Text className="text-dark-200 text-center px-4 pt-1">Cancel</Text>
                    </TouchableOpacity>
                </View>
            </ModalLayout>
        </View>
    )
}

export default DashboardScreen;