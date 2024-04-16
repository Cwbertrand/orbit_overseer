import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    TextInput: {
        width: '100%',
        fontSize: 14,
        color: '#fff',
        fontFamily: 'OuterSpace'
        
    },
    viewStyles: {
        display: "flex",
        alignSelf: "center",
        width: '90%',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderColor: 'transparent',
        backgroundColor: 'rgba(4,13,62, 0.9)',
        flexDirection: "row",
    },
    inputUsername: {
        flex: 1,
        marginHorizontal: 20,
        marginBottom: 10,
        marginTop: 10,
    },
    btnEdit: {
        backgroundColor: 'rgb(4,13,12)',
        padding: 8,
        position: 'absolute',
        right: 0,
    },
})