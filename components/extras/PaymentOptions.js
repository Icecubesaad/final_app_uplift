import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function PaymentOptions() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Text
          style={{
            position:"absolute",
            top:40,
            color: "white",
            fontSize: 22,
            fontFamily: "MontBold",
            textAlign: "center",
          }}
        >
          Recharge Transaction
        </Text>
      <View
        style={{
          backgroundColor: "#724D95",
          borderWidth: 2,
          borderColor: "#C0A7DB",
          borderRadius: 10,
          width: "auto",
          paddingRight: 10,
          height: 60,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: 10,
        }}
      >
        <Text style={{ color: "white" }}>
          Choose From The Available Recharge Packs:
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: 20,
          paddingRight: 20,
          gap: 20,
          marginTop: 40,
        }}
      >
        <View style={{ display: "flex", flexDirection: "row", gap: 20 }}>
          <TouchableOpacity
            style={{
              width: "auto",
              height: 60,
              paddingLeft: 20,
              paddingRight: 20,
              backgroundColor: "#724D95",
              borderRadius: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid white",
            }}
          >
            <Text style={{ color: "white" }}>2543$</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "auto",
              height: 60,
              paddingLeft: 20,
              paddingRight: 20,
              backgroundColor: "#724D95",
              borderRadius: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid whtie",
            }}
          >
            <Text style={{ color: "white" }}>2543$</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "auto",
              height: 60,
              paddingLeft: 20,
              paddingRight: 20,
              backgroundColor: "#724D95",
              borderRadius: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid white",
            }}
          >
            <Text style={{ color: "white" }}>2543$</Text>
          </TouchableOpacity>
        </View>
        <View style={{ display: "flex", flexDirection: "row", gap: 20 }}>
          <TouchableOpacity
            style={{
              width: "auto",
              height: 60,
              paddingLeft: 20,
              paddingRight: 20,
              backgroundColor: "#724D95",
              borderRadius: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid white",
            }}
          >
            <Text style={{ color: "white" }}>2543$</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "auto",
              height: 60,
              paddingLeft: 20,
              paddingRight: 20,
              backgroundColor: "#724D95",
              borderRadius: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid white",
            }}
          >
            <Text style={{ color: "white" }}>2543$</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "auto",
              height: 60,
              paddingLeft: 20,
              paddingRight: 20,
              backgroundColor: "#724D95",
              borderRadius: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid white",
            }}
          >
            <Text style={{ color: "white" }}>2543$</Text>
          </TouchableOpacity>
        </View>
        <View style={{ display: "flex", flexDirection: "row", gap: 20 }}>
          <TouchableOpacity
            style={{
              width: "auto",
              height: 60,
              paddingLeft: 20,
              paddingRight: 20,
              backgroundColor: "#724D95",
              borderRadius: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid white",
            }}
          >
            <Text style={{ color: "white" }}>2543$</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "auto",
              height: 60,
              paddingLeft: 20,
              paddingRight: 20,
              backgroundColor: "#724D95",
              borderRadius: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid white",
            }}
          >
            <Text style={{ color: "white" }}>2543$</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "auto",
              height: 60,
              paddingLeft: 20,
              paddingRight: 20,
              backgroundColor: "#724D95",
              borderRadius: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid white",
            }}
          >
            <Text style={{ color: "white" }}>2543$</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          marginTop: 20,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: "30px",
            width: "95%",
            display: "flex",
            border: "2px solid white",
            borderRadius: 8,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            backgroundColor: "#724D95",
            paddingLeft: 10,
            alignItems: "center",
            paddingRight: 10,
          }}
        >
          <Text style={{ color: "white", fontFamily: "Mont", fontSize: 15 }}>
            video calls
          </Text>
          <Text style={{ color: "white", fontFamily: "Mont", fontSize: 15 }}>
            8$
          </Text>
        </View>
        <View
          style={{
            height: "30px",
            width: "95%",
            display: "flex",
            border: "2px solid white",
            borderRadius: 8,
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#724D95",
            flexDirection: "row",
            paddingLeft: 10,
            alignItems: "center",
            paddingRight: 10,
          }}
        >
          <Text style={{ color: "white", fontFamily: "Mont", fontSize: 15 }}>
            video calls
          </Text>
          <Text style={{ color: "white", fontFamily: "Mont", fontSize: 15 }}>
            8$
          </Text>
        </View>
        <View
          style={{
            height: "30px",
            width: "95%",
            display: "flex",
            border: "2px solid white",
            borderRadius: 8,
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#724D95",
            flexDirection: "row",
            paddingLeft: 10,
            alignItems: "center",
            paddingRight: 10,
          }}
        >
          <Text style={{ color: "white", fontFamily: "Mont", fontSize: 15 }}>
            video calls
          </Text>
          <Text style={{ color: "white", fontFamily: "Mont", fontSize: 15 }}>
            8$
          </Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "90%",
          marginTop:20
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#724D95",
            width: "auto",
            height: "50px",
            border: "2px solid whtie",
            borderRadius: 8,
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
          }}
        >
          <Text style={{ color: "white", paddingLeft: 20, paddingRight: 20 }}>
            Apply coupons {"\n"}find best offersfor you
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#724D95",
            width: "auto",
            height: "50px",
            border: "2px solid whtie",
            borderRadius: 8,
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
          }}
        >
          <Text style={{ color: "white", paddingLeft: 20, paddingRight: 20 }}>
            Recharge
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
