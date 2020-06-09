import React, { Component } from 'react';
import { StyleSheet,
        Text, 
        View, 
        KeyboardAvoidingView,
        TextInput,
        TouchableOpacity,
        Button,
        AsyncStorage,
        Image
      } from 'react-native';

export default class Logo extends Component {
    render(){
        return(
            <Image source={{uri: "../images/instagram.png"}} style={{width: 200, height: 200}}/>
        )
    }
}