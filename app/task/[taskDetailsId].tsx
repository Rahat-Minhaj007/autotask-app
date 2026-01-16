import {Pressable, ScrollView, Text, View} from "react-native";
import {router, useLocalSearchParams} from "expo-router";
import {Feather} from "@expo/vector-icons";
import {SafeAreaView} from "react-native-safe-area-context";

const TaskDetails = () => {
    const {taskDetailsId} = useLocalSearchParams<{ taskDetailsId: string }>();
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
                        justifyContent: "space-between",
                    }}
                >
                    <Pressable onPress={() => router.back()}>
                        <Feather name="arrow-left" size={22} color="#0f0d23"/>
                    </Pressable>

                    <Text style={{fontSize: 18, fontWeight: "600"}}>Details</Text>

                    <Pressable onPress={() => console.log("Edit")}>
                        <Feather name="edit-2" size={20} color="#0f0d23"/>
                    </Pressable>
                </View>
            </View>
           <ScrollView >
               <Text className="font-bold text-2xl">Task Details Id: {taskDetailsId}</Text>
               <Text className="font-bold text-2xl">Task Details Id: {taskDetailsId}</Text>
               <Text className="font-bold text-2xl">Task Details Id: {taskDetailsId}</Text>
               <Text className="font-bold text-2xl">Task Details Id: {taskDetailsId}</Text>
               <Text className="font-bold text-2xl">Task Details Id: {taskDetailsId}</Text>
               <Text className="font-bold text-2xl">Task Details Id: {taskDetailsId}</Text>
               <Text className="font-bold text-2xl">Task Details Id: {taskDetailsId}</Text>
               <Text className="font-bold text-2xl">Task Details Id: {taskDetailsId}</Text>
               <Text className="font-bold text-2xl">Task Details Id: {taskDetailsId}</Text>
               <Text className="font-bold text-2xl">Task Details Id: {taskDetailsId}</Text>
           </ScrollView>
        </SafeAreaView>
    );
}
export default TaskDetails;