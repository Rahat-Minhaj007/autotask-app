import React from "react";
import {Text, View} from "react-native";
import {Stack} from "expo-router";
import Login from "@/app/(auth)/index";

const AuthLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{headerShown: false, title: "Login"}}/>
        </Stack>
    );
};

export default AuthLayout;