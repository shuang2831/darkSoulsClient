import React, { Component } from "react";
import { AppRegistry, View } from "react-native";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import getStore from "./src/store/store";

// Import the App container component
import App from "./src/App";

// Pass the store into the Provider
const AppWithStore = () => (
  <Provider store={getStore()}>
    <App />
  </Provider>
);
AppRegistry.registerComponent("darkSouls", () => AppWithStore);
