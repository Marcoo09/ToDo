import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
      alignItems: "center", 
      marginTop: 16,
    },
    textButton: {
      color: '#ff197b',
      lineHeight: 32,
      fontSize: 14,
      fontFamily: 'SourceSansPro-SemiBold',
    },
  });
 
class Button extends Component {
    render() {
      return (
        <View style={styles.container}>
            <Text style = {styles.textButton}>{this.props.text}</Text>
        </View>
      );
    }
}

module.exports = Button;