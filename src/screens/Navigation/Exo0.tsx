import AsyncStorageLib from "@react-native-async-storage/async-storage";
import React, { useContext } from "react";
import { Alert, Button, ScrollView, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import config from "../index";

const Context = React.createContext<{} | null>(null);
const funcs = {
  printBonjour: () => Alert.alert("Bonjour"),
  printBonsoir: () => Alert.alert("Bonsoir"),
};

const ButtonBonsoir = () => {
  const { printBonsoir } = useContext(Context);
  return <Button title="Print Bonsoir" onPress={printBonsoir} />;
};
const ButtonBonjour = () => {
  const { printBonjour } = useContext(Context);
  return <Button title="Print Bonjour" onPress={printBonjour} />;
};

const ExoContext: React.FC<any> = (props) => {
  return (
    <Context.Provider value={funcs}>
      <ButtonBonjour />
      <ButtonBonsoir />
    </Context.Provider>
  );
};

const ExoAsyncStorage: React.FC<any> = (props) => {
  const [name, setName] = React.useState("");

  const getData = async () => {
    try {
      const value = await AsyncStorageLib.getItem("name");
      if (!!value) {
        setName(value);
      }
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <TextInput
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1 }}
      />
      <Button
        title="Set Name"
        onPress={async () => await AsyncStorageLib.setItem("name", name)}
      />
    </>
  );
};

const Exo0: React.FC<any> = () => {
  return (
    <ScrollView contentContainerStyle={config.commonStyle.container}>
      <Text style={config.commonStyle.title}>0.1 --- </Text>
      <ExoContext />
      <Text style={config.commonStyle.title}>0.2 --- </Text>
      <ExoAsyncStorage />
    </ScrollView>
  );
};

export default Exo0;
