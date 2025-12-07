import React from "react";
import {StatusBar} from "expo-status-bar";
import {Stack} from "expo-router";
import {useAuthData} from "@/hooks/useAuthData";
import {TouchableOpacity} from "react-native";
import Feather from "@expo/vector-icons/Feather";

const AuthGate = () => {
    const {isAuthenticated, loading} = useAuthData();
    if (loading) return null;
    console.log("Is Authenticated!", isAuthenticated);
    return (
        <React.Fragment>
            <StatusBar style="dark"/>
            <Stack>
                <Stack.Protected guard={isAuthenticated}>
                    <Stack.Screen name="(protected)" options={{headerShown: false, animation: "none"}}/>
                </Stack.Protected>
                <Stack.Protected guard={!isAuthenticated}>
                    <Stack.Screen name="login" options={{headerShown: false, animation: "none"}}/>
                </Stack.Protected>
            </Stack>
        </React.Fragment>
    );
}
export default AuthGate;