import React from "react";
import { Text, View, ImageBackground } from 'react-native';
import {globalStyles} from "../../globals/styles";


const SuccessScreen = () => {

    return (
        <>
            <ImageBackground
                source={require('../../../assets/img/success/success.png')}
                style={globalStyles.container}
            >
                <Text>Victory !</Text>
            </ImageBackground>
        </>
    )};

export default SuccessScreen;