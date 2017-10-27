import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} from 'react-native';

export default class Drivers extends Component<{}> {
  static navigationOptions = {
    tabBarLabel: 'TAXI TOUR GUIDES',
  }

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <Text>Nothing Here yet</Text>
    );
  }
}
