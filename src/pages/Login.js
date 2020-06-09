import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Link,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
    Button,
    AsyncStorage,

} from 'react-native';

import Logo from '../components/Logo';


import {
    Actions
} from 'react-native-router-flux';

const userInfo = { email:'user@gmail.com', password:'123'}

export default class Login extends Component {

    signup() {
        Actions.signup()
    }
    select() {
        Actions.select();
    }

    Login = async () => {
        if (this.state.email === userInfo.email && this.state.password === userInfo.password) {
            return this.select();
        } else {
            alert('Failed');
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Logo />
                <Text style={styles.header}>- Login -</Text>

                <TextInput
                    style={styles.textInput}
                    placeholder='Email'
                    onChangeText={(email) => this.setState({ email })}
                    underlineColorAndroid='transparent'
                    keyboardType="email-address"
                    // onSubmitEditing={() => this.password.focus()}
                    value={this.setState.email}
                />

                <TextInput
                    style={styles.textInput} placeholder='Password'
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password })}
                    underlineColorAndroid='transparent'
                    // ref={(input) => this.password = input}
                    value={this.setState.email}
                />

                <TouchableOpacity
                    style={styles.btn}
                    onPress={this.Login}>
                    <Text style={styles.text}>Login</Text>
                </TouchableOpacity>

                <View>
                    <Text style={{ flexDirection: 'row' }}>Don't have an account yet?
                    <TouchableOpacity onPress={this.signup}><Text style={styles.btnsignup}>Sign up</Text></TouchableOpacity></Text>
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
        width: 250,
        borderRadius: 60,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    btn: {
        alignSelf: 'stretch',
        backgroundColor: '#486',
        padding: 20,
        borderRadius: 60,
        alignItems: 'center',
    },
    text: {
        color: '#fff',
    }
});
