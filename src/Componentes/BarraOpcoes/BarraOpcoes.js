import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import style from './style';
import Icon from 'react-native-vector-icons/Entypo';

const BarraOpcoes = () => {

    return (
        <View style={style.container}>
            <TouchableOpacity style={style.filtro}>
                <Icon style={style.icone} name="sound-mix" size={20} color="#000" />
                <Text style={style.opcoes}>Filtro</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={style.opcoes}>Popularidade</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={style.opcoes}>Novos</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={style.opcoes}>Mais vendidos</Text>
            </TouchableOpacity>

        </View>
    )
}

export default BarraOpcoes;