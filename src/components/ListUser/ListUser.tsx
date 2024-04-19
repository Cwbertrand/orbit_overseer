import React, {useEffect, useState} from 'react';
import { ListUserBloc, Item, ItemText } from "./ListUser.style";
import {useAppDispatch, useAppSelector} from "../../app/redux/store/store";
import webSocketService, {InitialMessage} from "../../app/redux/slice/WebSocketService";
import {Player} from "../../models/player";
import {changePlayerStatus, setPlayers} from "../../app/redux/slice/gameReducer";
import SwitchInput from '../SwitchInput/SwitchInput';
import SwitchInputSimple from '../SwitchInput/SwitchInputSimple';
import { getUserId } from '../../app/logic/asyncStorageForUserName/userNameStorage';


const ListUser = () => {
    const { gameId, players, player} = useAppSelector(state => state.game);
    const dispatch = useAppDispatch();

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

    function validateSwitch() {
        console.log(player)
        dispatch(changePlayerStatus(player as string))
        return true;
    }

    return (
        <ListUserBloc>
            {players.map((player, index) => (
                <Item  key={index} >
                    <ItemText>{player.name}</ItemText>
                    <SwitchInputSimple validateSwitch={validateSwitch } />
                </Item>
            ))}
        </ListUserBloc>
    );
};

export default ListUser;