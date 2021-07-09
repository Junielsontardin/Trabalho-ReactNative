import React from 'react';
import { View, ImageBackground } from 'react-native';
import BotoesLogin from '../../Componentes/BotoesLogin/BotoesLogin'
import Informacao from '../../Componentes/Informacao/Informacao';
import BotaoNext from '../../Componentes/BotaoNext/BotaoNext';
import Inputs from '../../Componentes/Inputs/Inputs'
import style from './style'

const Login = (props) => {
    return (
        <View style={style.container}>
            <ImageBackground source={require('../../Componentes/Imagens/imagemPrincipal.png')} style={style.imgBackground}>
                <Informacao />               
                <BotaoNext next={() => props.navigation.navigate('Produtos')}/>
                <Inputs />
                <BotoesLogin />
            </ImageBackground>
        </View>
    )
}

export default Login;