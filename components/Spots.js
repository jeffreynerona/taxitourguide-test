import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image
} from 'react-native';

import Spot from './Spot';

export default class Header extends Component<{}> {
  render() {
    return (
        <View
        style={styles.container}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'Joh32n'},
            {key: 'Jill2ian'},
            {key: 'Jim2my'},
            {key: 'Jul2ie'},
            {key: 'Juli12e'},
            {key: 'Juli1e2e'},
            {key: 'Juli12ee'},
          ]}
          renderItem={({item}) => (
            <Spot item={item}/>
            )}
        />
        <View style={styles.filter}><Text style={styles.filterText}>Filters HERE</Text></View>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1
  },
  filter: {
    backgroundColor: 'black',
    height: 50,
    padding:5
  },
  filterText: {
    textAlign:'center',
    color:'#ffffff',
    fontSize: 25,
  }
});

