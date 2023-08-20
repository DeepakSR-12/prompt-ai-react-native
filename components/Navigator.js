import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "../screens/SignUp";
import SignInScreen from "../screens/SignIn";
import VerifyCodeScreen from "../screens/VerifyCodeScreen";
import Dashboard from "../screens/Dashboard";
import Conversation from "../screens/Conversation";
import MusicScreen from "../screens/Music";
import VideoScreen from "../screens/Video";
import Images from "../screens/Images";
import SettingsScreen from "../screens/Settings";
import CodeScreen from "../screens/CodeScreen";
import Landing from "../screens/Landing";

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <Stack.Navigator
      initialRouteName="Landing"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Conversation" component={Conversation} />
      <Stack.Screen name="Music" component={MusicScreen} />
      <Stack.Screen name="Video" component={VideoScreen} />
      <Stack.Screen name="Code" component={CodeScreen} />
      <Stack.Screen name="Image" component={Images} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="VerifyCode" component={VerifyCodeScreen} />
    </Stack.Navigator>
  );
}
