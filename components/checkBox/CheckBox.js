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

class CheckBox extends Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "flex-end" }}>
          <Text>Hello world!</Text>
        </View>
      );
    }
}
module.exports = CheckBox; 