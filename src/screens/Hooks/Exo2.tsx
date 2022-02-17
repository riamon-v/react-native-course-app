import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { ScrollView, State } from "react-native-gesture-handler";
import config from "../index";

const CustomInput: React.FC<any> = (props) => {
  const [state, setState] = React.useState({
    keyword: "",
    fontSize: 12,
  });
  const [csl, setConsole] = React.useState("");
  const [error, setError] = React.useState<number | null>(null);
  const [time, setTime] = React.useState(null);

  React.useEffect(
    () => {
      console.log(state.keyword);
      setConsole(state.keyword);
    },
    !!props.deps ? [state[props.deps]] : undefined
  );

  React.useEffect(() => {
    clearTimeout(time);
    setTime(
      setTimeout(() => {
        if (state.keyword && state.keyword !== "Bonsoir") {
          setError(Math.floor(Math.random() * 10));
        } else {
          setError(null);
        }
      }, 1000)
    );
  }, [state.keyword]);

  const handleSetState = (key: string, value: any) => {
    setState({ ...state, [key]: value });
  };

  return (
    <>
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
      {props.withError && error !== null && (
        <Text style={{ color: "red" }}>Error number: {error}</Text>
      )}
      <Text>Console: {csl} </Text>
    </>
  );
};

const Exo2: React.FC<any> = (props) => {
  return (
    <ScrollView contentContainerStyle={config.commonStyle.container}>
      <Text style={config.commonStyle.title}>2.1 --- </Text>
      <CustomInput deps={undefined} />
      <Text style={config.commonStyle.title}>2.2 --- </Text>
      <CustomInput deps={"keyword"} />
      <Text style={config.commonStyle.title}>2.3 --- </Text>
      <CustomInput deps={"keyword"} withError />
    </ScrollView>
  );
};

export default Exo2;
