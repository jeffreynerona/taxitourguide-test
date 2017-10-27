import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableNativeFeedback,
  Modal,
  TouchableHighlight
} from 'react-native';
import striptags from 'striptags';
const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();

export default class Spot extends Component<{}> {
  state = {
    modalVisible: false,
  }

  cleanUp(input) {
    input = striptags(input);
    return entities.decode(input);
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  render() {
    
    let placeholder = require('../images/headerbg.jpg');
    let backbutton = require('../images/back.png');
    var description = this.props.item.content.rendered;
    description = this.cleanUp(description);
    let imageuri = this.props.item.acf.photo ? {uri: this.props.item.acf.photo.sizes.medium} : placeholder;
    return (
          <Image
            source={imageuri}
            style={styles.itemimg}>
            <Modal
              animationType="slide"
              transparent={true}
              style={styles.modal}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                  this.setModalVisible(!this.state.modalVisible)
                }}
              >
              <TouchableHighlight onPress={() => {
                  this.setModalVisible(!this.state.modalVisible)
                }}>
                  <View style={styles.backCon}>
                  <Image
                  source={backbutton}
                  style={styles.backButton}>
                  </Image>
                  </View>
                </TouchableHighlight>
              <View style={styles.modalview}>
                 <Image
                source={imageuri}
                style={styles.detailimg}>
                <Text style={styles.detailtitle}>{this.props.item.title.rendered}</Text>
                </Image>
                <View style={styles.detailbody}>
                <Text style={styles.detaildesc}>{description}</Text>
                </View>
              </View>
            </Modal>
            <TouchableNativeFeedback
            onPress={() => {
              this.setModalVisible(true)
            }}>
            <View style={styles.item}>
            <Text style={styles.itemtitle}>{this.props.item.title.rendered}</Text>
            </View>
            </TouchableNativeFeedback>
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
    marginTop: 60 ,
    fontSize: 30,
    color: '#ffffff',
    textAlign: 'right',
  },
  itemreviews: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'right',
  },
  detailimg: {
    alignSelf: 'stretch',
    height:200,
    paddingRight: 10
  },
  modalview: {
    flex:1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF'
  },
  backCon: {
    padding: 10,
    height: 50
  },
  backButton: {
    height: 30,
    width: 30
  },
  detailtitle: {
    textAlign: 'right',
    color: '#ffffff',
    fontSize: 30,
    marginTop: 150
  },
  detailbody: {
    padding: 10
  },
  detaildesc: {
    color: '#000000'
  }
});