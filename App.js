import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "./screens/Dashboard";
import Conversation from "./screens/Conversation";
import MusicScreen from "./screens/Music";
import VideoScreen from "./screens/Video";
import Images from "./screens/Images";
import SettingsScreen from "./screens/Settings";
import CodeScreen from "./screens/CodeScreen";
import { ClerkLoaded, ClerkProvider } from "@clerk/clerk-expo";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { tokenCache } from "./src/cache";
import Landing from "./screens/Landing";
import SignUpScreen from "./screens/SignUp";
import SignInScreen from "./screens/SignIn";
import VerifyCodeScreen from "./screens/VerifyCodeScreen";

const Stack = createNativeStackNavigator();

const CLERK_PUBLISHABLE_KEY = "pk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

export default function App() {
  const { isSignedIn } = [];
  return (
    <ClerkProvider
      publishableKey={CLERK_PUBLISHABLE_KEY}
      tokenCache={tokenCache}
    >
      <SafeAreaProvider>
        <NavigationContainer>
          <ClerkLoaded>
            <Stack.Navigator
              initialRouteName="Dashboard"
              screenOptions={{ headerShown: false }}
            >
              {isSignedIn ? (
                <>
                  <Stack.Screen name="Dashboard" component={Dashboard} />
                  <Stack.Screen name="Conversation" component={Conversation} />
                  <Stack.Screen name="Music" component={MusicScreen} />
                  <Stack.Screen name="Video" component={VideoScreen} />
                  <Stack.Screen name="Code" component={CodeScreen} />
                  <Stack.Screen name="Image" component={Images} />
                  <Stack.Screen name="Settings" component={SettingsScreen} />
                </>
              ) : (
                <>
                  <Stack.Screen name="Landing" component={Landing} />
                  <Stack.Screen name="SignUp" component={SignUpScreen} />
                  <Stack.Screen name="SignIn" component={SignInScreen} />
                  <Stack.Screen
                    name="VerifyCode"
                    component={VerifyCodeScreen}
                  />
                </>
              )}
            </Stack.Navigator>
          </ClerkLoaded>
        </NavigationContainer>
      </SafeAreaProvider>
    </ClerkProvider>
  );
}
