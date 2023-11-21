import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import LinearGradient from "react-native-linear-gradient";
export default function Header() {
    return (
      <LinearGradient colors={["#312537", "#7440AE"]} style={{ height: "8%" }}>
        <View style={styles.HeadingContainer}>
          <AntDesign name="arrowleft" size={24} color="white" />
          <Text style={styles.HeadingText}>My Wallet</Text>
        </View>
      </LinearGradient>
    );
  }
  
  const styles = StyleSheet.create({
    HeadingText: {
      fontSize: 25,
      color: "white",
    },
    HeadingContainer: {
      backgroundColor: "#2A0955",
      paddingLeft: 20,
      paddingTop: 10,
      paddingBottom: 10,
      flex: 1,
      gap: 10,
      width: "100%",
      height: "100%",
      flexDirection: "row",
      alignItems: "center",
    },
  });
