import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import Spot from './Spot';

export default class Drivers extends Component<{}> {
  
  _keyExtractor = (item, index) => item.id;

  render() {
    return (
      <FlatList
          style={styles.theList}
          data={this.props.spots}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) => (
            <Spot 
            item={item} 
            showDetails={(item)=>{this.props.navigation.navigate('Details', { data: item, toggleForm: this.props.screenProps.toggleForm })}} />
            )}
      />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'stretch'
  },
  theList: {
    flex:1
  },
});