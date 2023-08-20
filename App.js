import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ClerkLoaded, ClerkProvider } from "@clerk/clerk-expo";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { tokenCache } from "./src/cache";
import Navigator from "./components/Navigator";

const CLERK_PUBLISHABLE_KEY = "pk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

export default function App() {
  return (
    <ClerkProvider
      publishableKey={CLERK_PUBLISHABLE_KEY}
      tokenCache={tokenCache}
    >
      <SafeAreaProvider>
        <NavigationContainer>
          <ClerkLoaded>
            <Navigator />
          </ClerkLoaded>
        </NavigationContainer>
      </SafeAreaProvider>
    </ClerkProvider>
  );
}
