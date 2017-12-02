/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PureComponent } from "react";
import {
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  Animated,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import { Header, Card, ListItem, Button } from "react-native-elements";
import { connect } from "react-redux";

import Icon from "react-native-vector-icons/SimpleLineIcons";

const NAVBAR_HEIGHT = 64;
const STATUS_BAR_HEIGHT = Platform.select({ ios: 20, android: 24 });

class AppHeader extends PureComponent {
  constructor(props) {
    super(props);
    const scrollAnim = new Animated.Value(0);
    const offsetAnim = new Animated.Value(0);

    this.state = {
      scrollAnim,
      offsetAnim,
      clampedScroll: Animated.diffClamp(
        Animated.add(
          scrollAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolateLeft: "clamp"
          }),
          offsetAnim
        ),
        0,
        NAVBAR_HEIGHT - STATUS_BAR_HEIGHT
      )
    };
  }

  render() {
    const { clampedScroll } = this.props;

    const navbarTranslate = clampedScroll.interpolate({
      inputRange: [0, NAVBAR_HEIGHT - STATUS_BAR_HEIGHT],
      outputRange: [0, -(NAVBAR_HEIGHT - STATUS_BAR_HEIGHT)],
      extrapolate: "clamp"
    });
    const navbarOpacity = clampedScroll.interpolate({
      inputRange: [0, NAVBAR_HEIGHT - STATUS_BAR_HEIGHT],
      outputRange: [1, 0],
      extrapolate: "clamp"
    });

    return (
      <Animated.View
        style={[
          styles.navbar,
          { transform: [{ translateY: navbarTranslate }] }
        ]}
      >
        <Animated.Text style={[styles.title, { opacity: navbarOpacity }]}>
          <Text>hi</Text>
        </Animated.Text>
        <TouchableOpacity
          style={{ marginTop: 0, marginRight: 20 }}
          onPress={this.props.setModalVisible}
        >
          <Icon name="pencil" size={30} color="darkviolet" />
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  listContainer: {
    paddingTop: NAVBAR_HEIGHT,
    paddingBottom: NAVBAR_HEIGHT
  },
  navbar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    backgroundColor: "white",
    borderBottomColor: "#dedede",
    borderBottomWidth: 1,
    height: NAVBAR_HEIGHT,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: STATUS_BAR_HEIGHT
  },
  contentContainer: {
    paddingTop: NAVBAR_HEIGHT
  }
});

export default AppHeader;
