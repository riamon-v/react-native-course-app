import React from "react";
import {
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import _ from "lodash";
import config from "./screens";
import { DefaultTheme, useNavigation } from "@react-navigation/native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const sections = _.map(config.navigationData, (section, key) => {
  return {
    key,
    data: section.screens,
  };
});

const MainScreen: React.FC<any> = (props) => {
  const navigation = useNavigation();

  const renderSectionHeader = React.useCallback(({ section }) => {
    return (
      <View key={section.key}>
        <Text style={styles.sectionTitle}>{section.key}</Text>
      </View>
    );
  }, []);

  const renderItem = React.useCallback(({ item, index, section }) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        key={item.title}
        style={[
          styles.itemContainer,
          index === section.data.length - 1 && { borderBottomWidth: 1 },
        ]}
        onPress={() => navigation.navigate(item.screen.replace("Screen", ""))}
      >
        <Text style={{ fontSize: 15 }}>{item.title}</Text>
      </TouchableOpacity>
    );
  }, []);

  return (
    <SectionList
      sections={sections}
      renderSectionHeader={renderSectionHeader}
      renderItem={renderItem}
      keyExtractor={(item) => item.title}
    />
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    padding: 12,
    fontWeight: "bold",
    color: "#ADADAE",
    backgroundColor: DefaultTheme.colors.background,
    fontSize: 25,
  },
  itemContainer: {
    borderTopWidth: 1,
    padding: 12,
    backgroundColor: "#FAFAFA",
    borderColor: "#E0E0E0",
  },
});

export default MainScreen;
