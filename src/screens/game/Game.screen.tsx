import React, { useEffect, useState } from "react";
import {Button, ImageBackground} from "react-native";
import {globalStyles} from "../../globals/styles";
import {useNavigation} from "@react-navigation/native";
import GameID from "../../components/GameID/GameID";
import { useAppSelector } from "../../app/redux/store/store";
import WebSocketService from "../../app/redux/slice/WebSocketService";

const GameScreen = () => {
    const navigation = useNavigation();
    const { gameId, players, playerId, playerName } = useAppSelector(state => state.game);
    const [operation, setOperation] = useState(null);
    // Get the singleton instance of the WebSocketService
    const webSocketService = WebSocketService.getInstance(); 

    useEffect(() => {
        if(gameId) {
            if(webSocketService.socket){
                webSocketService.socket.onmessage = (e: MessageEvent) => {
                    console.log(e.data);
                    if (e.type === 'operation') {
                        setOperation(e.data);
                    }
                    
                }
            }
        }
    }, []); 

    

    

    return (
        <>
            <ImageBackground
                source={require('../../../assets/img/game/gameScreen.png')}
                style={globalStyles.container}
            >
                <GameID />

                {/* Button to navigate to the Victory screen */}
                <Button
                    title="Go to Victory Screen"
                    onPress={() => navigation.navigate('Success' as never)}
                />

                {/* Button to navigate to the Defeat screen */}
                <Button
                    title="Go to Defeat Screen"
                    onPress={() => navigation.navigate('Failed' as never)} 
                />
                
            </ImageBackground>
        </>
    )};

export default GameScreen;