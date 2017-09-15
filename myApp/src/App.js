import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import SayHello from './components/SayHello';
import Button from './components/Button';

export default class myApp extends Component {
  render() {
    return (
      <View style={style.viewStyle}>
        <Text style={style.text}>
          Welcome to React Native!
        </Text>
        <SayHello name="Alisher" />
        <Button text="CALL ME" />
      </View>
    );
  }
}

const style = {
  viewStyle: {
    flex: 1,
    padding: 20,
    paddingTop: 50
  },
  text: {
    fontSize: 20,
    lineHeight: 32,
    textAlign: 'center'
  }
}
