import * as React from 'react';
import {Text} from 'react-native';
import LaunchButton from '../../components/LaunchButton/LaunchButton';
import ReturnButton from "../../components/ReturnButton/ReturnButton";
import ListUser from '../../components/ListUser/ListUser';
import { LobbyWrapper, Launch, NavLobby } from "./styles";
import { useNavigation } from '@react-navigation/native';
import {DisplayIdSession} from "../../components/DisplayIdSession/DisplayIdSession";


const LobbyScreen = () => {
    const navigation = useNavigation();
    
return (
    <LobbyWrapper>
        
        <DisplayIdSession />
        
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
                text={'Launch'}
            />
        </Launch>
    </LobbyWrapper>
)};

export default LobbyScreen;


