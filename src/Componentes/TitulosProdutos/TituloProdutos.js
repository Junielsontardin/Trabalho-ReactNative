import React from 'react';
import { View, Text } from 'react-native';
import style from './style'

const TituloProdutos = () => {

    return (
        <View style={style.container}>
            <Text style={style.categoria}>Headphone</Text>
            <Text style={style.produto}>TMA Wireless</Text>
        </View>
    )
}

export default TituloProdutos;