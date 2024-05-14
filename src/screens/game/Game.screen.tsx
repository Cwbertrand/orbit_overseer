import React, { useEffect, useState } from "react";
import {Button, ImageBackground} from "react-native";
import {globalStyles} from "../../globals/styles";
import {useNavigation} from "@react-navigation/native";
import GameID from "../../components/GameID/GameID";
import { useAppSelector } from "../../app/redux/store/store";
import WebSocketService from "../../app/redux/slice/WebSocketService";
import { Operation } from "../../models/operation";
import { Element } from "../../models/element";
import OrderText from "../../components/OrderText/OrderText";
import LifeBar from "../../components/LifeBar/LifeBar";
import Rounds from "../../components/Rounds/Rounds";
import Progress from "../../components/ProgressBar/ProgressBar";

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
        if (gameId) {
            if (webSocketService.socket) {
                webSocketService.socket.onmessage = (e: MessageEvent) => {
                    try {
                        const dataValue = JSON.parse(e.data);
                        //console.log("Received from:", dataValue);
                        if (dataValue.type === 'operation') {
                            const operationData = dataValue.data;
                            console.log("Received operation from:", operationData.role);
                            if (operationData.role === 'operator') {
                                setGameElement(operationData.elements);
                                setTimeout(() => {
                                    setGameElement([]);
                                    operationData.description = "En attente de la prochaine opération...";
                                }, operationData.duration * 1000);
                            }
                            if (operationData.role === 'instructor') {
                                setGameElement(operationData.elements);
                                setTimeout(() => {
                                    setGameElement([]);
                                    operationData.description = "En attente de la prochaine opération...";
                                }, operationData.duration * 1000);
                            }
                            setOperation(operationData);
                        }

                        if(dataValue.type === "integrity") {
                            setIntegrity(dataValue.data.integrity)
                        }
                    } catch (error) {
                        console.error('Error parsing JSON from WebSocket message:', error);
                    }
                }
            }
        }
    }
    console.log("Received gameelement from:", gameElement)
    console.log("Received integrity from:", integrity)
    return (
        <>
            <ImageBackground
                source={require('../../../assets/img/game/gameScreen.png')}
                style={globalStyles.container}
            >
                <GameID />
                <LifeBar width={integrity} opacity = {undefined} color = {undefined}/>
                <Progress durationInSeconds={operation?.duration}/>
                <Rounds rounds={operation?.turn}/>
                <OrderText OperationText={
                        (operation?.description === undefined || null)
                            ? 'Attendez votre tour pour jouer' : operation?.description
                    }
                />

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