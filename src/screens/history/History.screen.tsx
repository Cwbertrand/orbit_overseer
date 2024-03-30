import * as React from 'react';
import ReturnButton from "../../components/ReturnButton/ReturnButton";
import { useNavigation } from '@react-navigation/native';
import { Return } from "./styles";
import EditUsername from "../../components/EditUsername/EditUsername";


const HistoryScreen = () => {
    const navigation = useNavigation();
    return (
        <>
            <EditUsername />
            
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


