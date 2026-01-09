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
        <SafeAreaView className="">
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
                        paddingHorizontal: 16,
                        justifyContent: "space-between",
                    }}
                >
                    <Pressable onPress={() => router.back()}>
                        <Feather name="arrow-left" size={22} color="#0f0d23"/>
                    </Pressable>

                    <Text style={{fontSize: 18, fontWeight: "600"}}>Vehicle Details</Text>

                    <Pressable onPress={() => console.log("Edit")}>
                        <Feather name="edit-2" size={20} color="#0f0d23"/>
                    </Pressable>
                </View>
            </View>
            <Text>
                Welcome to Vehicle Details
                {searchType} == {vehicleDetailsId}
            </Text>
        </SafeAreaView>
    );
}

export default VehicleDetails;