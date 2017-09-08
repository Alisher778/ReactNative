// index.IOS.js - codes goes here


// 1-step Import library 
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


const App = () => (
    <View>
      <Header headerText="Albums" />
      <AlbumList />
    </View>  
);  


AppRegistry.registerComponent('albums', () => App);