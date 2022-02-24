import { StyleSheet } from "react-native";

export default {
  //   menuStructure,
  //   loadDemoConfigurations,
  // componentScreens
  get commonStyle() {
    return StyleSheet.create({
      title: {
        fontSize: 25,
        paddingVertical: 12,
        color: "#ADADAE",
      },
      container: {
        padding: 12,
      },
    });
  },
  get navigationData() {
    return {
      "Exos Components": {
        title: "Components exercices",
        screens: [
          { title: "Hello You", screen: "Exo1ComponentScreen" },
          { title: "Styles", screen: "Exo2ComponentScreen" },
          { title: "State", screen: "Exo3ComponentScreen" },
          { title: "LifeCycle", screen: "Exo4ComponentScreen" },
          { title: "Morpion", screen: "MorpionScreen" },
        ],
      },
      "Exos Hooks": {
        title: "Hooks exercices",
        screens: [
          { title: "useState", screen: "Exo1HooksScreen" },
          { title: "useEffect", screen: "Exo2HooksScreen" },
          { title: "customHook", screen: "Exo3HooksScreen" },
        ],
      },
      "Exos Navigation": {
        title: "Navigation exercices",
        screens: [
          { title: "Context & AsyncStorage", screen: "Exo0NavigationScreen" },
          { title: "Navigators Exo 1.1", screen: "Exo1NavigationScreen" },
          { title: "Navigators Exo 1.2", screen: "Exo2NavigationScreen" },
          { title: "Navigators Exo 1.3", screen: "Exo3NavigationScreen" },
          { title: "Navigators Exo 1.4", screen: "Exo4NavigationScreen" },
          { title: "Navigators Exo 2.1", screen: "Exo5NavigationScreen" },
          { title: "Navigators Exo 2.2", screen: "Exo6NavigationScreen" },
          { title: "Navigators Exo 2.3", screen: "Exo7NavigationScreen" },
        ],
      },
    };
  },
  get screens() {
    return {
      get MorpionScreen() {
        return require("./Components/Morpion").default;
      },
      get Exo1ComponentScreen() {
        return require("./Components/Exo1").default;
      },
      get Exo2ComponentScreen() {
        return require("./Components/Exo2").default;
      },
      get Exo3ComponentScreen() {
        return require("./Components/Exo3").default;
      },
      get Exo4ComponentScreen() {
        return require("./Components/Exo4").default;
      },
      get Exo1HooksScreen() {
        return require("./Hooks/Exo1").default;
      },
      get Exo2HooksScreen() {
        return require("./Hooks/Exo2").default;
      },
      get Exo3HooksScreen() {
        return require("./Hooks/Exo3").default;
      },
      get Exo0NavigationScreen() {
        return require("./Navigation/Exo0").default;
      },
      get Exo1NavigationScreen() {
        return require("./Navigation/Exo1").Exo1;
      },
      get Exo2NavigationScreen() {
        return require("./Navigation/Exo1").Exo2;
      },
      get Exo3NavigationScreen() {
        return require("./Navigation/Exo1").Exo3("3");
      },
      get Exo4NavigationScreen() {
        return require("./Navigation/Exo1").Exo3("4");
      },
      get Exo5NavigationScreen() {
        return require("./Navigation/Exo2").Exo1;
      },
      get Exo6NavigationScreen() {
        return require("./Navigation/Exo2").Exo2;
      },
      get Exo7NavigationScreen() {
        return require("./Navigation/Exo2").Exo3;
      },
    };
  },
};
