import React, { Component } from "react";
import { Modal, Text, TouchableHighlight, View, TextInput } from "react-native";
import { Header, Card, ListItem, Button } from "react-native-elements";

class InputModal extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.modalVisible}
        onRequestClose={() => {
          alert("Modal has been closed.");
        }}
      >
        <View
          style={{
            marginTop: 22,

            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Card title="CARD WITH DIVIDER">
            <TextInput
              style={{ height: 80 }}
              multiline={true}
              maxLength={500}
              autoFocus={true}
              onChangeText={text => this.setState({ text })}
              value={this.state.text}
              underlineColorAndroid="rgba(0,0,0,0)"
            />
            <Text>Hello World!</Text>

            <TouchableHighlight
              onPress={() => {
                this.props.setModalVisible(!this.props.modalVisible);
              }}
            >
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </Card>
        </View>
      </Modal>
    );
  }
}
export default InputModal;
