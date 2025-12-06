import React from "react";
import {Stack, Tabs} from "expo-router";
import {StatusBar} from "expo-status-bar";
import CustomTabNavigation from "@/components/CustomTabNavigation";

const ProtectedLayout = () => {
    return (
        <Tabs screenOptions={{headerShown: false}} tabBar={(props) => <CustomTabNavigation {...props} />}
              initialRouteName="index">
            <Tabs.Screen name="index" options={{title: "Dashboard", headerShown: true, headerTitleAlign: "left"}}/>
            <Tabs.Screen name="tasks" options={{title: "Tasks", headerShown: true}}/>
            <Tabs.Screen name="profile" options={{title: "Profile", headerShown: true}}/>
        </Tabs>
    );
}

export default ProtectedLayout;