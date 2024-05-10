import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 5
    },
    notPressed: {
        backgroundColor: '#ccc', 
    },
    pressed: {
        backgroundColor: '#25D366',
        shadowOffset: { width: 0, height: 0 }, 
        elevation: 2
    },
    text: {
        fontFamily: 'OuterSpace',
        fontSize: 10
    }
});