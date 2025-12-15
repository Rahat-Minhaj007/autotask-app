import { Stack } from "expo-router";
import { Text, View } from "react-native";

const Header = ({ title }: { title: string }) => (
    <View style={{ width: "100%", paddingHorizontal: 16 }}>
        <Text
            style={{
                fontSize: 18,
                fontWeight: "600",
                color: "#111827",
            }}
        >
            {title}
        </Text>
    </View>
);

export default function TasksLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerBackground: () => (
                        <View
                            style={{
                                height: 112,
                                backgroundColor: "#f2f2f2",
                                borderBottomWidth: 1,
                                borderBottomColor: "#e5e5e5",
                            }}
                        />
                    ),
                    headerTitle: () => <Header title="Tasks" />,
                }}
            />

            <Stack.Screen
                name="[taskId]"
                options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerBackground: () => (
                        <View
                            style={{
                                height: 112,
                                backgroundColor: "#f2f2f2",
                                borderBottomWidth: 1,
                                borderBottomColor: "#e5e5e5",
                            }}
                        />
                    ),
                    headerTitle: () => <Header title="Task Details" />,
                }}
            />
        </Stack>
    );
}