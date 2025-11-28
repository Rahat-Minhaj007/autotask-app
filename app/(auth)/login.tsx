import React from "react";
import {
    Image,
    ImageBackground,
    Keyboard, ScrollView,
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

const Login = () => {

    return (
        <>
            <StatusBar style="dark" backgroundColor="#"/>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView className="flex-1 bg-white">

                    {/*<View className="h-[50vh] bg-dark-200 rounded-b-[2rem]" >*/}

                    {/*</View>*/}

                    {/*<ImageBackground source={images.loginImage} className="h-[50vh] rounded-b-[2rem] overflow-hidden"*/}
                    {/*                 resizeMode="cover"*/}
                    {/*                 imageStyle={{borderBottomLeftRadius: 34, borderBottomRightRadius: 34}}>*/}
                    {/*    <View className="absolute inset-0 bg-black/20"/>*/}
                    {/*</ImageBackground>*/}
                    <View className=" justify-center items-center">
                        <Image source={images.loginImage} className="h-96 w-96" resizeMode="contain"/>
                    </View>
                    <Text className="text-dark-200 font-bold text-2xl text-center">Login</Text>
                    <ScrollView className="flex-1 px-10 pt-5">
                        <TextInput
                            className="bg-white rounded-lg p-4 mb-4"
                            placeholder="Username"
                            placeholderTextColor="#888"
                            keyboardType="email-address"
                        />
                        <TextInput
                            className="bg-white rounded-lg p-4 mb-4"
                            placeholder="Password"
                            placeholderTextColor="#888"
                            secureTextEntry
                        />
                        <TouchableOpacity
                            className="bg-dark-200 p-5 mx-5 rounded-lg w-full flex-row items-center justify-center"
                            onPress={() => router.push("/(auth)/login")}
                        >
                            <Text className="text-white text-xl font-semibold">
                                Login
                            </Text>
                            {/*<Feather name="arrow-right" size={20} color="black"/>*/}
                        </TouchableOpacity>
                    </ScrollView>
                </SafeAreaView>
            </TouchableWithoutFeedback>

        </>
    );
};

export default Login;