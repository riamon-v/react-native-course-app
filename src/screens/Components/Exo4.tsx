import React from "react";
import { Button, Text, View } from "react-native";

class Counter extends React.Component<any, { count: number }> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.time = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(this.time);
  }

  render(): React.ReactNode {
    return (
      <View>
        <Text>Timer: {this.state.count}</Text>
        <View
          style={{ height: this.state.count * 5, backgroundColor: "red" }}
        />
      </View>
    );
  }
}

class Exo4 extends React.Component<any, { count: number; show: boolean }> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      show: false,
    };
  }
  time = null;

  render(): React.ReactNode {
    return (
      <View style={{ flex: 1 }}>
        <Button
          title={!this.state.show ? "Start" : "Stop"}
          onPress={() => this.setState({ show: !this.state.show })}
        />
        {this.state.show && <Counter />}
      </View>
    );
  }
}

export default Exo4;
