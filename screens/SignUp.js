import * as React from "react";
import {
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
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        firstName,
        lastName,
        emailAddress,
        password,
      });

      // https://docs.clerk.dev/popular-guides/passwordless-authentication
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      navigation.navigate("VerifyCode");
    } catch (err) {
      log("Error:> " + err?.status || "");
      log("Error:> " + err?.errors ? JSON.stringify(err.errors) : err);
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
            value={firstName}
            style={styles.textInput}
            placeholder="First name..."
            placeholderTextColor="#000"
            onChangeText={(firstName) => setFirstName(firstName)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            value={lastName}
            style={styles.textInput}
            placeholder="Last name..."
            placeholderTextColor="#000"
            onChangeText={(lastName) => setLastName(lastName)}
          />
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
