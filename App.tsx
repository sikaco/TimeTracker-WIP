// import { StatusBar } from 'expo-status-bar';

import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "./styles.scss";

const BlueText = () => {
  return <Text className={styles.blue}>Blue Text</Text>;
};

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <BlueText />
      </View>
    );
  }
}
