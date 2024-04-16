import React, {useEffect} from 'react';
import { ListUserBloc, Item, ItemText } from "./ListUser.style";
import {useAppDispatch, useAppSelector} from "../../app/redux/store/store";
import webSocketService, {InitialMessage} from "../../app/redux/slice/WebSocketService";
import {Player} from "../../models/player";
import {setPlayers} from "../../app/redux/slice/gameReducer";

let users = ['User ID 1', 'User ID 2', 'User ID 3'];

interface ListUserProps {
    users: string[];
}

const ListUser = () => {
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
        <ListUserBloc>
            {players.map((player, index) => (
                <Item  key={index} style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }} >
                    <ItemText>Name: {player.name}</ItemText>
                    <ItemText>Status: {player.status ? 'Online' : 'Offline'}</ItemText>
                </Item>
            ))}
        </ListUserBloc>
    );
};

export default ListUser;