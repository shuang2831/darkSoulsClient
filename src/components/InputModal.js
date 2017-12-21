import React, { Component } from "react";
import { Modal, Text, TouchableHighlight, View, TextInput } from "react-native";
import { Header, Card, ListItem, Button, Icon } from "react-native-elements";
import { connect } from "react-redux";

import {
  getMarkCardsFromApi,
  postMarkCardToApi
} from "../actions/generalActions";

class InputModal extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  render() {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.props.modalVisible}
        onRequestClose={() => {
          alert("Modal has been closed.");
        }}
      >
        <View
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Card
            title="Create a post!"
            titleStyle={{
              height: 30,
              fontSize: 16,
              marginBottom: 0,
              padding: 0,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              textAlignVertical: "center"
            }}
            containerStyle={{
              padding: 0,
              borderRadius: 10,
              height: 300,
              width: "90%",
              marginHorizontal: 15,
              shadowColor: "#000000",
              shadowOffset: {
                width: 0,
                height: 3
              },
              shadowRadius: 5,
              shadowOpacity: 1.0
            }}
            dividerStyle={{ paddingBottom: 0, marginBottom: 0 }}
            wrapperStyle={{ padding: 10, height: "100%", alignItems: "center" }}
          >
            <TextInput
              style={{
                height: "60%",
                width: "90%",
                textAlignVertical: "top",
                fontSize: 22,
                marginVertical: 15,
                alignSelf: "center"
              }}
              multiline={true}
              maxLength={500}
              autoFocus={true}
              onChangeText={text => this.setState({ text })}
              value={this.state.text}
              underlineColorAndroid="rgba(0,0,0,0)"
            />
            <View style={{ flex: 1, flexDirection: "row", marginTop: 10 }}>
              <Button
                raised
                title="Cancel"
                backgroundColor="#ff4d4d"
                buttonStyle={{ height: 45 }}
                containerViewStyle={{ height: 45, width: 120 }}
                onPress={() => {
                  this.props.setModalVisible(!this.props.modalVisible);
                  this.setState({
                    text: ""
                  });
                }}
              />
              <Button
                raised
                title="Post"
                backgroundColor="#0099ff"
                buttonStyle={{ height: 45 }}
                containerViewStyle={{ height: 45, width: 120 }}
                onPress={() => {
                  this.props.setModalVisible(!this.props.modalVisible);
                  this.props.postMarkCardToServer({
                    message: this.state.text,
                    userId: "Stan",
                    latitude: this.props.latitude,
                    longitude: this.props.longitude
                  });
                  this.setState({
                    text: ""
                  });
                }}
              />
            </View>
          </Card>
        </View>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    markCards: state.general,
    loading: state.loading
  };
};

const mapDispatchToProps = dispatchAction => {
  return {
    getMarkCards: locationData =>
      dispatchAction(getMarkCardsFromApi(locationData)),
    postMarkCardToServer: message => dispatchAction(postMarkCardToApi(message))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputModal);
