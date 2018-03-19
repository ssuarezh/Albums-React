/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Header from './src/components/header';
import AlbumList from './src/components/albumList';


export default class App extends Component{
  render() {
    return (
      <View>
        <Header headerText={'Albums'}/>
        <AlbumList />
      </View> 
    );
  }
}

const styles = StyleSheet.create({});
