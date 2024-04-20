import React from "react";
import {ImageBackground} from "react-native";
import {globalStyles} from "../../globals/styles";
import {TextFailed, Container} from "./styles";
import GameID from "../../components/GameID/GameID";


const FailedScreen = () => {

    return (
        <>
            <ImageBackground
                source={require('../../../assets/img/failed/failed.png')}
                style={globalStyles.container}
            >
                <GameID />

                <Container>
                    <TextFailed>Your ship has been destroyed</TextFailed>
                </Container>
            </ImageBackground>
        </>
    )};

export default FailedScreen;