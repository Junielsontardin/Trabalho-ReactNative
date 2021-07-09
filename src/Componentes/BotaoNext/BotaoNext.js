import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import style from './style';

const BotaoNext = (props) => {

    return (
        <View style={style.next}>
            <TouchableOpacity onPress={props.next}>
                <Icon name="chevron-thin-right" size={50} color="#0ACF83" />
            </TouchableOpacity>
        </View>
    )
}

export default BotaoNext;