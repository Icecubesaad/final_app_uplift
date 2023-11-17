import {Text,View} from 'react-native'
import {StyleSheet} from 'react-native'
export default function PaymentGateway(){
    return(
        <View style={styles.Container}>
        <View style={styles.ChildContainer}>
            <View style={styles.TextContainer}>
            <Text style={{...styles.ChildContainerText,color:"black"}}>Recharged</Text>
            <Text style={styles.ChildContainerText}>Your Account</Text>
            <Text style={{...styles.ChildContainerText,fontSize:40}}>R ₹ <Text style={{color:"red", fontSize:40}}>0.00</Text></Text>
            </View>
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    Container:{
        height:"94vh",
        backgroundColor:"purple",

    },
    ChildContainer:{
        height:"100%",
        marginTop:"15vh",
        backgroundColor:"#A47ABF",
        borderTopRightRadius:40,
        borderTopLeftRadius:40,
        paddingTop:150
    },
    ChildContainerText:{
        color: "#FFF",
        fontFamily:"Inter-Light",
        fontSize:28,
        fontWeight:600,
    },
    TextContainer:{
        marginLeft:"auto",
        marginRight:"auto"
    }
})