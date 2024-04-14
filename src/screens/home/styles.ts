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
        marginHorizontal: 15,
        width: 200
    },
    createJoinBtns: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    opCreateJoin: {
        width: '45%',    
    },
});
