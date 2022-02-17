import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";

const Case: React.FC<{
  size: number;
  type: number;
  handleClick: () => void;
}> = (props) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        borderWidth: 1,
        borderColor: "grey",
        margin: 2,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={props.handleClick}
      disabled={props.type !== 0}
    >
      {props.type === 1 ? (
        <Ionicons name="md-close" size={props.size} />
      ) : (
        props.type === 2 && <Entypo name="circle" size={props.size} />
      )}
    </TouchableOpacity>
  );
};

export default Case;
