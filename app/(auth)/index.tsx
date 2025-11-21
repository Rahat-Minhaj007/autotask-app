import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {Image} from "expo-image";
import {images} from "@/modules/constants/images";
import {Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";

const Login = () => {
    return (
      <>
          <StatusBar style="light" backgroundColor="#0a0a0a"/>
          <SafeAreaView className="flex-1 bg-neutral-950 ">

              <View className="flex-1 justify-center">
                  <Image source={images.startupBg} style={{ width: 320, height: 320 }} contentFit="cover"   />

              </View>

              <Text className="text-white p-5" >
                  welcome
              </Text>

          </SafeAreaView>
      </>
    );
};

export default Login;