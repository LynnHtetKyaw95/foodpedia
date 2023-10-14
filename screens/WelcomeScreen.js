import { View, Text, Image, SafeAreaView } from "react-native";
import React, { useEffect } from "react";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => navigation.navigate("Home"), 2000);
  }, []);

  return (
    <SafeAreaView className="flex-1 justify-center items-center space-y-10 bg-amber-300">
      <StatusBar style="dark" />

      {/* logo image with rings */}
      <View className="bg-white/20 rounded-full" style={{ padding: hp(5.5) }}>
        <View className="bg-white/20 rounded-full" style={{ padding: hp(5) }}>
          <Image
            source={require("../assets/images/welcome.png")}
            style={{ width: hp(20), height: hp(20) }}
          />
        </View>
      </View>

      {/* title and punchline */}
      <View className="flex items-center space-y-2">
        <Text
          style={{ fontSize: hp(4) }}
          className="font-bold text-gray-700 tracking-widest"
        >
          FoodPedia
        </Text>
        <Text
          style={{ fontSize: hp(1.5) }}
          className="font-bold text-gray-500 tracking-widest"
        >
          Where every flavor tells a story! 😋
        </Text>
      </View>
    </SafeAreaView>
  );
}
