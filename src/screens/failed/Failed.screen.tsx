import {ImageBackground, Text} from "react-native";
import {globalStyles} from "../../globals/styles";
import React from "react";


const FailedScreen = () => {

    return (
        <>
            <ImageBackground
                source={require('../../../assets/img/failed/failed.png')}
                style={globalStyles.container}
            >
                <Text>Your ship has been destroyed ...</Text>
            </ImageBackground>
        </>
    )};

export default FailedScreen;