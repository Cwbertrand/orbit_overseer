import React from "react";
import { ImageBackground } from 'react-native';
import {globalStyles} from "../../globals/styles";
import {TextSuccess, Container} from "./styles";
import GameID from "../../components/GameID/GameID";


const SuccessScreen = () => {

    return (
        <>
            <ImageBackground
                source={require('../../../assets/img/success/success.png')}
                style={globalStyles.container}
            >
                <GameID />
                
                <Container>
                    <TextSuccess>Victory</TextSuccess>
                </Container>
            </ImageBackground>
        </>
    )};

export default SuccessScreen;