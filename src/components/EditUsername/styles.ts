import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    TextInput: {
        flex: 1, 
        fontSize: 12,
        textAlign: 'center',
        color: '#40ec69',
        fontFamily: 'OuterSpace',
    },
    viewStyles: {
        alignSelf: "center",
        width: '90%',
        paddingVertical: 8,
        paddingHorizontal: 15,
        backgroundColor: '#063315',
        flexDirection: "row",
        alignItems: 'center',
        borderColor: '#40ec69',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
    },
    inputUsername: {
        flex: 1,
        height: 30,
        marginHorizontal: 20,
        marginBottom: 10,
        marginTop: 10,
    },
    btnEdit: {
        position: 'absolute', 
        right: 40,            
        top: 10,               
        padding: 2,       
    },
})