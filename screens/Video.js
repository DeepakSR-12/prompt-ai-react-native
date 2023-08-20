import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Heading from "../components/Heading";
import { Video } from "lucide-react-native";

export default function VideoScreen() {
  return (
    <SafeAreaView className="flex-1">
      <Heading
        title="Video Generation"
        description="Turn your prompt into video"
        icon={Video}
        bgColor="bg-orange-700/10"
        color="text-orange-700"
      />
    </SafeAreaView>
  );
}
