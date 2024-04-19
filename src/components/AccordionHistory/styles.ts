import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    section: {
        width: '80%',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)', 
        marginTop: 10, 
        padding: 10, 
        alignSelf: 'center', 
    },
    title: {
        color: 'white',
        fontFamily: 'OuterSpace',
        fontSize: 20,
        paddingBottom: 10,
    },
    content: {
        color: 'white',
        fontFamily: 'OuterSpace',
        fontSize: 10, 
    },
});