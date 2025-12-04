import React, {useEffect, useState} from "react";
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
import {images} from "@/constants/images";
import {SafeAreaView} from "react-native-safe-area-context";
import {router} from "expo-router";
import {Feather} from "@expo/vector-icons";
import {useLoginMutation} from "@/services/api/authApi";
import {useDispatch} from "react-redux";
import {handleLoginSuccessAction} from "@/features/auth/authHelpers";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {AppDispatch} from "@/redux/store";

const LoginScreen = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const [login, {isLoading}] = useLoginMutation();
    const dispatch = useDispatch<AppDispatch>();

    // console.log("login Data", loginData);
    // console.log("Login Mutation", login);

    const handleLoginChange = (name: string, value: string) => {
        setLoginData((prev) => ({...prev, [name]: value}));
    }

    const handleLoginSubmit = async () => {
        const response = await login(loginData).unwrap();

        console.log("response data=====>>", response?.data?.token);
        if (response?.data?.token) {
            await dispatch(handleLoginSuccessAction(response?.data));
            router.replace("/(manager)");
        }
    }

    const handlegetAsynData = async () => {
        const token = await AsyncStorage.getItem("token");
        const userInfo = await AsyncStorage.getItem("userInfo");

        console.log("AsyncStorage Token:", token);
        console.log("AsyncStorage User:", userInfo);
    }

    useEffect(() => {
        handlegetAsynData();
    }, [])

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
                                onPress={() => handleLoginSubmit()}
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