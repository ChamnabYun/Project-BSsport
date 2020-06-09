import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
    AsyncStorage,
} from 'react-native';

export default class Form extends Component {

    render() {
        return (
            // <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>

            <View style={styles.container}>

                <Text style={styles.header}>- {this.props.type} -</Text>

                <TextInput
                    style={styles.textInput}
                    placeholder='Email'
                    onChangeText={(Email) => this.setState({ Email })}
                    underlineColorAndroid='transparent'
                    keyboardType="email-address"
                    onSubmitEditing={() => this.password.focus()}
                />

                <TextInput
                    style={styles.textInput} placeholder='Password'
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password })}
                    underlineColorAndroid='transparent'
                    ref={(input) => this.password = input}
                />

                <TouchableOpacity
                    style={styles.btn}>
                    <Text style={styles.text}>{this.props.type}</Text>
                </TouchableOpacity>

            </View>

            // </KeyboardAvoidingView>
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