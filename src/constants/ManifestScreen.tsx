import Constants from "expo-constants";
import * as React from "react";
import { Component } from "react";
import { ScrollView, Text } from "react-native";

export class ManifestScreen extends Component {
  public static navigationOptions = {
    title: "manifest"
  };

  public render() {
    return (
      <ScrollView>
        <Text>{JSON.stringify(Constants.manifest, undefined, 2)}</Text>
      </ScrollView>
    );
  }
}
