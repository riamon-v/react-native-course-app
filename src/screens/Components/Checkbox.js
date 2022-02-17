import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CheckBox = (props) => {
  return (
    <View style={{ flexDirection: "row", marginVertical: 3 }}>
      <TouchableOpacity
        style={{
          width: 20,
          height: 20,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: props.checked ? "skyblue" : "transparent",
          borderWidth: 0.5,
        }}
        onPress={props.handleClick}
      >
        {props.checked && (
          <Ionicons name="md-checkmark" size={15} color="white" />
        )}
      </TouchableOpacity>
      <Text style={{ marginLeft: 5 }}>{props.label}</Text>
    </View>
  );
};

export default CheckBox;
