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
    },
    blackInput:{
        color: '#000',
    },
});
