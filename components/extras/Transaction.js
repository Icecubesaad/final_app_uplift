import { Text, View ,TouchableOpacity} from "react-native";
import Credited from "../cards/Credited";
import Debited from "../cards/Debited";
export default function Transaction() {
  return (
    <View>
         <View
          style={{
            position:"absolute",
            top:120,
            display:"flex",
            flexDirection:"row"
            ,
            gap:20,
            
          }}
        >
          <TouchableOpacity><Text>Recharge</Text></TouchableOpacity>
          <TouchableOpacity><Text>Transaction</Text></TouchableOpacity>
        </View>
      <View style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",gap:10}}>
        <Debited />
        <Credited />
      </View>
    </View>
  );
}
