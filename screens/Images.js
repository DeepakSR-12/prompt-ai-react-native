import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Heading from "../components/Heading";
import { ImageIcon } from "lucide-react-native";

export default function Images() {
  return (
    <SafeAreaView className="flex-1">
      <Heading
        title="Image Generation"
        description="Turn your prompt into an image."
        icon={ImageIcon}
        bgColor="bg-pink-700/10"
        color="text-pink-700"
      />
    </SafeAreaView>
  );
}
