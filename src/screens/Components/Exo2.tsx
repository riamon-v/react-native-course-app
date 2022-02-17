import React from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface HelloProps {
  name: string;
  age?: number;
  city?: string;
}

const Hello: React.FC<HelloProps> = (props) => {
  return (
    <View
      style={{
        borderRadius: 8,
        backgroundColor: "white",
        padding: 10,
        marginVertical: 5,
      }}
    >
      <Text style={{ color: "orange", fontWeight: "bold", fontSize: 20 }}>
        Bonjour à tous
      </Text>
      <Text style={{ fontWeight: "bold" }}>Je suis</Text>
      <Text style={{ marginBottom: 5 }}>{props.name}</Text>
      <Text style={{ fontWeight: "bold" }}>J'ai</Text>
      <Text style={{ marginBottom: 5 }}>{props.age}</Text>
      <Text style={{ fontWeight: "bold" }}>Né à</Text>
      <Text style={{ marginBottom: 5 }}>{props.city}</Text>
      <Text style={{ fontWeight: "bold" }}>Description</Text>
      <View
        style={{ borderLeftWidth: 5, borderColor: "lightgrey", padding: 4 }}
      >
        <Text
          style={{
            color: "grey",
          }}
        >
          {props.children}
        </Text>
      </View>
    </View>
  );
};

const HelloStyle: React.FC<HelloProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Bonjour à tous</Text>
      <Text style={styles.bold}>Je suis</Text>
      <Text style={styles.text}>{props.name}</Text>
      <Text style={styles.bold}>J'ai</Text>
      <Text style={styles.text}>{props.age}</Text>
      <Text style={styles.bold}>Né à</Text>
      <Text style={styles.text}>{props.city}</Text>
      <Text style={styles.bold}>Description</Text>
      <View style={styles.borderView}>
        <Text
          style={{
            color: "grey",
          }}
        >
          {props.children}
        </Text>
      </View>
    </View>
  );
};

const HelloFlex: React.FC<HelloProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Bonjour à tous</Text>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Text style={styles.bold}>Je suis</Text>
        <Text style={styles.text}>{props.name}</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <Text style={styles.bold}>J'ai</Text>
        <Text style={styles.text}>{props.age}</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.bold}>Né à</Text>
        <Text style={styles.text}>{props.city}</Text>
      </View>
      <Text style={styles.bold}>Description</Text>
      <View style={styles.borderView}>
        <Text
          style={{
            color: "grey",
          }}
        >
          {props.children}
        </Text>
      </View>
    </View>
  );
};

const HelloFlex2: React.FC<HelloProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Bonjour à tous</Text>
      <View style={{ flex: 1, height: 300 }}>
        <View
          style={{
            flex: 0.25,
            justifyContent: "center",
            borderWidth: 1,
            backgroundColor: "cornflowerblue",
          }}
        >
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text style={styles.bold}>Je suis</Text>
            <Text style={styles.text}>{props.name}</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Text style={styles.bold}>J'ai</Text>
            <Text style={styles.text}>{props.age}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flex: 0.35,
            borderWidth: 1,
            backgroundColor: "skyblue",
          }}
        >
          <Text style={styles.bold}>Né à</Text>
          <Text style={styles.text}>{props.city}</Text>
        </View>
        <View
          style={{
            flex: 0.5,
            justifyContent: "center",
            borderWidth: 1,
            backgroundColor: "powderblue",
          }}
        >
          <Text style={styles.bold}>Description</Text>
          <View style={styles.borderView}>
            <Text
              style={{
                color: "grey",
              }}
            >
              {props.children}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const Exo2: React.FC<any> = (props) => {
  return (
    <ScrollView contentContainerStyle={{ padding: 12 }}>
      <Text style={styles.title}>2.1 --- </Text>
      <Hello name="Vincent" age={42} city="Roanne">
        Je suis développeur React-Native
      </Hello>
      <Text style={styles.title}>2.2 --- </Text>
      <HelloStyle name="Vincent" age={42} city="Roanne">
        Je suis développeur React-Native
      </HelloStyle>
      <Text style={styles.title}>2.3 --- </Text>
      <HelloFlex name="Vincent" age={42} city="Roanne">
        Je suis développeur React-Native
      </HelloFlex>
      <Text style={styles.title}>2.4 --- </Text>
      <HelloFlex2 name="Vincent" age={42} city="Roanne">
        Je suis développeur React-Native
      </HelloFlex2>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    paddingVertical: 12,
    color: "#ADADAE",
  },
  bold: {
    fontWeight: "bold",
  },
  text: {
    marginBottom: 5,
  },
  borderView: { borderLeftWidth: 5, borderColor: "lightgrey", padding: 4 },
  subtitle: { color: "orange", fontWeight: "bold", fontSize: 20 },
  container: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: "white",
    padding: 10,
    marginVertical: 5,
  },
});

export default Exo2;
