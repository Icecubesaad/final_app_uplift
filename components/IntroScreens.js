import { View,StyleSheet,Text,TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import Logo from '../assets/Logo.svg'
import { useFonts } from 'expo-font';
import { useCallback } from "react";
import FirstScreen from '../assets/firstSliderScreen.png'
import SecondScreen from '../assets/SecondSliderScreen.png'
import ThirdScreen from '../assets/ThirdScreenSlider.png'
import Button from "./extras/button";
export default function IntroScreens(){
    const [fontsLoaded] = useFonts({
        'Inter-Light': require('../assets/fonts/Inter-Light.ttf'),
        'Roboto-Flex':require('../assets/fonts/RobotoFlex-Regular.ttf')
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
            {/* <Image source={Logo} style={styles.Image} />
            <Text style={{color:'white',fontSize:30,fontFamily:'Roboto-Flex',fontWeight:700}}>Im here for you</Text>
            <Text style={{color:'#9787BE',fontSize:30,fontFamily:'Roboto-Flex',fontWeight:700}}>During this tough time</Text> */}
            {/* <Image source={Logo} style={{height:100,width:100,position:'absolute',top:0,marginTop:20}} />
            <Image source={FirstScreen} style={styles.Image} />
            <Text style={{fontFamily:"Roboto-Flex",fontSize:35,marginTop:20,color:"white",textAlign:"center",fontWeight:700}}>One of every <Text style={{color:
            "#C0A7D8"}}>five {"\n"}</Text> people experience a {"\n"}
            <Text style={{color:
            "#C0A7D8"}}>loneliness.</Text></Text> */}
            {/* <Image source={Logo} style={{height:100,width:100,position:'absolute',top:0,marginTop:20}} />
            <Image source={SecondScreen} style={styles.Image} />
            <Text style={{fontFamily:"Roboto-Flex",fontSize:35,marginTop:20,color:"white",textAlign:"center",fontWeight:700}}><Text style={{color:
            "#C0A7D8"}}>Stress</Text> has no {"\n"} boundaries of age, {"\n"} gender, ethnicity, or {"\n"} religion.
           </Text> */}
            <Image source={Logo} style={{height:100,width:100,position:'absolute',top:0,marginTop:20}} />
            <Image source={ThirdScreen} style={styles.Image} />
            <Text style={{fontFamily:"Roboto-Flex",fontSize:35,marginTop:20,color:"white",textAlign:"center",fontWeight:700}}>Stay <Text style={{color:
            "#C0A7D8"}}>Happy</Text> and {"\n"} surround yourself {"\n"} with <Text style={{color:
                "#C0A7D8"}}>Uplifting</Text> People.
           </Text>
            <Button/>
        </View>
    )
}
const styles = StyleSheet.create({
    Image:{
        width:300,
        height:300
    },
    Container:{
        height:'100vh',
        backgroundColor: "#2d1b46",
        display:'flex',
        justifyContent:'center',
        alignItems:'center'

    }
})