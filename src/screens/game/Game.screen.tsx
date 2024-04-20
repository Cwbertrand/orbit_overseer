import React from "react";
import {Button, ImageBackground} from "react-native";
import {globalStyles} from "../../globals/styles";
import {useNavigation} from "@react-navigation/native";
import GameID from "../../components/GameID/GameID";


const GameScreen = () => {
    const navigation = useNavigation();
    
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