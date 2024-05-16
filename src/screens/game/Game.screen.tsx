import React, { useEffect, useState } from "react";
import { Button, ImageBackground, View } from "react-native";
import { globalStyles } from "../../globals/styles";
import { useNavigation } from "@react-navigation/native";
import GameID from "../../components/GameID/GameID";
import { useAppSelector } from "../../app/redux/store/store";
import WebSocketService from "../../app/redux/slice/WebSocketService";
import { Operation } from "../../models/operation";
import { Element } from "../../models/element";
import OrderText from "../../components/OrderText/OrderText";
import LifeBar from "../../components/LifeBar/LifeBar";
import Rounds from "../../components/Rounds/Rounds";
import Progress from "../../components/ProgressBar/ProgressBar";
import GameButton from "../../components/GameButton";
import GameSwitch from "../../components/GameSwitch"; // Import de GameSwitch

const GameScreen = () => {
    const navigation = useNavigation();
    const { gameId, players, playerId, playerName } = useAppSelector(state => state.game);
    const [gameElement, setGameElement] = useState<Element[]>([]);
    const [operation, setOperation] = useState<Operation>();
    const [integrity, setIntegrity] = useState<number>(100);
    const webSocketService = WebSocketService.getInstance();

    useEffect(() => {
        if (gameId) {
            handleGame();
        }
    }, [gameId]);

    const handleGame = () => {
        if (webSocketService.socket) {
            webSocketService.socket.onmessage = (e: MessageEvent) => {
                try {
                    const dataValue = JSON.parse(e.data);
                    if (dataValue.type === 'operation') {
                        const operationData = dataValue.data;
                        if (operationData.role === 'operator' || operationData.role === 'instructor') {
                            setGameElement(operationData.elements);
                            setTimeout(() => {
                                setGameElement([]);
                                operationData.description = "En attente de la prochaine opération...";
                            }, operationData.duration * 1000);
                        }
                        setOperation(operationData);
                    }

                    if (dataValue.type === "integrity") {
                        setIntegrity(dataValue.data.integrity);
                    }
                } catch (error) {
                    console.error('Error parsing JSON from WebSocket message:', error);
                }
            };
        }
    };

    console.log("Received gameelement from:", gameElement);
    console.log("Received integrity from:", integrity);

    return (
        <ImageBackground
            source={require('../../../assets/img/game/gameScreen.png')}
            style={globalStyles.container}
        >
            <GameID />
            <LifeBar width={integrity} opacity={undefined} color={undefined} />
            <Progress durationInSeconds={operation?.duration} />
            <Rounds rounds={operation?.turn} />
            <OrderText OperationText={
                operation?.description ?? 'Attendez votre tour pour jouer'
            }
            />
            <View>
                {gameElement.map((element) => (
                    typeof element.value === 'number' ? (
                        <GameSwitch
                            key={element.id}
                            value={element.value}
                            id={element.id}
                            valueType={element.valueType}
                        />
                    ) : (
                        <GameButton
                            key={element.id}
                            value={element.value}
                            id={element.id}
                            valueType={element.valueType}
                        />
                    )
                ))}
            </View>

            {/* Button to navigate to the Victory screen */}
            <Button
                title="Go to Victory Screen"
                onPress={() => navigation.navigate('Success' as never)}
            />

            <Button
                title="Go to Defeat Screen"
                onPress={() => navigation.navigate('Failed' as never)}
            />
        </ImageBackground>
    );
};

export default GameScreen;