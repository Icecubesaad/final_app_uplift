import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import PaymentOptions from "./extras/PaymentOptions";
import Transaction from "./extras/Transaction";
import FInalREchargedScreen from "./extras/FinalRechargedScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./Header";
import Footer from "./Footer";
export default function PaymentGateway() {
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
    <View style={{height:"100%"}}>
      <Header />
      <View style={styles.Container}>
        <View style={styles.ChildContainer}>
          {/* <View style={styles.TextContainer}>
            <Text style={{...styles.ChildContainerText,color:"black"}}>Recharged</Text>
            <Text style={styles.ChildContainerText}>Your Account</Text>
            <Text style={{...styles.ChildContainerText,fontSize:30}}>R ₹ <Text style={{color:"red", fontSize:30}}>0.00</Text></Text>
            </View> */}
          <PaymentOptions/>
          {/* <Transaction/> */}
          {/* <FInalREchargedScreen /> */}
        </View>
      </View>
      <Footer/>
    </View>
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
    backgroundColor:"#C0A7D8",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  ChildContainerText: {
    color: "#FFF",
    fontFamily: "",
    fontSize: 28,
    fontWeight: 600,
    fontFamily: "MontMedium",
  },
  TextContainer: {
    marginLeft: "auto",
    marginRight: "auto",
  },
});
