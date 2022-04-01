import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        paddingBottom: 200
    },

    text: {
        fontSize: 24,
        color: '#f4ede8',
        marginTop: 64,
        marginBottom: 24

    },
    forgotPassword: {
        marginTop: 24
    },

    forgotText: {
        color: "#f4ede8",
        fontSize: 16
    },

    creatAccount: {
        // position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: '#312e38',
        borderTopWidth: 1,
        borderColor: '#232129',
        paddingTop: 16,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row'


    },

    creatAccountText: {
        color: '#ff9000',
        fontSize: 18,
        marginLeft: 16
    }
    ,

    iconeAccount: {

    }

})