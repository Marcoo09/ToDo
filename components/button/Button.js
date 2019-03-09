import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';

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
 
class Button extends Component {
    render() {
      return (
        <View style={{alignItems: "center", marginTop:54}}>
            <Text> Hello World!</Text>
        </View>
      );
    }
}

module.exports = Button;