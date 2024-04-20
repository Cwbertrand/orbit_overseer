import React from "react";
import { ImageBackground } from 'react-native';
import {globalStyles} from "../../globals/styles";
import {TextSuccess, Container, FilterImg} from "./styles";
import GameID from "../../components/GameID/GameID";
import ReturnButton from "../../components/ReturnButton/ReturnButton";
import {Return} from "../history/styles";
import {useNavigation} from "@react-navigation/native";


const SuccessScreen = () => {
    const navigation = useNavigation();
    const buttonStyle = { };
    
    return (
        <>
            <ImageBackground
                source={require('../../../assets/img/success/success.png')}
                style={globalStyles.container}
            >
                <FilterImg>
                    <GameID />

                    <Container>
                        <TextSuccess>Victory</TextSuccess>
                    </Container>

                    <Return>
                        <ReturnButton
                            onPress={() => navigation.navigate('/' as never)}
                            text={'go to menu'}
                            buttonStyle={buttonStyle}
                        />
                    </Return>
                </FilterImg>
            </ImageBackground>
        </>
    )};

export default SuccessScreen;