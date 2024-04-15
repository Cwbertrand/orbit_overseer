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
        paddingVertical: 7,
        paddingHorizontal: 15,
        borderWidth: 2,
        borderColor: 'transparent',
        backgroundColor: 'rgba(4,13,62, 0.9)',
        flexDirection: "row",
        marginBottom: 2,
    },
    topBtns: {
        flex: 1,
        marginTop: 70,
        marginHorizontal: 30,
    },
    btnEdit: {
        backgroundColor: 'rgb(4,13,12)',
        padding: 7.5,
        borderEndStartRadius: 0,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        position: 'absolute',
        right: 20,
        bottom: 3
    },
})