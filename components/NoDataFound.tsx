import {Text, View} from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";

const NoDataFound = () => {
    return (
        <View className="flex-1 items-center justify-center mt-20 opacity-60">
            <EvilIcons name="calendar" size={26} color="#0f0d23"/>
            <Text className="mt-4 text-sm text-slate-400 font-medium">
                No tasks assigned today
            </Text>
        </View>
    )
}
export default NoDataFound;