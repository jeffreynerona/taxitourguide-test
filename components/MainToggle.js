import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback
} from 'react-native';

export default class MainToggle extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tab}>
          <View style={this.props.active == 1 ? styles.tabActive : styles.tabContainer}>
            <TouchableNativeFeedback
            onPress={() => this.props.setActiveOne()}>
            <Text style={styles.tabtext}>Tourist Spots</Text>
            </TouchableNativeFeedback>
          </View>
        </View>
        <View style={styles.tab}>
          <View style={this.props.active == 2 ? styles.tabActive : styles.tabContainer}>
            <TouchableNativeFeedback
            onPress={() => this.props.setActiveTwo()}>
            <Text style={styles.tabtext}>Taxi Tour Guides</Text>
            </TouchableNativeFeedback>
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor:'#E5E5E5',
    alignItems: 'stretch',
    flexDirection: 'row'
  },
  tab: {
    flex:1,
    alignItems: 'stretch',
    paddingLeft: 5,
    paddingRight: 5
  },
  tabContainer: {
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 6,
  },
  tabActive: {
    borderBottomColor: '#219653',
    borderBottomWidth: 6,
  },
  tabtext: {
    textAlign: 'center',
    padding: 15,
    fontSize: 18,
    color: '#000000'
  }
});

