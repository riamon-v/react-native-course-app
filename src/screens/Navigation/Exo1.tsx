import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Alert, Button, Text, View, TouchableOpacity } from "react-native";
import { HelloFlex2 as HelloYou } from "../Components/Exo2";

const Stack = createNativeStackNavigator();

const Component: (name: string) => React.FC<any> =
  (name: string) => (props) => {
    const navigation = useNavigation();
    const { params } = useRoute();

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {name === "ABOUT" && !!params?.description && (
          <Text>{params?.description}</Text>
        )}
        <Text>{name}</Text>
        {name === "HOME" && (
          <>
            <Button
              onPress={() => navigation.navigate("Details")}
              title="Go To Details"
            />
            <Button
              onPress={() =>
                navigation.navigate("About", {
                  description: "Description from HomePage",
                })
              }
              title="Go To About"
            />
          </>
        )}
      </View>
    );
  };

const Exo1: React.FC<any> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Component("HOME")} />
      <Stack.Screen name="Details" component={Component("DETAILS")} />
      <Stack.Screen name="About" component={Component("ABOUT")} />
    </Stack.Navigator>
  );
};

const Details = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <HelloYou name="Vincent" age={42} city={"Roanne"}>
        Je suis développeur React-Native
      </HelloYou>
      <Button
        onPress={() =>
          navigation.navigate("About", {
            description: "Description from DetailsPage",
          })
        }
        title="Go To About"
      />
    </View>
  );
};

const Exo2: React.FC<any> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Component("HOME")} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="About" component={Component("ABOUT")} />
    </Stack.Navigator>
  );
};

const Exo3: (exo: string) => React.FC<any> = (exo: string) => () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{ presentation: "card" }}>
        <Stack.Screen
          name="Home"
          component={Component("HOME")}
          options={({ navigation }) => ({
            headerTitle: "Accueil",
            headerStyle: {
              backgroundColor: "lightblue",
            },
            headerRight: () => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    if (exo === "4") {
                      navigation.navigate("MyModal");
                    } else {
                      Alert.alert("Action");
                    }
                  }}
                >
                  <Text style={{ fontSize: 30 }}>+</Text>
                </TouchableOpacity>
              );
            },
          })}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerTitle: "Details de l'app",
            headerStyle: {
              backgroundColor: "salmon",
            },
          }}
        />
        <Stack.Screen
          name="About"
          component={Component("ABOUT")}
          options={{
            headerTitle: "Page a Propos",
            headerStyle: {
              backgroundColor: "gold",
            },
          }}
        />
      </Stack.Group>
      {exo === "4" && (
        <Stack.Group screenOptions={{ presentation: "transparentModal" }}>
          <Stack.Screen name="MyModal" component={Component("MODAL")} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export { Exo1, Exo2, Exo3 };
