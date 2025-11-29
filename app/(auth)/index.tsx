import React from "react";
import {
    Image,
    ImageBackground,
    Keyboard, KeyboardAvoidingView, Platform, ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";
import {StatusBar} from "expo-status-bar";
import {images} from "@/modules/constants/images";
import {SafeAreaView} from "react-native-safe-area-context";
import {router} from "expo-router";
import {LinearGradient} from "expo-linear-gradient";
import {Feather} from "@expo/vector-icons";

const Login = () => {

    return (
        <View className="flex-1 relative">
            <StatusBar style="dark"/>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView className="flex-1 bg-white">

                    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
                                          className="flex-1">

                        <View className="justify-center items-center" style={{height: 300}}>
                            <Image source={images.loginImage} className="h-96 w-96" resizeMode="contain"/>
                        </View>
                        <View className="px-10">
                            <Text className="text-dark-200 font-bold text-2xl tracking-wider pb-3">Welcome Back!</Text>
                            <Text className="text-dark-200 pb-5 tracking-wider">Please sign in to continue</Text>
                        </View>
                        <ScrollView keyboardShouldPersistTaps="handled" className="flex-1 px-10">
                            <View
                                className="flex flex-row items-center justify-center bg-slate-50 rounded-lg p-4 mb-5 border border-slate-200">
                                <Feather name="user" size={16} color="gray"/>

                                <TextInput
                                    className="flex-1 ml-3 p-1.5 border-l border-slate-300"
                                    placeholder="Username"
                                    placeholderTextColor="#888"
                                    keyboardType="email-address"
                                />
                            </View>
                            <View
                                className="flex flex-row items-center justify-center bg-slate-50 rounded-lg p-4 mb-5 border border-slate-200">
                                <Feather name="lock" size={16} color="gray"/>

                                <TextInput
                                    className="flex-1 ml-3 p-1.5 border-l border-slate-300"
                                    placeholder="Password"
                                    placeholderTextColor="#888"
                                    secureTextEntry
                                />

                                <Feather name="eye-off" size={16} color="gray"/>
                            </View>

                            <View className="justify-end items-end">
                                <Text className="text-gray-500 font-medium pb-5 tracking-wider">
                                    Forgot password?
                                </Text>
                            </View>
                            <TouchableOpacity
                                className="bg-dark-200 py-4 rounded-lg w-full flex-row items-center justify-center"
                                onPress={() => router.push("/")}
                            >
                                <Text className="text-white text-xl font-semibold">
                                    Login
                                </Text>
                                {/*<Feather name="arrow-right" size={20} color="black"/>*/}
                            </TouchableOpacity>
                        </ScrollView>
                    </KeyboardAvoidingView>
                </SafeAreaView>
            </TouchableWithoutFeedback>

        </View>
    );
};

export default Login;