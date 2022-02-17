import React from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import config from "../index";

interface HelloProps {
  name: string;
  age?: number;
  city?: string;
}

interface MyButtonProps {
  label: string;
  onPress: () => void;
}

const Hello: React.FC<HelloProps> = (props) => {
  return <Text>Hello {props.name}</Text>;
};

class HelloClass extends React.Component<HelloProps, any> {
  constructor(props: HelloProps) {
    super(props);
  }

  render(): React.ReactNode {
    return <Text>Hello {this.props.name}</Text>;
  }
}

const Hello2: React.FC<HelloProps> = (props) => {
  return (
    <Text>
      Hello {props.name}, {props.children}
    </Text>
  );
};

class Hello2Class extends React.Component<HelloProps, any> {
  constructor(props: HelloProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <Text>
        Hello {this.props.name}, {this.props.children}
      </Text>
    );
  }
}

const Hello3: React.FC<HelloProps> = (props) => {
  return (
    <Text>
      Hello {props.name}, j'ai {props.age} et je suis né à {props.city}.{"\n"}
      {props.children}
    </Text>
  );
};

class Hello3Class extends React.Component<HelloProps, any> {
  constructor(props: HelloProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <Text>
        Hello {this.props.name}, j'ai {this.props.age} et je suis né à{" "}
        {this.props.city}.{"\n"}
        {this.props.children}
      </Text>
    );
  }
}

const MyButton: React.FC<MyButtonProps> = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text>{props.label} (Click Me)</Text>
    </TouchableOpacity>
  );
};

class MyButtonClass extends React.Component<MyButtonProps, any> {
  constructor(props: MyButtonProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Text>{this.props.label} (Click Me)</Text>
      </TouchableOpacity>
    );
  }
}

const Exo1: React.FC<any> = (props) => {
  return (
    <ScrollView contentContainerStyle={config.commonStyle.container}>
      <Text style={config.commonStyle.title}>1.1 --- </Text>
      <Hello name="Vincent" />
      <Hello name="José" />

      <Text style={config.commonStyle.title}>1.2 --- </Text>
      <Hello2 name="Vincent">Je suis développeur React-Native</Hello2>
      <Text style={config.commonStyle.title}>1.3 --- </Text>
      <Hello3 name="Vincent" age={42} city="Roanne">
        Je suis développeur React-Native
      </Hello3>
      <Text style={config.commonStyle.title}>1.4 --- </Text>
      <MyButton
        onPress={() => Alert.alert("Dire bonsoir")}
        label="Dire Bonsoir"
      />
      <View
        style={{ backgroundColor: "black", height: 5, marginVertical: 30 }}
      />
      <Text style={config.commonStyle.title}>1.1 class --- </Text>
      <HelloClass name="Vincent" />
      <HelloClass name="José" />

      <Text style={config.commonStyle.title}>1.2 class --- </Text>
      <Hello2Class name="Vincent">Je suis développeur React-Native</Hello2Class>
      <Text style={config.commonStyle.title}>1.3 class --- </Text>
      <Hello3Class name="Vincent" age={42} city="Roanne">
        Je suis développeur React-Native
      </Hello3Class>
      <Text style={config.commonStyle.title}>1.4 class --- </Text>
      <MyButtonClass
        onPress={() => Alert.alert("Dire bonsoir")}
        label="Dire Bonsoir"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    paddingVertical: 12,
    color: "#ADADAE",
  },
});

export default Exo1;
