import React from "react";
import {Image, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {images} from "@/constants/images";

const SplashScreen = () => {
    return (
        <View className="flex-1">
            <StatusBar style="dark"/>
            <View className="flex-1 justify-center items-center">
                <Image source={images.logo} resizeMode="contain" className="h-32 w-32"/>
            </View>
        </View>
    );
};

export default SplashScreen;