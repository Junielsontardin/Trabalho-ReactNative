import React from 'react';
import { View, Text } from 'react-native';
import style from './style'

const Informacao = () => {

    return (
        <View style={style.container}>
            <Text style={style.textAudio}>Audio</Text>
            <Text style={style.textDescricao}>It's modular and designed to last</Text>
        </View>
    )
};

export default Informacao;