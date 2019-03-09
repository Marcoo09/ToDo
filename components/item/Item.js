import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import CheckBox from '../checkBox/CheckBox';

const styles = StyleSheet.create({
    bigBlue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
    red: {
      color: 'red',
    },
  });

class Item extends Component {

  render() {
    return (        
      <View style = {{padding:16, flexDirection: 'row'}}>
        <View style = {{flexDirection: 'column'}}> 
            <Text>{this.props['first-description']}</Text>
            <Text>{this.props['second-description']}</Text>
        </ View>
        <CheckBox />
      </View>
    );
  }
}

module.exports = Item;