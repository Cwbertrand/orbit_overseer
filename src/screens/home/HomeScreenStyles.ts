import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    scrollViewContainer: {
        flex: 1,
    },
    topBtns: {
        flex: 1,
        marginTop: 70,
        marginHorizontal: 30,
    },
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

    bottomBtns: {
        flex: .5,
        marginHorizontal: 30,
        width: 200
    },
    createJoinBtns: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    opCreateJoin: {
        width: '40%',
        marginBottom: 15,
    },
    buttonText: {
        fontSize: 14,
        color: '#fff', 
        textAlign: 'center',
        fontFamily: 'Outer-Space',
    },
    blackInput:{
        color: '#000',
    },
    

});
