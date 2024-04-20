import React from "react";
import { ImageBackground } from 'react-native';
import {globalStyles} from "../../globals/styles";
import {TextSuccess} from "./styles";


const SuccessScreen = () => {

    return (
        <>
            <ImageBackground
                source={require('../../../assets/img/success/success.png')}
                style={globalStyles.container}
            >
                <TextSuccess>Victory !</TextSuccess>
            </ImageBackground>
        </>
    )};

export default SuccessScreen;