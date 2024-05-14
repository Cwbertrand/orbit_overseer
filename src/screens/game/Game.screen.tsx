import React, { useEffect, useState } from "react";
import {Button, ImageBackground} from "react-native";
import {globalStyles} from "../../globals/styles";
import {useNavigation} from "@react-navigation/native";
import GameID from "../../components/GameID/GameID";
import { useAppSelector } from "../../app/redux/store/store";
import WebSocketService from "../../app/redux/slice/WebSocketService";
import { Operation } from "../../models/operation";
import { Element } from "../../models/element";

const GameScreen = () => {
    const navigation = useNavigation();
    const { gameId, players, playerId, playerName } = useAppSelector(state => state.game);
    const [gameElement, setGameElement] = useState<Element[]>([]);
    const [operation, setOperation] = useState<Operation>();
    const [integrity, setIntegrity] = useState<number>(100);
    // Get the singleton instance of the WebSocketService
    const webSocketService = WebSocketService.getInstance(); 

    useEffect(() => {
        handleGame();
    }, []); 
    
    const handleGame = () => {
        if(gameId) {
            if(webSocketService.socket){
                webSocketService.socket.onmessage = (e: MessageEvent) => {
                    console.log(e.data);
                    const dataValue = e.data.data;
                    if (e.type === 'operation') {
                        try {
                            if (dataValue.role === 'operator') {
                                console.log(dataValue);
                                setGameElement(dataValue.element);
                                dataValue.description
                                setTimeout(() => {
                                    setGameElement([]);
                                    dataValue.description = "En attente de la prochaine opération...";
                                }, dataValue.duration * 1000);
                            }
                            if (dataValue.role === 'instructor') {
                                console.log(dataValue);
                                setGameElement(dataValue.element);
                                dataValue.description
                                setTimeout(() => {
                                    setGameElement([]);
                                    dataValue.description = "En attente de la prochaine opération...";
                                }, dataValue.duration * 1000);
                            }
                            setOperation(dataValue);
                        } catch (error) {
                            throw error;
                        }

                    }
                    if (e.type === "integrity") {
                        try {
                            setIntegrity(dataValue.integrity);
                        } catch (err) {
                            console.error("Error parsing message:", err);
                        }
                    }
                    
                }
            }
        }

    }

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