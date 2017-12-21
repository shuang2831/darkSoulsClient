// @flow

import React, { PureComponent } from "react";
import {
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  Animated,
  View,
  TouchableOpacity
} from "react-native";
import { Header, Card, ListItem, Button, Icon } from "react-native-elements";

var randomColor = require("randomcolor");

export default class MarkCard extends PureComponent {
  constructor() {
    super();
    this.state = {
      numberOfFavs: 0
    };
  }
  render() {
    var color = randomColor({ luminosity: "bright" });
    return (
      <Card
        title={this.props.userId}
        titleStyle={{
          height: 30,
          fontSize: 16,
          color: "white",
          marginBottom: 0,
          padding: 0,
          backgroundColor: color,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          textAlignVertical: "center"
        }}
        containerStyle={{
          padding: 0,
          borderRadius: 10,
          height: 150,
          shadowColor: "#000000",
          shadowOffset: {
            width: 0,
            height: 3
          },
          shadowRadius: 5,
          shadowOpacity: 1.0
        }}
        dividerStyle={{ paddingBottom: 0, marginBottom: 0 }}
        wrapperStyle={{ flex: 1 }}
      >
        <View>
          <Text style={{ marginBottom: 10, padding: 15, fontSize: 16 }}>
            {this.props.message}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            position: "absolute",
            bottom: 5,
            right: 20
          }}
        >
          <TouchableOpacity>
            <Icon name="star" type="fontawesome" color="#ffff80" size={45} />
            <Text style={{ position: "absolute", left: "40%", top: "25%" }}>
              {this.state.numberOfFavs}
            </Text>
          </TouchableOpacity>
        </View>
      </Card>
    );
  }
}
