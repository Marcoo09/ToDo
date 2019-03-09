import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import Item from '../../components/item/Item';
import CheckBox from '../../components/checkBox/CheckBox';
import Button from '../../components/button/Button';

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

var data = [
    {
        'first-description': 'Description',
        'second-description': 'Second Description',
        'status': false
    },
    {
        'first-description': 'Description',
        'second-description': 'Second Description',
        'status': false
    },
    {
        'first-description': 'Description',
        'second-description': 'Second Description',
        'status': false
    },
    {
        'first-description': 'Description',
        'second-description': 'Second Description',
        'status': false
    }, 
    {
        'first-description': 'Description',
        'second-description': 'Second Description',
        'status': false
    }
];

class Home extends Component {
  render() {
    return (
      <View >
        <ScrollView >
        {
            data.map((item,index,arr) => <Item {...item}/>)
        }
        </ScrollView>
        <Button />
      </View>
    );
  }
}

module.exports = Home;