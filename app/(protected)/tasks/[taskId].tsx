import {Text, View} from "react-native";
import {useLocalSearchParams} from "expo-router";

const TaskDetails = () => {
    const {taskId} = useLocalSearchParams<{ taskId: string }>();
    return (
        <View className="flex-1">
            <Text >
                {taskId}
            </Text>
        </View>
    );
}
export default TaskDetails;