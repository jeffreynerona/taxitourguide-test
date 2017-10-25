import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image
} from 'react-native';

export default class Spot extends Component<{}> {
  render() {
    let placeholder = require('../images/headerbg.jpg')
    let imageuri = this.props.item.acf.photo ? {uri: this.props.item.acf.photo.sizes.medium} : placeholder;
    return (
          <Image
            source={imageuri}
            style={styles.itemimg}>
            <View style={styles.item}>
            <Text style={styles.itemtitle}>{this.props.item.title.rendered}</Text>
            <Text style={styles.itemreviews}>300 Reviews</Text>
            </View>
          </Image>
    );
  }
}


const styles = StyleSheet.create({
  item: {
    height: 160,
    alignItems: 'flex-end',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 20
  },
  itemimg: {
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
  },
  itemtitle: {
    marginTop: 50,
    fontSize: 30,
    color: '#ffffff',
    textAlign: 'right',
  },
  itemreviews: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'right',
  }
});

