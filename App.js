import React from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import LoginNavigation from "./navigation/LoginNavigation";

export default class App extends React.Component {
  state = {
    loaded: false
  };
  handleError = error => console.log(error);
  handleLoaded = () => this.setState({ loaded: true });
  loadAssets = async () => {
    await Font.loadAsync({
      ...Ionicons.font
    });
  };
  render() {
    const { loaded } = this.state;
    if (loaded) {
      return <LoginNavigation />;
    } else {
      return (
        <AppLoading
          startAsync={this.loadAssets}
          onFinish={this.handleLoaded}
          onError={this.handleError}
        />
      );
    }
  }
}
