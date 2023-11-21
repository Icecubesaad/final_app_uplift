import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";

export default function IntroScreens({item}) {
  return (
    <View style={styles.Container}>
      <Image source={item.image} style={styles.Image} />
      {item.text}
      {/* <Button/> */}
    </View>
  );
}
const styles = StyleSheet.create({
  Image: {
    width: 300,
    height: 300,
  },
  Container: {
    height: "100%",
    backgroundColor: "#2d1b46",
    display: "flex",
    justifyContent: "center",
    width:"100%",
    alignItems: "center",
  },
});
