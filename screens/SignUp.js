import React, { useState } from "react";
import {
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
import { styles } from "../components/Styles";
import { OAuthButtons } from "../components/OAuth";
import Navbar from "../components/Navbar";

export default function SignUpScreen({ navigation }) {
  const { isLoaded, signUp } = useSignUp();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        emailAddress,
        password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      navigation.navigate("VerifyCode");
    } catch (err) {
      Alert.alert(err?.errors[0]?.message);
    }
  };

  const onSignInPress = () => navigation.replace("SignIn");

  return (
    <SafeAreaView className="flex-1  bg-[#111827]">
      <Navbar />
      <View style={styles.container}>
        <View style={styles.oauthView}>
          <OAuthButtons />
        </View>

        <View style={styles.inputView}>
          <TextInput
            autoCapitalize="none"
            value={emailAddress}
            style={styles.textInput}
            placeholder="Email..."
            placeholderTextColor="#000"
            onChangeText={(email) => setEmailAddress(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            value={password}
            style={styles.textInput}
            placeholder="Password..."
            placeholderTextColor="#000"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <TouchableOpacity style={styles.primaryButton} onPress={onSignUpPress}>
          <Text style={styles.primaryButtonText}>Sign up</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text>Have an account?</Text>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={onSignInPress}
          >
            <Text style={styles.secondaryButtonText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
