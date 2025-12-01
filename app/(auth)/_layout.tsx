import React from "react";
import {Stack} from "expo-router";

const AuthLayout = () => {
    return (
        <Stack>
            {/*<Stack.Screen name="index" options={{headerShown: false, title: "StartUp"}}/>*/}
            <Stack.Screen name="index" options={{headerShown: false, title: "LoginScreen"}}/>
        </Stack>
    );
};

export default AuthLayout;