import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import CheckBox from '../checkBox/CheckBox';

const styles = StyleSheet.create({
    commonText:{
      fontFamily: 'SourceSansPro-Regular',
    },
    primaryText: {
      color: 'black',
      fontSize: 16,
      lineHeight: 24,
    },
    secondaryText: {
      color: '#959595',
      fontSize: 14,
      lineHeight: 20,
    },
    itemContainer:{
      padding:16,
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: '#f0f0f0',
    },
    itemContainerHover: {
      borderWidth: 1,
      borderColor: 'blue',
    },
    textContainer: {
      flexDirection: 'column',
    },
  });

class Item extends Component {
  constructor(props){
    super(props);
    this.state = {
      hovered: false,
    };
  }

  handlingHover(){
    this.setState({hovered: true});
  }
  render() {
    return (        
      <View style = {this.state.hovered ? styles.itemContainerHover: styles.itemContainer}>
        <View style = {styles.textContainer}> 
            <Text style = {[styles.commonText, styles.primaryText]} >{this.props['first-description']}</Text>
            <Text style = {[styles.commonText, styles.secondaryText]} >{this.props['second-description']}</Text>
        </ View>
        <CheckBox checked = {this.props['status']}/>
      </View>
    );
  }
}

module.exports = Item;