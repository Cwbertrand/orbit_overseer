import * as React from 'react';
import ReturnButton from "../../components/ReturnButton/ReturnButton";
import { useNavigation } from '@react-navigation/native';
import { Return } from "./styles";
import EditUsername from "../../components/EditUsername/EditUsername";
import * as SplashScreen from 'expo-splash-screen';
import {globalStyles} from "../../globals/styles";
import {ImageBackground} from "react-native";
SplashScreen.preventAutoHideAsync();

const HistoryScreen = () => {
    const navigation = useNavigation();
    const buttonStyle = { };
    
    return (
        <>
            <ImageBackground
                source={require('../../../assets/img/history/history.png')}
                style={globalStyles.container}
                resizeMode='cover'
            >
                <EditUsername />
                
                <Return>
                    <ReturnButton
                        onPress={() => navigation.goBack()}
                        text={'Return'}
                        buttonStyle={buttonStyle}
                    />
                </Return>
            </ImageBackground>
        </>
    )};

export default HistoryScreen;