import { Text, View ,TouchableOpacity,ScrollView} from "react-native";
import Credited from "../cards/Credited";
import Debited from "../cards/Debited";
export default function Transaction() {
  return (
    <View>
         <View
        style={{
          position: "absolute",
          top: -120,
          display: "flex",
          flexDirection: "row",
          gap: 20,
          width:"100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity>
          <Text
            style={{ fontSize: 24, color: "white", fontFamily: "MontBold" }}
          >
            Recharge
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{ fontSize: 24, color: "white", fontFamily: "MontBold" }}
          >
            Transaction
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
      <View style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",gap:10,width:"100%",overflow:"scroll"}}>
        <Debited />
        <Credited />
      </View>
      </ScrollView>
    </View>
  );
}
