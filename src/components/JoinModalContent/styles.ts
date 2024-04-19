import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: 300,
        height: 350,
        borderRadius: 20,
        overflow: 'hidden',
    },
    Button: {
        marginBottom: 30,
    },
    TextInput: {
        width: '100%',
        fontSize: 12,
        textAlign: 'center',
        color: '#40ec69',
        fontFamily: 'OuterSpace',
        borderColor: '#40ec69', 
        borderWidth: 1, 
        borderRadius: 10, 
        padding: 10,

    },
    viewStyles: {
        display: "flex",
        alignSelf: "center",
        width: '90%',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderColor: 'transparent',
        backgroundColor: '#063315',
        flexDirection: "row",
        marginBottom: 20,
    },
});