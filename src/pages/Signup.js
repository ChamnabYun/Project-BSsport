import React, { Component } from 'react';
import { StyleSheet,
        Text, 
        View, 
        TouchableOpacity,
        AsyncStorage, 
      } from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

import {
    Actions
} from 'react-native-router-flux';

export default class Signup extends Component {

    goBack() {
        Actions.pop();
    }

    render() {
        return(
            <View style={styles.container}>
                <Logo/>
                <Form type="Signup"/>
                <View>
                    <Text>Already have an account
                    <TouchableOpacity onPress={this.goBack}><Text style={styles.signup}>Log In</Text></TouchableOpacity></Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#4db',
      alignItems: 'center',
      justifyContent: 'center',
    },
    wrapper: {
        flex: 1,
    },
    header: {
        fontSize: 24,
        marginBottom: 40,
        color: '#fff',
        fontWeight: 'bold',
    },
    textInput: {
        alignSelf: 'stretch',
        padding: 16,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    btn: {
        alignSelf: 'stretch',
        backgroundColor: '#013232',
        padding: 20,
        color: '#fff',
        alignItems: 'center',
    },
    signup: {
        color: '#f00',
       
    },
});
