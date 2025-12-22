import React from "react";
import {Stack, Tabs} from "expo-router";
import {StatusBar} from "expo-status-bar";
import CustomTabNavigation from "@/components/CustomTabNavigation";
import {View} from "react-native";

const ProtectedLayout = () => {
    return (
        <Tabs screenOptions={{headerShown: false}} tabBar={(props) => <CustomTabNavigation {...props} />}
              initialRouteName="index">
            <Tabs.Screen name="index"
                         options={{
                             title: "Dashboard",
                             headerShown: true,
                             animation: "fade",
                             headerTitleAlign: "left",
                             headerStyle: {
                                 height: 110,
                             },
                             headerShadowVisible: false,  // remove default shadow
                             headerBackground: () => (
                                 <View
                                     style={{
                                         flex: 1,
                                         backgroundColor: "#f2f2f2",
                                         borderBottomWidth: 1,
                                         borderBottomColor: "#e5e5e5",  // your custom shadow color
                                     }}
                                 />
                             ),
                         }}
            />
            <Tabs.Screen name="tasks"
                         options={{
                             title: "Tasks",
                             headerShown: true,
                             animation: "fade",
                             headerTitleAlign: "left",
                             headerStyle: {
                                 height: 110,
                             },
                             headerShadowVisible: false,  // remove default shadow
                             headerBackground: () => (
                                 <View
                                     style={{
                                         flex: 1,
                                         backgroundColor: "#f2f2f2",
                                         borderBottomWidth: 1,
                                         borderBottomColor: "#e5e5e5",  // your custom shadow color
                                     }}
                                 />
                             ),
                         }}
            />
            <Tabs.Screen name="profile"
                         options={{
                             title: "Profile",
                             headerShown: true,
                             animation: "fade",
                             headerTitleAlign: "left",
                             headerStyle: {
                                 height: 110,
                             },
                             headerShadowVisible: false,  // remove default shadow
                             headerBackground: () => (
                                 <View
                                     style={{
                                         flex: 1,
                                         backgroundColor: "#f2f2f2",
                                         borderBottomWidth: 1,
                                         borderBottomColor: "#e5e5e5",  // your custom shadow color
                                     }}
                                 />
                             ),
                         }}
            />
        </Tabs>
    );
}

export default ProtectedLayout;