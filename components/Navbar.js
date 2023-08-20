import { View, TouchableOpacity, Image, Text } from "react-native";
import React from "react";
import { useAuth } from "@clerk/clerk-expo";
import { useNavigation } from "@react-navigation/native";

export default function Navbar() {
  const { isSignedIn } = useAuth();
  const navigation = useNavigation();

  return (
    <View className="flex flex-row items-center p-5 justify-start">
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(isSignedIn ? "Dashboard" : "Landing")
        }
        className="flex-row flex-start items-center"
      >
        <Image
          source={require("../assets/logo.png")}
          className="w-10 h-10 mr-2 rounded-full"
        />
        <Text className="text-3xl font-bold text-white">Prompt AI</Text>
      </TouchableOpacity>
    </View>
  );
}
