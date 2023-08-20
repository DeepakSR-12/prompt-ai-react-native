import { Image, Text, View } from "react-native";

const Empty = ({ label }) => {
  return (
    <View className="p-20 items-center">
      <Image
        source={require("../assets/empty.png")}
        className="w-60 h-60 mr-2 rounded-full"
      />
      <Text className="text-sm text-muted-foreground text-center">{label}</Text>
    </View>
  );
};

export default Empty;
