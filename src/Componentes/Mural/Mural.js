import React from 'react'
import { View, Text } from 'react-native'
import style from './style';
import CardProduto from './CardProduto/CardProduto'

const Mural = () => {

    return (
        <View style={style.container}>
            <View style={style.row}>
                <CardProduto />
                <CardProduto />
            </View>
            <View style={style.row}>
                <CardProduto />
                <CardProduto />
            </View>
            <View style={style.row}>
                <CardProduto />
                <CardProduto />
            </View>
        </View>
    )
}

export default Mural;