import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        marginTop: '5%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    filtro: {
        flexDirection: 'row',
        width: 92,
        height: 41,
        paddingTop: 10,
        borderWidth: 1,
        borderColor: "#BABABA",
        borderRadius: 10,
        color: "#000",
        textAlign: "center",
        fontWeight: "bold",
        justifyContent: 'center',
    },
    icone: {
        paddingRight: '5%'
    },
    opcoes: {
        fontSize: 14,
        color: '#000'
    }
})

export default style;