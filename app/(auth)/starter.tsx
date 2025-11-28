import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {images} from "@/modules/constants/images";
import {ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {Feather} from "@expo/vector-icons";
import {router} from "expo-router";

const StartUp = () => {
    return (
        <>
            <StatusBar style="light" backgroundColor="#0a0a0a"/>
            <ImageBackground source={images.startupBg} imageStyle={{resizeMode: "cover"}} className="flex-1">
                {/* Dark overlay */}
                <View className="absolute inset-0 bg-black/20"/>
                <SafeAreaView className="flex-1 p-10">

                    <View className="flex-1 justify-end items-center">
                        <Text className="text-white font-bold text-4xl py-5">
                            Enjoy the Luxury You Deserve.
                        </Text>
                        <Text className="font-medium text-neutral-400 pb-5">
                            Discover Japan’s finest cars, inspected and ready to ship.
                        </Text>
                        <TouchableOpacity
                            className="bg-white p-5 mx-5 rounded-lg w-full flex-row items-center justify-center"
                            onPress={() => router.push("/(auth)/login")}
                        >
                            <Text className="text-dark-200 text-xl font-semibold">
                                Get Started
                            </Text>
                            {/*<Feather name="arrow-right" size={20} color="black"/>*/}
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </>
    );
};

export default StartUp;