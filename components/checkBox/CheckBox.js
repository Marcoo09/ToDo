import React, { Component } from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';

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
        {
          this.props.checked ? <Image source={require('../../images/iconCheckboxActive.png')} /> : <Image source={require('../../images/iconCheckboxInactive.png')} />
        }
        </View>
      );
    }
}
module.exports = CheckBox; 