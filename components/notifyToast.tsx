import {View, Text} from "react-native";
import {BaseToast, ErrorToast} from "react-native-toast-message";

export const toastConfig = {
    success: (props: any) => (
        <BaseToast
            {...props}
            style={{
                height: 80,
                borderLeftWidth: 6,
                borderLeftColor: "#22C55E", // green-500
                zIndex:100
            }}
            contentContainerStyle={{paddingHorizontal: 16}}
            text1Style={{
                fontSize: 16,
                fontWeight: "600",
            }}
            text2Style={{
                fontSize: 14,
            }}
        />
    ),

    error: (props: any) => (
        <ErrorToast
            {...props}
            style={{
                height: 90,
                borderLeftWidth: 6,
                borderLeftColor: "#EF4444", // red-500
            }}
            contentContainerStyle={{paddingHorizontal: 16}}
            text1Style={{
                fontSize: 16,
                fontWeight: "600",
            }}
            text2Style={{
                fontSize: 14,
            }}
        />
    ),
};
