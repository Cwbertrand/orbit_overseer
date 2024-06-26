import * as React from 'react';
import { styles } from './styles';
import {ImageBackground, Text, TextInput, View} from 'react-native';
import EditUsername from '../../components/EditUsername/EditUsername';
import { ThemedButton } from 'react-native-really-awesome-button';
import {useNavigation} from "@react-navigation/native";
import {useAppDispatch, useAppSelector} from "../../app/redux/store/store";
import {useEffect, useState} from "react";
import {getUserName} from "../../app/logic/asyncStorageForUserName/userNameStorage";
import {setGameId, setPlayers} from "../../app/redux/slice/gameReducer";

export const JoinModalContent = () => {
    const navigation = useNavigation();
    const dispatch = useAppDispatch();
    const { playerId, playerName } = useAppSelector(state => state.game);
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
            userId: playerId as string,
            name: playerName as string,
        }
        dispatch(setGameId(gameIdInput))
        dispatch(setPlayers([currentPlayer]));
        navigation.navigate('Lobby' as never)
    };
    return (
        <ImageBackground
            source={require('../../../assets/img/modal/fontScreen.png')}
            style={styles.container}
            resizeMode='cover'
        >
            <EditUsername showButton={false} />

            <View style={styles.viewStyles}>
                <TextInput
                    onChangeText={setGameIdInput}
                    value={gameIdInput}
                    placeholder="Enter game ID"
                    placeholderTextColor="#40ec69"
                    style={styles.TextInput}
                />
            </View>
            
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
        </ImageBackground>
    );
};