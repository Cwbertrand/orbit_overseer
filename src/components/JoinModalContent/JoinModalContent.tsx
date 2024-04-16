import * as React from 'react';
import { styles } from './styles';
import {Text, TextInput, View} from 'react-native';
import EditUsername from '../../components/EditUsername/EditUsername';
import { ThemedButton } from 'react-native-really-awesome-button';
import {DisplayIdSession} from "../../components/DisplayIdSession/DisplayIdSession";
import {useNavigation} from "@react-navigation/native";
import {useAppDispatch} from "../../app/redux/store/store";
import {useEffect, useState} from "react";
import {getUserName} from "../../app/logic/asyncStorageForUserName/userNameStorage";
import uuid from "react-native-uuid";
import {setGameId, setPlayers} from "../../app/redux/slice/gameReducer";

export const JoinModalContent = () => {
    const navigation = useNavigation();
    const dispatch = useAppDispatch();
    const [userName, setUserName] = useState<string>('');
    const [gameIdInput, setGameIdInput] = useState<string>('');

    useEffect(() => {
        const loadUserName = async () => {
            const storedUserName = await getUserName();
            if (storedUserName) setUserName(storedUserName);
        };
        loadUserName();
    }, []);

    const handleGameId = () => {
        setGameIdInput(gameIdInput)
    }

    const handleJoinGame = () => {
        setGameIdInput(gameIdInput);
        const currentPlayer = {
            userId: uuid.v4() as string,
            name: userName,
            status: false,
            isCreator: false
        }
        dispatch(setGameId(gameIdInput))
        dispatch(setPlayers([currentPlayer]));
        navigation.navigate('Lobby' as never)
    };
    
    return (
        <View style={styles.container}>
            
            <DisplayIdSession />
            <EditUsername />

            <TextInput
                onChangeText={setGameIdInput}
                value={gameIdInput}
                placeholder="Enter the game ID"
            />
            
            <View> 
                <ThemedButton 
                    width={150}
                    backgroundColor={'#25D366'}
                    name="bruce"
                    type="anchor"
                    style={styles.Button}
                    onPress={handleJoinGame}
                >
                    <Text style={{ fontFamily: 'OuterSpace'}}>Join</Text>
                </ThemedButton>
            </View>
        </View>
    );
};