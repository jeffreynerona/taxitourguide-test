import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  ToastAndroid
} from 'react-native';

import Loading from './Loading';
import DriversList from './DriversList';

export default class Drivers extends Component<{}> {
  constructor() {
    super();
    this.state = {
      drivers: []
    }
  }
  static navigationOptions = {
    tabBarLabel: 'TAXI TOUR GUIDES',
  }
  _keyExtractor = (item, index) => item.id;

  getDataFromApiAsync() {
    fetch('http://thewebguysnetwork.com/taxitourguide/wp-json/wp/v2/taxi')
      .then((response) => response.json())
      .then((responseJson) => {
        if(responseJson.length > 0) {
          this.setState({drivers:responseJson});
          AsyncStorage.setItem('DRIVERS_KEY', JSON.stringify(responseJson))
          .then(() => {this.toastBottom('Data Updated')});
        }
      })
      .catch((error) => {
        this.toastBottom('Network Error');
      });
  }

  loadDataLocally() {
    var resolvedProm = Promise.resolve(33);
    resolvedProm
    .then(() => {

      try {
        AsyncStorage.getItem('DRIVERS_KEY').then((driver)=>{
        const drivers = JSON.parse(driver);
        if (drivers !== null){
          this.setState({drivers: drivers});
          this.toastBottom('Data Loaded Locally');
        }
      })
      } catch (error) {
        // Error retrieving data
        alert(error)
      }
    })
    .then(() => this.getDataFromApiAsync())
  }

  toastBottom(text) {
    ToastAndroid.showWithGravity(
          text,
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
    );
  }

  componentDidMount() {
    this.loadDataLocally()
  }

  render() {

    let content = this.state.drivers.length > 0 ? <DriversList drivers={this.state.drivers}/> : <Loading/>;

    return (
      <View
        style={styles.container}>
          {content}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'stretch'
  },
});