import {ImageBackground} from "react-native";
import {globalStyles} from "../../globals/styles";
import React from "react";


const GameScreen = () => {
    
    return (
        <>
            <ImageBackground
                source={require('../../../assets/img/game/game.png')}
                style={globalStyles.container}
            >
                
            </ImageBackground>
        </>
    )};

export default GameScreen;