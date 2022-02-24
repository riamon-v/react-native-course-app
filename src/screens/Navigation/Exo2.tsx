import React from "react";
import { Button, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const TAB = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Tab {route.params.tab}</Text>
      {/* {!!display && ( */}
      <>
        {!route.params.to ? (
          <Button title="Navigate to go back" onPress={navigation.goBack} />
        ) : (
          <Button
            title={`Navigate to ${route.params.to}`}
            onPress={() => navigation.navigate(route.params.to)}
          />
        )}
      </>
      {/* )} */}
    </View>
  );
};

const Exo1 = (display: boolean) => () => {
  return (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="Tab1"
        component={TAB}
        initialParams={{ tab: "1", to: "Details from Tab1" }}
      />
      <Tabs.Screen
        name="Tab2"
        component={TAB}
        initialParams={{ tab: "2", to: "Details from Tab2" }}
      />
      <Tabs.Screen
        name="Tab3"
        component={TAB}
        initialParams={{ tab: "3", to: "Details from Tab3" }}
      />
    </Tabs.Navigator>
  );
};

const Exo2 = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Tab1" component={TAB} initialParams={{ tab: "1" }} />
      <Drawer.Screen name="Tab2" component={TAB} initialParams={{ tab: "2" }} />
      {/* <Drawer.Screen name="Tab3" component={TAB} initialParams={{ tab: "3" }} /> */}
    </Drawer.Navigator>
  );
};

const Exo3 = () => {
  return (
    <Stack.Navigator initialRouteName="Tabs">
      <Stack.Screen component={Exo1(true)} name="Tabs" />
      {/* <Stack.Screen
        component={TAB}
        name="Details from Tab1"
        initialParams={{ tab: "1" }}
      />
      <Stack.Screen
        component={TAB}
        name="Details from Tab2"
        initialParams={{ tab: "2" }}
      />
      <Stack.Screen
        component={TAB}
        name="Details from Tab3"
        initialParams={{ tab: "3" }}
      /> */}
    </Stack.Navigator>
  );
};

export { Exo1, Exo2, Exo3 };
