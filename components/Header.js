import { SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import { StyleSheet } from "react-native"
import {AntDesign} from '@expo/vector-icons'
export default function Header() {
    return (
        <SafeAreaView>

        <View>
            <View style={style.HeadingContainer}>
                <AntDesign name="arrowleft" size={24} color="white"/>
                <Text style={style.HeadingText}>My Wallet</Text>
            </View>
           
        </View>

        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    HeadingText:{
        fontSize:25,
        color:"white"
    },
    HeadingContainer:{
        backgroundColor:"#2A0955",
        paddingLeft:20,
        paddingTop:10,
        paddingBottom:10,
        flex:1,
        gap:10,
        height:"10%",
        flexDirection:"row",
        alignItems:"center"
    }
})
