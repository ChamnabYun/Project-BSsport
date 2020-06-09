import React, { Component } from 'react';
import {
    Router,
    Stack,
    Scene
} from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Select from './pages/Select';

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene key="login" component={Login} title="Login" />
                    <Scene key="signup" component={Signup} title="Register" />
                    <Scene key="select" component={Select} title="Select" />

                </Stack>
            </Router>
        )
    }
}