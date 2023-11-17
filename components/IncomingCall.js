import { View,StyleSheet } from "react-native";
import { Image } from "expo-image";
import ProfilePic from '../assets/CallPfp.svg'
export default function IncomingCall(){
    return(
    <View style={styles.Container}>
        <Image source={ProfilePic} style={{width:200,height:200}} />
    </View>
    )
}
const styles = StyleSheet.create({
    Image:{
        width:200,
        height:300
    },
    Container:{
        height:'100vh',
        width:'100%',
        background: "linear-gradient(0deg, #312537 0%, #7440AE 100%)",
        display:'flex',
        justifyContent:'center',
        alignItems:'center'

    }
})