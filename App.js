import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import MainPage from "./components/MainPage";
import Splash from "./components/Splash";
import Slider from "./components/Slider";
import PaymentGateway from "./components/PaymentGateway";
import Footer from "./components/Footer";
import IntroScreens from "./components/IntroScreens";
import NumberEnter from "./components/NumberEnter";
import IncomingCall from "./components/IncomingCall";
import OtpInput from "./components/OtpInput";
import AppIntroSlider from "react-native-app-intro-slider";
import { useFonts } from "expo-font";
import { useCallback } from "react";
export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Roboto-Flex": require("./assets/fonts/RobotoFlex-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  const slides = [
    {
      key: "slide1",
      text: (
        <Text style={{ fontFamily: "Roboto-Flex", fontSize: 35, marginTop: 20, color: "white", textAlign: "center", fontWeight: "700" }}>
          Im here for you {"\n"} During this tough time
        </Text>
      ),
      image: require("./assets/firstSliderScreen.png"),
    },
    {
      key: "slide2",
      text: (
        <Text style={{ fontFamily: "Roboto-Flex", fontSize: 35, marginTop: 20, color: "white", textAlign: "center", fontWeight: "700" }}>
          <Text style={{ color: "#C0A7D8" }}>Stress</Text> has no {"\n"} boundaries of age, {"\n"} gender, ethnicity, or {"\n"} religion
        </Text>
      ),
      image: require("./assets/SecondSliderScreen.png"),
    },
    {
      key: "slide3",
      text: (
        <Text style={{ fontFamily: "Roboto-Flex", fontSize: 35, marginTop: 20, color: "white", textAlign: "center", fontWeight: "700" }}>
          Stay <Text style={{ color: "#C0A7D8" }}>Happy</Text> and {"\n"} surround yourself {"\n"} with <Text style={{ color: "#C0A7D8" }}>Uplifting</Text>{" "}
          People.
        </Text>
      ),
      image: require("./assets/ThirdScreenSlider.png"),
    },
  ];
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <AppIntroSlider
          data={slides}
          showNextButton={false}
          showDoneButton={false}
          renderItem={IntroScreens}
          dotStyle={{width:15,height:15,backgroundColor:'#C0A7D8',borderRadius:"100%"}}
          activeDotStyle={{
            width:20,height:20,backgroundColor:'#C0A7D8',borderRadius:"100%"
          }}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
