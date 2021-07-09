import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import style from './style'
import Icon from 'react-native-vector-icons/Feather';

const Inputs = () => {

    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    return (
        <View style={style.container}>
            <View style={style.input}>
                <Icon name="mail" size={16} />
                <TextInput style={style.text} value={email} placeholder="Digite aqui seu email" />
            </View>
            <View style={style.input}>
                <Icon name="lock" size={16} />
                <TextInput style={style.text} value={password} placeholder="Digite aqui sua senha" />
            </View>
        </View>
    )
}

export default Inputs;