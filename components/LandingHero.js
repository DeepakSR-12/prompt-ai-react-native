import React from "react";
import TypeWriter from "@sucho/react-native-typewriter";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { useAuth } from "@clerk/clerk-expo";

const BACKGROUND = "#263238";
const WHITE = "#ffffff";
const PINK = "#c2185b";

export default function LandingHero() {
  const { isSignedIn } = useAuth();
  const navigation = useNavigation();

  const strings = [
    "Chatbot.",
    "Photo Generation.",
    "Blog Writing.",
    "Mail Writing.",
  ];

  return (
    <View>
      <View className="py-12 items-center font-extrabold">
        <Text className="text-white mb-4 font-bold text-4xl">
          The Best AI Tool for
        </Text>

        <View className="h-10">
          <TypeWriter
            textArray={strings}
            loop
            speed={150}
            delay={1500}
            textStyle={styles.typeWriterText}
            cursorStyle={styles.typeWriterCursorText}
          />
        </View>
      </View>

      <View className="mx-12 space-y-5 items-center">
        <Text className="text-md font-light text-zinc-400">
          Create content using AI 10x faster.
        </Text>

        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#667eea", "#7f53ac", "#f687b3"]}
          className="p-4 flex rounded-full "
        >
          <TouchableOpacity
            className="font-semibold"
            onPress={() =>
              navigation.navigate(isSignedIn ? "Dashboard" : "SignUp")
            }
          >
            <Text className="text-white text-lg text-center">
              Start Generating For Free
            </Text>
          </TouchableOpacity>
        </LinearGradient>
        <Text className="text-lg font-light text-zinc-400">
          Create content using AI 10x faster.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: BACKGROUND,
    justifyContent: "center",
  },
  typeWriterText: {
    color: "#db2777",
    backgroundColor: "transparent",
    fontSize: 32,
    fontWeight: "500",
  },
  typeWriterCursorText: {
    fontSize: 0,
    color: "#111827",
  },
});
