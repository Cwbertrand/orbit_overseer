import React from "react";
import {ImageBackground} from "react-native";
import {globalStyles} from "../../globals/styles";
import {TextFailed} from "./styles";


const FailedScreen = () => {

    return (
        <>
            <ImageBackground
                source={require('../../../assets/img/failed/failed.png')}
                style={globalStyles.container}
            >
                <TextFailed>Your ship has been destroyed ...</TextFailed>
            </ImageBackground>
        </>
    )};

export default FailedScreen;