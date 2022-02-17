import React from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import config from "../";

const useMyTextInput = (initialValue: string, callback?: () => null) => {
  const [state, setState] = React.useState({
    keyword: "",
    fontSize: 12,
  });
  const [time, setTime] = React.useState(null);

  React.useEffect(() => {
    clearTimeout(time);
    setTime(
      setTimeout(() => {
        if (state.keyword && state.keyword !== "Bonsoir") {
          callback?.();
        }
      }, 1000)
    );
  }, [state.keyword]);

  const handleSetState = (key: string, value: any) => {
    setState({ ...state, [key]: value });
  };

  return [state, handleSetState];
};

const CustomInput: React.FC<any> = (props) => {
  const [state, handleSetState] = useMyTextInput("");

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 12,
        borderRadius: 10,
        borderWidth: 1,
      }}
    >
      <TextInput
        value={state.keyword}
        placeholder="Name"
        onChangeText={(text) => handleSetState("keyword", text)}
        style={{ fontSize: state.fontSize, flex: 1 }}
      />
      <View style={{ flexDirection: "row" }}>
        <Text
          onPress={() => handleSetState("fontSize", state.fontSize + 1)}
          style={{
            marginRight: 8,
            fontWeight: "bold",
            fontSize: state.fontSize,
          }}
        >
          +
        </Text>
        <Text
          onPress={() => handleSetState("fontSize", state.fontSize - 1)}
          style={{ fontWeight: "bold", fontSize: state.fontSize }}
        >
          -
        </Text>
      </View>
    </View>
  );
};

const SearchBar: React.FC<any> = (props) => {
  const [state, handleSetState] = useMyTextInput("", () => {
    Alert.alert("In SearchBar");
  });

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 12,
        borderRadius: 10,
        borderWidth: 1,
      }}
    >
      <Ionicons name="search" size={20} color={"grey"} />
      <TextInput
        value={state.keyword}
        placeholder="Name"
        onChangeText={(text) => handleSetState("keyword", text)}
        style={{ fontSize: state.fontSize, flex: 1 }}
      />
      {!!state.keyword && (
        <Ionicons
          name="close"
          size={20}
          onPress={() => handleSetState("keyword", "")}
        />
      )}
    </View>
  );
};

const Exo3: React.FC<any> = (props) => {
  return (
    <ScrollView contentContainerStyle={config.commonStyle.container}>
      <Text style={config.commonStyle.title}>3.1 --- </Text>
      <CustomInput />
      <Text style={config.commonStyle.title}>3.2 --- </Text>
      <SearchBar />
    </ScrollView>
  );
};

export default Exo3;
