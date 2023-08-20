import { SafeAreaView } from "react-native";
import React from "react";
import Heading from "../components/Heading";
import { Code } from "lucide-react-native";

export default function CodeScreen() {
  return (
    <SafeAreaView className="flex-1">
      <Heading
        title="Code Generation"
        description="Generate code using descriptive text."
        icon={Code}
        bgColor="bg-green-700/10"
        color="text-green-700"
      />
    </SafeAreaView>
  );
}
