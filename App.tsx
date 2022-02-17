import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { enableScreens } from "react-native-screens";
import MainScreen from "./src/MainsScreen";
import config from "./src/screens";
import { map } from "lodash";

enableScreens();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} />
        {map(config.screens, (screen, key) => {
          return (
            <Stack.Screen
              key={key}
              name={key.replace("Screen", "")}
              component={screen}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
