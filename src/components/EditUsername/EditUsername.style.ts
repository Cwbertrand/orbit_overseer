import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({

    inputStyles: {
        width: '100%',
        fontSize: 8,
        fontFamily: 'Outer-Space',
        color: '#fff',
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
    inputRow: {
        //flexDirection: 'row',
        marginVertical: 19,
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