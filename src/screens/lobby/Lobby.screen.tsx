import * as React from 'react';
import {Text} from 'react-native';
import LaunchButton from '../../components/LaunchButton/LaunchButton';
import ReturnButton from "../../components/ReturnButton/ReturnButton";
import ListUser from '../../components/ListUser/ListUser';
import { LobbyWrapper, Launch, NavLobby } from "./styles";
import { useNavigate } from 'react-router-native';

const LobbyScreen = () => {
    //const navigate = useNavigate();
    
  return (
    <LobbyWrapper>
        <NavLobby>
            <ReturnButton
                //onPress={'/Home'} 
                text={'Return'}
            />
            <Text>[ID utilisateur]</Text>
        </NavLobby>
        
        <ListUser/>
        
        <Launch>
            <LaunchButton 
                //onPress={} 
                text={'Launch !'}
            />
        </Launch>
    </LobbyWrapper>
  );
};

export default LobbyScreen;


