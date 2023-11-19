import { Image } from "expo-image";
import { View, Text, TouchableOpacity } from "react-native";
import Tick from "../../assets/Tick.svg";
import { useFonts } from "expo-font";
import { useCallback } from "react";
export default function FInalREchargedScreen() {
  const [fontsLoaded] = useFonts({
    "Inter-Light": require("../../assets/fonts/Inter-Light.ttf"),
    "Roboto-Flex": require("../../assets/fonts/RobotoFlex-Regular.ttf"),
    Mont: require("../../assets/fonts/Montserrat-Light.ttf"),
    MontBold: require("../../assets/fonts/Montserrat-SemiBold.ttf"),
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
      <View
        style={{
          position: "absolute",
          top: -120,
          display: "flex",
          flexDirection: "row",
          gap: 20,
          width:"100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity>
          <Text
            style={{ fontSize: 24, color: "white", fontFamily: "MontBold" }}
          >
            Recharge
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{ fontSize: 24, color: "white", fontFamily: "MontBold" }}
          >
            Transaction
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "50%",
          width: "100%",
        }}
      >
        <View>
          <View>
            <Image source={Tick} />
          </View>
        </View>
        <Text
          style={{ color: "#392E40", fontFamily: "MontBold", fontSize: 30 }}
        >
          Recharged
        </Text>
        <Text style={{ fontFamily: "MontBold", color: "white", fontSize: 24 }}>
          Your new balance is
        </Text>
        <Text style={{ fontFamily: "MontBold", color: "white", fontSize: 24 }}>
          R$ 9.876,99
        </Text>
      </View>
    </View>
  );
}
