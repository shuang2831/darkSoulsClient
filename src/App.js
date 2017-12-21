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
  StatusBar
} from "react-native";
import MarkCard from "./components/MarkCard";
import AppHeader from "./components/AppHeader";
import InputModal from "./components/InputModal";
import { connect } from "react-redux";

import { getMarkCardsFromApi, postMarkCard } from "./actions/generalActions";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

const NAVBAR_HEIGHT = 64;
const STATUS_BAR_HEIGHT = Platform.select({ ios: 0, android: 0 });

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

class App extends PureComponent {
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
      ),
      latitude: null,
      longitude: null,
      error: null,
      modalVisible: false
    };

    (this: any).setModalVisible = this.setModalVisible.bind(this);
  }

  state = {
    selected: (new Map(): Map<string, boolean>),
    modalVisible: false
  };

  _keyExtractor = (item, index) => item.MessageId;

  _onPressItem = (id: string) => {
    // updater functions are preferred for transactional updates
    this.setState(state => {
      // copy the map rather than modifying state.
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id)); // toggle
      return { selected };
    });
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  componentDidMount() {
    this.props.getMarkCards({ latitude: 41, longitude: -88 });
    this.watchId = navigator.geolocation.watchPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        });
        this.props.getMarkCards({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      error => this.setState({ error: error.message }),
      {
        enableHighAccuracy: false,
        timeout: 20000,
        maximumAge: 1000,
        distanceFilter: 10
      }
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  _renderItem = ({ item }) => (
    <MarkCard message={item.Message} userId={item.UserId} />
  );

  render() {
    console.log(this.props.markCards);
    const { clampedScroll } = this.state;

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
      <Animated.View>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <AnimatedFlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          data={this.props.markCards}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollAnim } } }],
            { useNativeDriver: true }
          )}
        />
        <AppHeader
          latitude={this.state.latitude}
          longitude={this.state.longitude}
          error={this.state.error}
          clampedScroll={this.state.clampedScroll}
          setModalVisible={() => this.setModalVisible(true)}
        />
        <InputModal
          modalVisible={this.state.modalVisible}
          setModalVisible={this.setModalVisible}
          latitude={this.state.latitude}
          longitude={this.state.longitude}
        />
      </Animated.View>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    markCards: state.general,
    loading: state.loading
  };
};

const mapDispatchToProps = dispatchAction => {
  return {
    getMarkCards: locationData =>
      dispatchAction(getMarkCardsFromApi(locationData)),
    postMarkCard: message => dispatchAction(postMarkCard(message))
    //setContact: contact => dispatchAction(setContactDetails(contact))
  };
};

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
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
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
    justifyContent: "center",
    paddingTop: 0
  },
  contentContainer: {
    paddingTop: NAVBAR_HEIGHT
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
