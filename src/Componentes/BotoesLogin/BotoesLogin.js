import React from 'react';
import { View, TouchableOpacity, Text, Button } from 'react-native';
import style from './style';

const BotoesLogin = () => {

    return (
        <View style={style.container}>
            <TouchableOpacity>
                <Text style={style.forgotPass}>Forgot Password</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.signin}>
                <Text style={style.cor}>Sign in</Text>
            </TouchableOpacity>
            <View style={style.viewAccount}>
                <Text style={style.cor}>Didn’t have any account? </Text>
                <TouchableOpacity>
                    <Text style={style.signup}>Sign up here!</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default BotoesLogin;