import { Image } from 'expo-image'
import {Text,View,StyleSheet} from 'react-native'
import ProfilePic from '../assets/ProfilePic.svg'
import Footer_Base from '../assets/Footer.svg'
import IndianCurrency from '../assets/IndianCurrencyLogo.svg'
import Tick from '../assets/Tick.svg'
export default function Footer()
{
    return (
        <View style={styles.MainContainer}>
            <Image source={Footer_Base} style={styles.BaseContainer} />
            <View style={{width:"100%",position:"absolute",bottom:"180",flex:1,alignItems:'center'}}>
            <Image source={ProfilePic} style={{height:"80px",width:"80px"}} />
            </View>
            <View style={styles.FooterLayer}>
                <View style={styles.FooterContainer}><Image source={Tick} style={{width:30,height:30}} /><Text style={{color:"white",fontSize:20}}>Recharged</Text></View>
                <View style={styles.FooterContainer} ><Image style={styles.FooterLogo} source={IndianCurrency} /><Text style={{color:"white",fontSize:20}}>0.00</Text></View>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    FooterContainer:{
        flex:1,
        justifyContent:'space-between',
        flexDirection:'column',
        alignItems:'center',
        paddingLeft:20,
        paddingRight:20
    },
    FooterLogo:{
        height:50,
        width:50
    },
    FooterLayer:{
        flex:1,
        flexDirection:'row',
        position:"absolute",
        alignItems:'center',
        justifyContent:"space-between",
        width:"100%",
        bottom:0,
    },
    BaseContainer:{
        height:120,
        position:"absolute",
        bottom:0,
        width:"100%"
    },
    MainContainer:{
        height:120,
        position:"absolute",
        bottom:0,
        width:"100%",
        flex:1,
        flexDirection:'row'
    },
    LeftContainer:{
        backgroundColor:"#674F77",
        height:120,
        borderTopRightRadius:40,
        width:"50%"
    },
    RightContainer:{
        backgroundColor:"#674F77",
        height:120,
        borderTopLeftRadius:40,
        width:"50%"
    }
})