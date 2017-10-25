import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  AsyncStorage
} from 'react-native';

import Spot from './Spot';
import Loading from './Loading'

export default class Spots extends Component<{}> {
  constructor() {
    super();
    this.state = {
      spots: []
    }
  }

  _keyExtractor = (item, index) => item.id;

  getDataFromApiAsync() {
    fetch('http://thewebguysnetwork.com/taxitourguide/wp-json/wp/v2/spot')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({spots:responseJson});
        AsyncStorage.setItem('SPOTS_KEY', JSON.stringify(responseJson));
      })
//       .then(() => {
//         AsyncStorage.getItem('SPOTS_KEY').then((spot)=>{
//         const spots = JSON.parse(spot);
//         alert(spots[0].title.rendered);
// })
//       })
      .catch((error) => {
        //alert(error);
      });
  }

  componentDidMount() {
    var resolvedProm = Promise.resolve(33);
    resolvedProm
    .then(() => {
      try {
        const value = AsyncStorage.getItem('SPOTS_KEY');
      if (value !== null){
        this.setState({spots: value});
        alert('data loaded from local')
      }
      } catch (error) {
        // Error retrieving data
      }
    })
    .then(() => this.getDataFromApiAsync())
  }

  render() {
    let spots = (<FlatList
          style={styles.theList}
          data={this.state.spots}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) => (
            <Spot item={item}/>
            )}
        />);
    let content = this.state.spots.length > 0 ? spots : <Loading/>;


    return (
        <View
        style={styles.container}>
        {content}
        <View style={styles.filter}><Text style={styles.filterText}>Filters HERE</Text></View>
        </View>
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
  filter: {
    backgroundColor: '#F5FCFF',
    padding:5
  },
  filterText: {
    textAlign:'center',
    color:'#000000',
    fontSize: 25,
  }
});

