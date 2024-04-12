import * as React from 'react';
import {Text} from 'react-native';
import LaunchButton from '../../components/LaunchButton/LaunchButton';
import ReturnButton from "../../components/ReturnButton/ReturnButton";
import ListUser from '../../components/ListUser/ListUser';
import { LobbyWrapper, Launch, NavLobby } from "./styles";
import { useNavigation } from '@react-navigation/native';


const LobbyScreen = () => {
    const navigation = useNavigation();
    
return (
    <LobbyWrapper>
        <Text>[ID utilisateur]</Text>
        <NavLobby>
            <ReturnButton
                onPress={() => navigation.goBack()} 
                text={'Leave'}
            />
        </NavLobby>
        
        <ListUser/>
        
        <Launch>
            <LaunchButton 
                //onPress={} 
                text={'Launch !'}
            />
        </Launch>
    </LobbyWrapper>
)};

export default LobbyScreen;


