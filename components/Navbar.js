import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  Modal,
  Alert,
} from "react-native";
import { useAuth } from "@clerk/clerk-expo";
import { useNavigation } from "@react-navigation/native";
import { UserCircleIcon } from "lucide-react-native";

export default function Navbar() {
  const [modalVisible, setModalVisible] = useState(false);
  const { isSignedIn, signOut } = useAuth();
  const navigation = useNavigation();

  const handleSignOut = async () => {
    await signOut()?.then(() => navigation.navigate("Landing"));
    Alert.alert("You are successfully signed out");
    setModalVisible(false);
  };

  return (
    <View className="flex flex-row items-center p-5 justify-between">
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(isSignedIn ? "Dashboard" : "Landing")
        }
        className="flex-row flex-start items-center"
      >
        <Image
          source={require("../assets/logo.png")}
          className="w-10 h-10 mr-2 rounded-full"
        />
        <Text className="text-3xl font-bold text-white">Prompt AI</Text>
      </TouchableOpacity>

      {isSignedIn ? (
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <UserCircleIcon size={30} color="#A1A1AA" />
        </TouchableOpacity>
      ) : null}

      <Modal
        animationType="fade"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View className="flex-1 justify-center items-center mt-5">
          <View className="m-5 bg-white rounded-3xl p-9 items-center shadow-md">
            <Text className="mb-4 text-center">
              Are you sure you want to log out?
            </Text>
            <View className="flex-row space-x-2">
              <TouchableOpacity
                className="p-2 border rounded-md"
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text>No</Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="p-2 shadow-sm bg-[#192339] border-none  rounded-md"
                onPress={handleSignOut}
              >
                <Text className="text-white">Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
