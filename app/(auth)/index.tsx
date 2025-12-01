import React, {useState} from "react";
import {
    Image,
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
import {Feather} from "@expo/vector-icons";

const LoginScreen = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    console.log(loginData);

    const handleLoginChange = (name: string, value: string) => {
        setLoginData((prev) => ({...prev, [name]: value}));
    }

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
                        <View className="px-8">
                            <Text className="text-dark-200 font-bold text-2xl tracking-wider pb-3">Welcome Back!</Text>
                            <Text className="text-dark-200 pb-5 tracking-wider">Please sign in to continue</Text>
                        </View>
                        <ScrollView keyboardShouldPersistTaps="handled" className="flex-1 px-8">
                            <View
                                className="flex flex-row items-center justify-center bg-slate-50 rounded-lg p-4 mb-5 border border-slate-200">
                                <Feather name="mail" size={16} color="gray"/>

                                <TextInput
                                    className="flex-1 ml-3 p-1.5 border-l border-slate-300"
                                    placeholder="Email"
                                    placeholderTextColor="#888"
                                    keyboardType="email-address"
                                    value={loginData.email}
                                    onChangeText={(text) => handleLoginChange("email", text)}
                                />
                            </View>
                            <View
                                className="flex flex-row items-center justify-center bg-slate-50 rounded-lg p-4 mb-5 border border-slate-200">
                                <Feather name="lock" size={16} color="gray"/>

                                <TextInput
                                    className="flex-1 ml-3 p-1.5"
                                    placeholder="Password"
                                    placeholderTextColor="#888"
                                    secureTextEntry={!showPassword}   // key part
                                    value={loginData.password}
                                    onChangeText={(text) => handleLoginChange("password", text)}
                                />

                                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                    <Feather
                                        name={showPassword ? "eye" : "eye-off"}
                                        size={18}
                                        color="gray"
                                    />
                                </TouchableOpacity>
                            </View>

                            <View className="justify-end items-end">
                                <Text className="text-gray-500 font-medium pb-5 tracking-wider">
                                    Forgot password?
                                </Text>
                            </View>
                            <TouchableOpacity
                                className="bg-dark-200 py-[1.2rem] rounded-lg w-full "
                                onPress={() => router.push("/")}
                            >
                                <Text className="text-white text-xl font-semibold text-center">
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

export default LoginScreen;