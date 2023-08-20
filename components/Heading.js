import { View, Text } from "react-native";
import React from "react";
import { cn } from "../src/utils";

const Heading = ({ title, description, icon: Icon, color, bgColor }) => {
  return (
    <View className="flex flex-row items-center p-8 gap-x-3 mb-8">
      <View className={cn("w-fit p-2 rounded-md", bgColor)}>
        <Icon className={cn("w-10 h-10", color)} />
      </View>
      <View>
        <Text className="text-3xl font-bold">{title}</Text>
        <Text className="text-sm text-muted-foreground">{description}</Text>
      </View>
    </View>
  );
};

export default Heading;
