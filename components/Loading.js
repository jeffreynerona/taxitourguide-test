import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator
} from 'react-native';

export default class Loading extends Component<{}> {
  render() {
    return (
          <View style={styles.loadercon}>
          <ActivityIndicator style={styles.loader} size='large'></ActivityIndicator>
          </View>
    );
  }
}


const styles = StyleSheet.create({
  loadercon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  loader: {
    flex: 1
  }
});

