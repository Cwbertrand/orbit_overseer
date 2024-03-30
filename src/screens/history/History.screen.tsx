import * as React from 'react';
import ReturnButton from "../../components/ReturnButton/ReturnButton";
import { useNavigation } from '@react-navigation/native';
import { Return } from "./styles";


const HistoryScreen = () => {
    const navigation = useNavigation();
    return (
        <>
            <Return>
                <ReturnButton
                    onPress={() => navigation.goBack()}
                    text={'Return'}
                    buttonStyle={{ 
                        backgroundColor: 'red',
                        width: '90%',
                }}
                />
            </Return>
            
        </>
    )};

export default HistoryScreen;


