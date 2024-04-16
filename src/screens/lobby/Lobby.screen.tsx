import * as React from 'react';
import { FlatList, Text, View } from 'react-native';
import LaunchButton from '../../components/LaunchButton/LaunchButton';
import ReturnButton from "../../components/ReturnButton/ReturnButton";
import { LobbyWrapper,  NavButton } from "./styles";
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../../app/redux/store/store';
import { ThemedButton } from 'react-native-really-awesome-button';
import { useEffect, useRef } from 'react';
import { setGameId, setPlayers } from '../../app/redux/slice/gameReducer';
import webSocketService, { InitialMessage } from '../../app/redux/slice/WebSocketService';
import { Player } from '../../models/player';
import {ImageBackground} from 'react-native';
import {DisplayIdSession} from "../../components/DisplayIdSession/DisplayIdSession";
import ListUser from '../../components/ListUser/ListUser';
import {globalStyles} from "../../globals/styles";

const LobbyScreen = () => {
    const navigation = useNavigation();
    const { gameId, players } = useAppSelector(state => state.game);
    const dispatch = useAppDispatch();
    console.log(gameId);
    useEffect(() => {
        if (gameId) {
            // Checking if a connection is already established, if so, no reconnection should be necessary
            if (webSocketService.isConnected()) {
                console.log('WebSocket is already connected.');
                return;
            }
            // Creating the variable of the values to send to the server through webSocket
            const initialMessage: InitialMessage = {
                type: 'connect',
                data: {
                    gameId: gameId as string,
                    playerId: players[0].userId as string,
                    playerName: players[0].name,
                }
            };
            console.log(initialMessage);

            // Establishing the webSocket connection and the initialMessage sends the values to the server.
            // Then the (message) method receives the values from the server and parses it to display the data
            webSocketService.connect(initialMessage, (message) => {
                const parsedMessage = JSON.parse(message);
                //if(parsedMessage.data === 'ping'){return;}
                if (parsedMessage.type === 'players') {
                    // Map the incoming data to the Player interface, filling in missing fields as needed
                    const playersData: Player[] = parsedMessage.data.players.map((player: any) => ({
                        name: player.name,
                        status: player.status,
                    }));
                    dispatch(setPlayers(playersData));
                }
            });

            // Disconnect from WebSocket when component unmounts
            return () => {
                webSocketService.disconnect();
            };

        }
    }, [dispatch, gameId]);
    
    return (
        <LobbyWrapper>
            <ImageBackground
                source={require('../../../assets/img/lobby/lobbys.png')}
                style={globalStyles.container}
                resizeMode='cover'
            >

                <Text>Id de joue: {gameId}</Text>
                
                <View>
                    {players.map((player, index) => (
                        <View key={index} style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                            <Text>Name: {player.name}</Text>
                            <Text>Status: {player.status ? 'Online' : 'Offline'}</Text>
                        </View>
                    ))}
                </View>
                
                <DisplayIdSession />

                <ListUser/>

                <NavButton>
                    <LaunchButton
                        //onPress={} 
                        text={'Launch'}
                        disabled={!players.every(player => player.status)}
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

