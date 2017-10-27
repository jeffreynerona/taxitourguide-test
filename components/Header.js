import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} from 'react-native';

export default class Header extends Component<{}> {
  render() {
    return (
      <Image
      source={require('../images/headerbg.jpg')}
      style={styles.headerbg}>
         <View style={styles.header}>
          <Text style={styles.title}>TAXI TOUR GUIDE</Text>
          <Text style={styles.sub}>Reggie's List</Text>
          <TextInput 
          editable = {true}
          maxLength = {40}
          style={this.props.showForm ? styles.input : styles.input}
          placeholder = 'Where do you want to go today?'
          underlineColorAndroid='rgba(0,0,0,0)'
          ></TextInput>
        </View>
      </Image>
    );
  }
}


const styles = StyleSheet.create({
  header: {
    backgroundColor:'transparent',
    padding: 15,
  },
  headerbg: {
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
  },
  title: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 28
  },
  input: {
    color: '#000000',
    backgroundColor: '#ffffff',
    marginTop: 10,
    textAlign: 'center'
  },
  hideinput: {
    display: 'none',
    color: '#000000',
    backgroundColor: '#ffffff',
    marginTop: 10,
    textAlign: 'center'
  },
  sub: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 18
  }
});

