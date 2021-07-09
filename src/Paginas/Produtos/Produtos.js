import React from 'react';
import { ScrollView, View } from 'react-native';
import MenuProdutos from '../../Componentes/MenuProdutos/MenuProdutos'
import style from './style';
import TituloProdutos from '../../Componentes/TitulosProdutos/TituloProdutos';
import BarraOpcoes from '../../Componentes/BarraOpcoes/BarraOpcoes';
import Mural from '../../Componentes/Mural/Mural';

const Produtos = (props) => {

    return (
        <View style={style.background}>
            <ScrollView>
                <View style={style.container}>
                    <MenuProdutos before={() => props.navigation.navigate('Login')}/>
                    <TituloProdutos />
                    <BarraOpcoes />
                </View>
                <View>
                    <Mural />
                </View>
            </ScrollView>
        </View>
    )
}

export default Produtos;