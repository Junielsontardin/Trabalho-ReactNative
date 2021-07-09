import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import style from './style';
import Icon from 'react-native-vector-icons/Entypo';

const MenuProdutos = (props) => {

    return (
        <View style={style.container}>
            <View style={style.before}>
                <TouchableOpacity onPress={props.before}>
                    <Icon name="chevron-thin-left" size={20} color="#000" />
                </TouchableOpacity>
            </View>
            <View style={style.carrinho}>
                <TouchableOpacity>
                    <Icon name="shopping-cart" size={20} color="#000" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MenuProdutos;