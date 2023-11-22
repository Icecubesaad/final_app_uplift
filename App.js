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
import { useCallback,useEffect,setTimeout, useState } from "react";
export default function App() {
  const [current, setcurrent] = useState(0);
  const increment=()=>{
    setcurrent(e=>e+1)
  }
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
        <Text
          style={{
            fontFamily: "Roboto-Flex",
            fontSize: 25,
            marginTop: 20,
            color: "white",
            textAlign: "center",
          }}
        >
          Im here for you {"\n"} During this tough time
        </Text>
      ),
      image: require("./assets/firstSliderScreen.png"),
    },
    {
      key: "slide2",
      text: (
        <Text
          style={{
            fontFamily: "Roboto-Flex",
            fontSize: 25,
            marginTop: 20,
            color: "white",
            textAlign: "center",
          }}
        >
          <Text style={{ color: "#C0A7D8" }}>Stress</Text> has no {"\n"}{" "}
          boundaries of age, {"\n"} gender, ethnicity, or {"\n"} religion
        </Text>
      ),
      image: require("./assets/SecondSliderScreen.png"),
    },
    {
      key: "slide3",
      text: (
        <Text
          style={{
            fontFamily: "Roboto-Flex",
            fontSize: 25,
            marginTop: 20,
            color: "white",
            textAlign: "center",
          }}
        >
          Stay <Text style={{ color: "#C0A7D8" }}>Happy</Text> and {"\n"}{" "}
          surround yourself {"\n"} with{" "}
          <Text style={{ color: "#C0A7D8" }}>Uplifting</Text> People.
        </Text>
      ),
      image: require("./assets/ThirdScreenSlider.png"),
    },
  ];
  const listComponent=[<Splash change={setcurrent} />,<AppIntroSlider data={slides} renderItem={IntroScreens} showNextButton={false} onDone={()=>{setcurrent(e=>e+1)}} />,<NumberEnter increment={increment} />,<OtpInput increment={increment}/>,<PaymentGateway change={setcurrent} />]
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={{ height: "100%" }}>
          {listComponent[current]}
          {/* <Splash/> */}
        </View>
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
