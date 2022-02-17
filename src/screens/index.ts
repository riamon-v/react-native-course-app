export default {
  //   menuStructure,
  //   loadDemoConfigurations,
  // componentScreens
  get navigationData() {
    return {
      "Exos Components": {
        title: "Components exercices",
        screens: [
          { title: "Hello You", screen: "Exo1Screen" },
          { title: "Styles", screen: "Exo2Screen" },
          { title: "State", screen: "Exo3Screen" },
          { title: "LifeCycle", screen: "Exo4Screen" },
          { title: "Morpion", screen: "MorpionScreen" },
        ],
      },
      "Exos Navigation": {
        title: "Navigation exercices",
        screens: [
          { title: "SectionHeader", screen: "SectionHeaderScreen" },
          //   { title: "Test", screen: "" },
        ],
      },
    };
  },
  get screens() {
    return {
      get MorpionScreen() {
        return require("./Components/Morpion").default;
      },
      get Exo1Screen() {
        return require("./Components/Exo1").default;
      },
      get Exo2Screen() {
        return require("./Components/Exo2").default;
      },
      get Exo3Screen() {
        return require("./Components/Exo3").default;
      },
      get Exo4Screen() {
        return require("./Components/Exo4").default;
      },
      get SectionHeader() {
        return require("./SectionHeader").default;
      },
    };
  },
};
