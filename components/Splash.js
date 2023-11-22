import {  StyleSheet, Text, View, useWindowDimensions } from "react-native";
import Logo from '../assets/Logo.svg'
import {Image} from 'expo-image'
export default function Splash({change}){
    setTimeout(() => {
        change(1)
    }, 3000);
    const {width, height} = useWindowDimensions()
    return(
        <View style={styles.container}>
            <Image contentFit="contain" style={styles.Logo} source={Logo}/>
        </View>
    )
}
const styles = StyleSheet.create(
    {
        container:{
            height:'100%',
            width:'100%',
            display:'flex',
            justifyContent:'center',
            backgroundColor:'#312537'
            // flex:1,
        },
        main_text:{
            fontSize:40
        },
        Logo:{
            width:400,
            height:400,
        }
    }
)