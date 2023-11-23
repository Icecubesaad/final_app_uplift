import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import PaymentOptions from "./extras/PaymentOptions";
import Transaction from "./extras/Transaction";
import FInalREchargedScreen from "./extras/FinalRechargedScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./Header";
import { useState } from "react";
import Footer from "./Footer";
import UserSettings from "./UserSettings";
import { Image } from "expo-image";
import ProfliePic from '../assets/ProfilePic.svg'

import { LinearGradient } from "expo-linear-gradient";
export default function PaymentGateway({change}) {
  const [OpenUserSettings, setOpenUserSettings] = useState(false);
    const [CurrentComponent, setCurrentComponent] = useState(0);
  const [fontsLoaded] = useFonts({
    "Inter-Light": require("../assets/fonts/Inter-Light.ttf"),
    "Roboto-Flex": require("../assets/fonts/RobotoFlex-Regular.ttf"),
    Mont: require("../assets/fonts/Montserrat-Light.ttf"),
    MontBold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    MontMedium: require("../assets/fonts/Montserrat-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <LinearGradient colors={["#6B41A6", "#442E59"]} style={{height:"100%"}}>
      <Header changeScreen={change} />
      <LinearGradient colors={["#6B41A6", "#442E59"]}  style={styles.Container}>
        <View style={styles.ChildContainer}>
            {
  CurrentComponent === 0 ? (
    <>
      <View style={styles.TextContainer}>
        <Text style={{ ...styles.ChildContainerText, color: "black" }}>
          Recharged
        </Text>
        <Text style={styles.ChildContainerText}>Your Account</Text>
        <Text style={{ ...styles.ChildContainerText, fontSize: 30 }}>
          R ₹ <Text style={{ color: "red", fontSize: 30 }}>0.00</Text>
        </Text>
      </View>
    </>
  ) : CurrentComponent === 1 ? (
    <PaymentOptions change={setCurrentComponent} />
  ) : CurrentComponent === 2 ? (
    <Transaction change={setCurrentComponent} />
  ) : CurrentComponent === 3 ? (
    <FInalREchargedScreen  />
  ) : null
}
        </View>
      </LinearGradient>
      {OpenUserSettings?<UserSettings open={setOpenUserSettings}/>:null}
      <Footer change={setCurrentComponent} open={setOpenUserSettings}  />
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  Container: {
    height: "100%",
    backgroundColor: "#7440AE",
    display:"flex",
    justifyContent:"flex-end"
  },
  ChildContainer: {
    height: "90%",
    backgroundColor:"#A47ABF",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  ChildContainerText: {
    color: "#FFF",
    fontSize: 28,
    fontFamily: "MontMedium",
  },
  TextContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop:120
  },
});
