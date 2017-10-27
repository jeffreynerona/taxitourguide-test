import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  Button
} from 'react-native';
import {
  TabNavigator
} from 'react-navigation';

import Spots from './Spots';
import Spot from './Spot';
import Drivers from './Drivers';


export default class Main extends Component<{}> {
  constructor() {
    super();
    this.state = {
      active: 1
    }
  }

  render() {
    const RootTabs = TabNavigator({
      Home: {
        screen: Spots,

      },
      Drivers: {
        screen: Drivers,
      }
    },{
       tabBarOptions: {
        activeTintColor: '#000000',
        inactiveTintColor: 'gray',
        style: {
        backgroundColor: '#F5FCFF'
        },
        indicatorStyle: {
          backgroundColor: 'green'
        },
      }
    });

    return (
      <View style={styles.container}>

       <RootTabs/>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor:'#E5E5E5',
    flex: 1,
    alignItems: 'stretch',
    flexDirection: 'column'
  }
});

