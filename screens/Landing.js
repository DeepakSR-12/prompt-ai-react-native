import { SafeAreaView, ScrollView } from "react-native";
import Navbar from "../components/Navbar";
import LandingHero from "../components/LandingHero";
import LandingContent from "../components/LandingContent";

const Landing = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#111827]">
      <Navbar />
      <ScrollView>
        <LandingHero />
        <LandingContent />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Landing;
