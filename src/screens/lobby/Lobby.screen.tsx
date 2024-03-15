import * as React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import { lobbyStyles } from "./lobby.style";


const LobbyScreen = () => {
  return (
    <ScrollView 
        style={lobbyStyles.container}
        contentContainerStyle={lobbyStyles.scrollView}
    >
        <View style={lobbyStyles.rowId}>
            <TouchableOpacity style={lobbyStyles.returnButton}>
                <Text style={lobbyStyles.returnButtonText}>return</Text>
            </TouchableOpacity>
            <Text>[ID utilisateur]</Text>
        </View>
        
        <View style={lobbyStyles.listBloc}>
            <Text>
                - User ID
                - User ID
            </Text>
        </View>
        
        <View style={lobbyStyles.launchBlocButton}>
            <TouchableOpacity style={lobbyStyles.launchButton}>
                <Text style={lobbyStyles.launchButtonText}>launch</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
  );
};

export default LobbyScreen;


