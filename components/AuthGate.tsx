import React from "react";
import {StatusBar} from "expo-status-bar";
import {Stack} from "expo-router";
import {useAuthData} from "@/hooks/useAuthData";

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
                    <Stack.Screen
                        name="task/[taskDetailsId]"
                        options={{
                            headerShown: false,
                            animation: "fade",
                        }}
                    />
                    <Stack.Screen
                        name="vehicle/[vehicleDetailsId]"
                        options={{
                            headerShown: false,
                            animation: "fade",
                        }}
                    />
                </Stack.Protected>
                <Stack.Protected guard={!isAuthenticated}>
                    <Stack.Screen name="login" options={{headerShown: false, animation: "none"}}/>
                </Stack.Protected>
            </Stack>
        </React.Fragment>
    );
}
export default AuthGate;