import {View, Text, TouchableOpacity} from "react-native";

type ErrorFallbackProps = {
    error: Error;
    resetError: () => void;
};

const ErrorFallback = ({error, resetError}: ErrorFallbackProps) => {
    return (
        <View
            style={{
                flex: 1,
                padding: 24,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white"
            }}
        >
            <Text style={{fontSize: 24, fontWeight: "600", marginBottom: 10}}>
                Something went wrong
            </Text>

            <Text
                style={{color: "#6B7280", textAlign: "center", marginBottom: 20}}
            >
                {error?.message}
            </Text>

            <TouchableOpacity
                onPress={resetError}
                style={{
                    backgroundColor: "#2563EB",
                    paddingHorizontal: 18,
                    paddingVertical: 10,
                    borderRadius: 8
                }}
            >
                <Text style={{color: "white", fontSize: 16}}>Reload App</Text>
            </TouchableOpacity>
        </View>
    );
}

export default ErrorFallback;
