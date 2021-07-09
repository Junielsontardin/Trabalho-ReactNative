import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    card: {
        paddingTop: '5%',
        marginTop: '5%',
        backgroundColor: '#fff',
        width: 160,
        height: 250,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    detalhes: {
        marginTop: '10%',
    },
    nome: {
        fontSize:14
    },
    preco: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    review: {
        marginTop: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row'
    },
    texto: {
        fontSize: 12,
    }
})

export default style;
