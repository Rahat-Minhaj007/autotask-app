import {Pressable, Text, View} from "react-native";
import {router, useLocalSearchParams} from "expo-router";
import {useVehiclesQuery} from "@/services/api/vehicleDetailsApi";
import {SafeAreaView} from "react-native-safe-area-context";
import {Feather} from "@expo/vector-icons";

const VehicleDetails = () => {
    const {vehicleDetailsId, searchType} = useLocalSearchParams<{ vehicleDetailsId: string, searchType: string }>();
    const {data, isLoading, error} = useVehiclesQuery(
        {
            search_type: searchType,
            search_query: vehicleDetailsId,

        },
        {
            refetchOnFocus: false,
            refetchOnMountOrArgChange: false,
        }
    );

    console.log("Vehicles Data", data?.data?.vehicles[0]);
    return (
        <SafeAreaView className="flex-1">
            <View style={{
                backgroundColor: "#f2f2f2",
                borderBottomWidth: 1,
                borderBottomColor: "#e5e5e5",
            }}>
                <View
                    style={{
                        height: 53,
                        flexDirection: "row",
                        alignItems: "center",
                        paddingHorizontal: 12,

                    }}
                >
                    <Pressable onPress={() => router.back()}>
                        <Feather name="arrow-left" size={22} color="#0f0d23"/>
                    </Pressable>

                    <Text style={{fontSize: 18, fontWeight: "600"}}>Vehicle Details</Text>
                </View>
            </View>
            <View className="flex-1 p-3">
                <View className="px-3.5 py-5 bg-white rounded border border-slate-200">
                   <View>
                       <Text className="font-bold text-dark-200 text-sm">Basic Information</Text>
                       
                   </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default VehicleDetails;