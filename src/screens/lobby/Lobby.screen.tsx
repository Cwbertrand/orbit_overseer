import * as React from 'react';
import {ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {DisplayIdSession} from "../../components/DisplayIdSession/DisplayIdSession";
import LaunchButton from '../../components/LaunchButton/LaunchButton';
import ReturnButton from "../../components/ReturnButton/ReturnButton";
import ListUser from '../../components/ListUser/ListUser';
import {globalStyles} from "../../globals/styles";
import { LobbyWrapper, NavButton } from "./styles";

const LobbyScreen = () => {
    const navigation = useNavigation();
    
return (
    <LobbyWrapper>
        <ImageBackground
            source={require('../../../assets/img/lobby/lobbys.png')}
            style={globalStyles.container}
            resizeMode='cover'
        >
            <DisplayIdSession />
            
            <ListUser/>
            
            <NavButton>
                <LaunchButton
                    //onPress={} 
                    text={'Launch'}
                />
                <ReturnButton
                    onPress={() => navigation.goBack()}
                    text={'Leave'}
                />
            </NavButton>
        </ImageBackground>
    </LobbyWrapper>
)};

export default LobbyScreen;


