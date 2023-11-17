import { View,StyleSheet,Text,TouchableOpacity } from "react-native";
export default function Button(){
    return(
        <View style={{display:'flex',flexDirection:'row',gap:10,marginTop:20}}>
                <TouchableOpacity style={{width:15,height:15,backgroundColor:'#C0A7D8',borderRadius:"100%"}}>
                    
                </TouchableOpacity>
                <TouchableOpacity style={{width:15,height:15,backgroundColor:'#C0A7D8',borderRadius:"100%"}}>

                </TouchableOpacity>
                <TouchableOpacity style={{width:15,height:15,backgroundColor:'#C0A7D8',borderRadius:"100%"}}>

                </TouchableOpacity>
            </View>
    )
}