/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator
} from "react-navigation";
import { Provider } from "react-redux";

import { Dimensions, SafeAreaView } from "react-native";
import React, { Component } from "react";
import User from "./screens/User";
import UsersList from "./screens/UsersList";
import configureStore from "./redux/store";
const store = configureStore();

const UsersListDrawer = createDrawerNavigator(
  {
    UsersList: {
      screen: UsersList
    }
  },
  {
    contentComponent: User,
    navigationOptions: {
      drawerLockMode: "locked-closed"
    },
    drawerPosition: "right",
    drawerWidth: Dimensions.get("window").width * 0.9
  }
);

const AppContainer = createAppContainer(
  createStackNavigator(
    {
      Home: UsersListDrawer
    },
    {
      headerMode: "none"
    }
  )
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
