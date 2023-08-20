import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Heading from "../components/Heading";
import { Music } from "lucide-react-native";

export default function MusicScreen() {
  return (
    <SafeAreaView className="flex-1">
      <Heading
        title="Music Generation"
        description="Turn your prompt into music"
        icon={Music}
        bgColor="bg-emerald-500/10"
        color="text-emerald-500"
      />
    </SafeAreaView>
  );
}
