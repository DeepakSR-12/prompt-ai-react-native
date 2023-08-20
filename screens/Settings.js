import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Heading from "../components/Heading";
import { Settings } from "lucide-react-native";

export default function SettingsScreen() {
  return (
    <SafeAreaView className="flex-1">
      <Heading
        title="Settings"
        description="Manage account settings."
        icon={Settings}
        color="text-gray-700"
        bgColor="bg-gray-700/10"
      />
    </SafeAreaView>
  );
}
