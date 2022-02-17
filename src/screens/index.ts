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
      Tests: {
        title: "Tests",
        screens: [{ title: "SectionHeader", screen: "SectionHeaderScreen" }],
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
    };
  },
};
