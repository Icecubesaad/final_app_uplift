import { View,StyleSheet,TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import ProfilePic from '../assets/CallPfp.svg'
import Slider from "./extras/Slider";
import EndCall from '../assets/EndCall.svg'
import Camera from '../assets/Camera.svg'
import Volume from '../assets/Volume.svg'
import Microphone from '../assets/Microphone.svg'
import phoneCall from '../assets/PhoneCallOption.svg'
import Review from "./extras/Review";
export default function IncomingCall(){
    
    return(
    <View style={styles.Container}>
        <Image source={ProfilePic} style={{width:200,height:200}} />
        <View style={{paddingTop:200}}>
            <Image source={EndCall} style={{width:100,height:100}} />
        </View>
        <View style={{display:"flex",flexDirection:"row",gap:"30px",position:"absolute",bottom:0,paddingBottom:"20px"}}>
            <TouchableOpacity style={styles.CallSubOption} >
                <Image source={Camera} style={styles.CallSubOptionImage}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.CallSubOption} >
                <Image source={Volume} style={styles.CallSubOptionImage}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.CallSubOption} >
                <Image source={Microphone} style={styles.CallSubOptionImage}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.CallSubOption} >
                <Image source={phoneCall} style={styles.CallSubOptionImage}/>
            </TouchableOpacity>
        </View>
        <Review/>
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
        backgroundColor: "#2d1b46",
        display:'flex',
        justifyContent:'center',
        alignItems:'center'

    },
    CallSubOption:{
        width:65,
        height:65
        ,
        backgroundColor:'#C0A7D8',
        borderRadius:'100%',
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    CallSubOptionImage:{
        height:50,
        width:50,
    }

})