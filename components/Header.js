import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import LinearGradient from "react-native-linear-gradient";
import { useRouter } from "expo-router";
export default function Header({changeScreen}) {
    const router=useRouter()
    const change=()=>{
        changeScreen(2)
    }
    return (
      <View colors={["#312537", "#7440AE"]} style={{ height: "8%" }}>
        <View style={styles.HeadingContainer}>
          <TouchableOpacity onPress={change}><AntDesign name="arrowleft" size={24} color="white" /></TouchableOpacity>
          <Text style={styles.HeadingText}>My Wallet</Text>
        </View>
      </View>
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
