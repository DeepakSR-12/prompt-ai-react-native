import { View, Text } from "react-native";
import React from "react";
import { testimonials } from "../src/utils";

export default function LandingContent() {
  return (
    <View className="p-10">
      <Text className="text-center text-3xl text-white font-extrabold mb-10">
        Testimonials
      </Text>
      <View className="flex space-y-4">
        {testimonials.map(({ description, name, title }) => (
          <View
            key={description}
            className="rounded-lg p-6 shadow-sm bg-[#192339] border-none"
          >
            <View className="leading-none tracking-tight flex justify-center gap-x-2">
              <Text className="text-2xl text-white font-semibold">{name}</Text>
              <Text className="text-zinc-400 text-sm">{title}</Text>
            </View>
            <View className="p-6 pt-4 px-0">
              <Text className="text-white text-lg">{description}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
