import React from "react";
import { Text, View } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import config from "../index";

const CustomInput: React.FC<{ fontSize?: number }> = (props) => {
  const [keyword, setKeyword] = React.useState("");

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
        value={keyword}
        placeholder="Name"
        onChangeText={setKeyword}
        style={{ fontSize: props.fontSize }}
      />
      {props.children}
    </View>
  );
};

const CustomInput2: React.FC<any> = (props) => {
  const [fontSize, setFontSize] = React.useState(12);

  return (
    <CustomInput fontSize={fontSize}>
      <View style={{ flexDirection: "row" }}>
        <Text
          onPress={() => setFontSize((f) => f + 1)}
          style={{ marginRight: 8, fontWeight: "bold", fontSize: fontSize + 5 }}
        >
          +
        </Text>
        <Text
          onPress={() => setFontSize((f) => f - 1)}
          style={{ fontWeight: "bold", fontSize: fontSize + 5 }}
        >
          -
        </Text>
      </View>
    </CustomInput>
  );
};

const CustomInput3: React.FC<any> = () => {
  const [state, setState] = React.useState({
    keyword: "",
    fontSize: 12,
  });

  const handleSetState = (key: string, value: any) => {
    setState({ ...state, [key]: value });
  };

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
            fontSize: state.fontSize + 5,
          }}
        >
          +
        </Text>
        <Text
          onPress={() => handleSetState("fontSize", state.fontSize - 1)}
          style={{ fontWeight: "bold", fontSize: state.fontSize + 5 }}
        >
          -
        </Text>
      </View>
    </View>
  );
};

const Exo1: React.FC<any> = () => {
  return (
    <ScrollView contentContainerStyle={config.commonStyle.container}>
      <Text style={config.commonStyle.title}>1.1 --- </Text>
      <CustomInput />
      <Text style={config.commonStyle.title}>1.2 --- </Text>
      <CustomInput2 />
      <Text style={config.commonStyle.title}>1.3 --- </Text>
      <CustomInput3 />
    </ScrollView>
  );
};

export default Exo1;
