import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import style from './style';
import Icon from 'react-native-vector-icons/Entypo';

const CardProduto = () => {

    return (
        <View style={style.card}>
            <View>
                <Image source={require('../../Imagens/fone.png')} />
                <TouchableOpacity style={style.detalhes}>
                    <Text style={style.nome}>TMA-2 HD Wireless</Text>
                    <Text style={style.preco}>R$ 349,99</Text>
                </TouchableOpacity>
                <View style={style.review}>
                    <View style={style.row}>
                        <Icon name="star" size={14} color="#FFC120" />
                        <Text style={style.texto}>4.6</Text>
                    </View>
                    <Text style={style.texto}>86 Reviews</Text>
                    <TouchableOpacity>
                        <Icon name="dots-three-vertical" size={12} color="#000" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default CardProduto;