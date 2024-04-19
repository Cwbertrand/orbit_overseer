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
        marginBottom: 20,
    },
    TextInput: {
        width: '100%',
        fontSize: 12,
        textAlign: 'center',
        color: '#40ec69',
        fontFamily: 'OuterSpace',
    },
    viewStyles: {
        display: "flex",
        borderColor: '#40ec69',
        borderWidth: 1,
        borderRadius: 10,
        alignSelf: "center",
        width: '80%',
        paddingVertical: 8,
        paddingHorizontal: 15,
        backgroundColor: '#063315',
        flexDirection: "row",
        marginBottom: 20,
    },
});