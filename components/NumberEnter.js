import { Image } from "expo-image";
import {Text,View,TouchableOpacity,StyleSheet,TextInput} from 'react-native'
import Logo from '../assets/Logo.svg'
import { useFonts } from 'expo-font';
import { useCallback } from "react";
import HeroPic from '../assets/SecondScreenLogo.svg'
export default function NumberEnter({increment}){
    const [fontsLoaded] = useFonts({
        'Inter-Light': require('../assets/fonts/Inter-Light.ttf'),
        'Roboto-Flex':require('../assets/fonts/RobotoFlex-Regular.ttf'),
        'Mont':require('../assets/fonts/Montserrat-Black.ttf')
      });
    
      const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded]);
    
      if (!fontsLoaded) {
        return null;
      }
    return(
        <View style={styles.Container}>
        <Image source={Logo} style={{height:100,width:100,position:'absolute',top:0,marginTop:20}} />

            <Image source={HeroPic} style={{height:250,width:250}}/>
            <Text style={{color:'#C0A7D8',fontFamily:'Mont', fontSize:34,letterSpacing: -1.68, textAlign:'center',marginTop:10,marginBottom:10}}>Sign up to evently</Text>
            <Text style={{fontFamily:'Mont',fontSize:20,letterSpacing:0.48,color:'white',textAlign:'center',marginBottom:10}}>
            Find and book the best shows and perfomances in your area.
            </Text>
            <View style={{width:'90%',height:40,borderRadius:40,display:'flex',flexDirection:'row',alignItems:'center',paddingLeft:20,backgroundColor:'white'}}>
                <Text>+91 |</Text>
                <TextInput style={{height:'100%',width:'90%',paddingLeft:20}} placeholder="Enter your phone number" />
            </View>
            <TouchableOpacity onPress={()=>{increment()}} style={{width:'90%',border:'1px solid white',  borderRadius:40,height:50,display:'flex', marginTop:30,justifyContent:'center',alignItems:'center',backgroundColor:'#473553',boxShadow:'0px 4px 10px 1px rgba(183, 183, 183, 0.25)'}}>
                <Text style={{color:'white',fontFamily:'Mont',fontSize:15}}>Sign up with phone</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    Image:{
        width:300,
        height:300
    },
    Container:{
        height:'100%',
        backgroundColor: "#2d1b46",
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        overflow:"hidden"
    }
})