import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';

import Routes from './src/Routes';

export default class App extends Component {


  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#1c47c7"
          barStyle="light-content" />
        <Routes />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4db',
    alignItems: 'center',
    justifyContent: 'center',
  },
});