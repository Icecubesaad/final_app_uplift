import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import PaymentOptions from "./extras/PaymentOptions";
import Transaction from "./extras/Transaction";
import FInalREchargedScreen from "./extras/FinalRechargedScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./Header";
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
    <View>
      <Header />
      <View style={styles.Container}>
        
        <View style={styles.ChildContainer}>
          {/* <View style={styles.TextContainer}>
            <Text style={{...styles.ChildContainerText,color:"black"}}>Recharged</Text>
            <Text style={styles.ChildContainerText}>Your Account</Text>
            <Text style={{...styles.ChildContainerText,fontSize:30}}>R ₹ <Text style={{color:"red", fontSize:30}}>0.00</Text></Text>
            </View> */}
          {/* <PaymentOptions/> */}
          {/* <Transaction/> */}
          <FInalREchargedScreen />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Container: {
    height: "94vh",
    backgroundColor: "purple",
  },
  ChildContainer: {
    height: "100%",
    marginTop: "15vh",
    backgroundColor: "#A47ABF",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    paddingTop: 80,
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
