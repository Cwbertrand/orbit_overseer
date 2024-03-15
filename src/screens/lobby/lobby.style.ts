import {StyleSheet} from "react-native";

export const lobbyStyles = StyleSheet.create({
    container: {
    },
    scrollView: {
        flex: 1,
    },

    rowId: {
        flexDirection: "row",
        alignItems: "center",
        flex: 0,
    },
    
    listBloc: {
        flex: 1,
        justifyContent: "flex-start",
    },
    
    returnButton: {
        
        backgroundColor: 'red', 
        margin: 5,                
        width: 100,               
        padding: 10,              
        alignItems: 'center',     
        justifyContent: 'center',
        borderRadius: 5,
    },
    returnButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    
    
    launchBlocButton: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'flex-end',
        marginBottom: 20,
    },
    launchButton: {
        backgroundColor: 'green',
        margin: 5,
        width: "75%",
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    launchButtonText: {
        color: 'white',
        fontWeight: 'bold',
    }
});