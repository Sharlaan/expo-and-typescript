import Constants from "expo-constants";
import * as React from "react";
import { Component } from "react";
import { Text } from "react-native";

export class PlatformScreen extends Component {
  public static navigationOptions = {
    title: "platform"
  };

  public render() {
    return <Text>{JSON.stringify(Constants.platform, undefined, 2)}</Text>;
  }
}
