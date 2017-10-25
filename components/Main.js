import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback
} from 'react-native';

import MainToggle from './MainToggle';
import Spots from './Spots';


export default class Main extends Component<{}> {
  constructor() {
    super();
    this.state = {
      active: 1
    }

  }

  _onPressButton() {
    this.setState({active: 1});
  }

  _onPressButtonTwo() {
    this.setState({active: 2});
  }

  render() {
    let mainContent;
    if (this.state.active == 1) {
      mainContent = <Spots/>
    } else
    {
      mainContent = <Text>Nothing here yet :)</Text>
    }

    return (
      <View style={styles.container}>
      <MainToggle active={this.state.active} setActiveOne={() => this._onPressButton()} setActiveTwo={() => this._onPressButtonTwo()}/>
      {mainContent}
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

