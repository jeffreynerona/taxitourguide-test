import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} from 'react-native';

export default class SpotDetails extends Component<{}> {
  
  render() {
  	const {state} = this.props.navigation;
    return (
      <Text>{state.params.data.title.rendered}</Text>
    );
  }
}

