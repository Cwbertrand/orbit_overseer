import * as React from 'react';
import LaunchButton from '../../components/LaunchButton/LaunchButton';
import ReturnButton from "../../components/ReturnButton/ReturnButton";
import { LobbyWrapper,  NavButton } from "./styles";
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../../app/redux/store/store';
import { useEffect} from 'react';
import { setPlayers } from '../../app/redux/slice/gameReducer';
import webSocketService from '../../app/redux/slice/WebSocketService';
import { Player } from '../../models/player';
import {ImageBackground} from 'react-native';
import {DisplayIdSession} from "../../components/DisplayIdSession/DisplayIdSession";
import ListUser from '../../components/ListUser/ListUser';
import {globalStyles} from "../../globals/styles";
import GameID from "../../components/GameID/GameID";
import WebSocketService from '../../app/redux/slice/WebSocketService';

const LobbyScreen = () => {
    const navigation = useNavigation();
    const { gameId, players, playerId, playerName } = useAppSelector(state => state.game);
    const dispatch = useAppDispatch();

    // Get the singleton instance of the WebSocketService
    const webSocketService = WebSocketService.getInstance(); 

    useEffect(() => {
        if (gameId) {
            // Creating the variable of the values to send to the server through webSocket
            const initialMessage = {
                type: 'connect',
                data: {
                    gameId: gameId as string,
                    playerId: playerId as string,
                    playerName: playerName as string,
                }
            };

            // Establishing the webSocket connection and the initialMessage sends the values to the server.
            // Then the (message) method receives the values from the server and parses it to display the data
            webSocketService.connect(initialMessage, (message) => {
                if(message.type === 'start'){
                    navigation.navigate('Game' as never)
                }

                // Respond from the websocket connection
                if (message.type === 'players') {
                    // Map the incoming data to the Player interface, filling in missing fields as needed
                    const playersData: Player[] = message.data.players.map((player: any) => ({
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

    const handleStartGame = () => {
        const startMessage = JSON.stringify({
            type: 'start',
            data: {
                gameId: gameId as string,
            }
        });
        webSocketService.socket?.send(startMessage);
    };
    
    return (
        <LobbyWrapper>
            <ImageBackground
                source={require('../../../assets/img/lobby/lobbys.png')}
                style={globalStyles.container}
                resizeMode='cover'
            >
                <GameID />
                <DisplayIdSession />
                <ListUser/>

                <NavButton>
                    <LaunchButton
                        onPress={handleStartGame}
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

