// @flow

import React from "react";
import {
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  Animated
} from "react-native";
import { Header, Card, ListItem, Button } from "react-native-elements";

export const MarkCard = props => (
  <Card>
    <Text style={{ marginBottom: 10 }}>{props.message}</Text>
  </Card>
);
