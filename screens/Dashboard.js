import React from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { cn, tools } from "../src/utils";
import { ArrowRight } from "lucide-react-native";
import Navbar from "../components/Navbar";

function Dashboard({ navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-[#111827]">
      <Navbar />
      <View className="mt-8 space-y-4">
        <Text className="text-2xl text-white font-bold text-center">
          Explore the power of AI
        </Text>
        <Text className="text-md text-white text-muted-foreground font-light text-center">
          Chat with the smartest AI - Experience the power of AI
        </Text>
      </View>
      <View className="flex-1 mt-8">
        {tools.map(({ href, label, color, icon: Icon }) => (
          <TouchableOpacity
            key={label}
            onPress={() => navigation.navigate(href)}
            className="group flex flex-row p-4 w-full justify-center items-center"
          >
            <View className="flex flex-1 flex-row items-center gap-x-4">
              <View className={cn("w-fit p-2 rounded-md")}>
                <Icon size={25} color={color} />
              </View>
              <View className="font-semibold">
                <Text className="text-zinc-400 text-lg focus:text-white">
                  {label}
                </Text>
              </View>
            </View>
            <ArrowRight size={25} color="#A1A1AA" />
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

export default Dashboard;
