import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import EditUsername from '../../components/EditUsername/EditUsername';
import { ThemedButton } from 'react-native-really-awesome-button';
import InputText from '../../components/InputText';
import AntDesign from '@expo/vector-icons/build/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../../app/redux/store/store';
import { setGameId, setPlayers } from '../../app/redux/slice/gameReducer';
import uuid from "react-native-uuid";
import { useEffect, useState } from 'react';
import { getUserName } from '../../app/logic/asyncStorageForUserName/userNameStorage';

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
            {/* <EditUsername /> */}

            <View style={styles.inputRow}>
                <TextInput
                    style={styles.inputStyles}
                    onChangeText={setGameIdInput}
                    value={gameIdInput}
                    placeholder="Enter the game ID"
                    //keyboardType="numeric"
                />
                {/* <InputText
                    placeholder={'Enter the game ID'}
                    style={styles.inputStyles}
                    viewStyles={styles.viewStyles}
                    value={gameIdInput}
                    onChangeText={setGameIdInput}
                /> */}
            </View>
            <View> 
                <ThemedButton 
                    width={150}
                    name="bruce" 
                    type="anchor" 
                    style={styles.startButton}
                    onPress={handleJoinGame}
                >
                    <Text style={[styles.textColor, styles.colorInput]}>Join game</Text>
                </ThemedButton>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#10ffff",
        width: 300,
        height: 350
    },
    startButton: {
        marginBottom: 30
    },
    inputRow: {
        //flexDirection: 'row',
        marginVertical: 19,
    },
    inputStyles: {
        width: '100%',
        fontSize: 5,
        fontFamily: 'Outer-Space',
        color: '#fff',
    },
    viewStyles: {
        display: "flex",
        alignSelf: "center",
        width: '90%',
        paddingVertical: 7,
        paddingHorizontal: 15,
        borderWidth: 2,
        borderColor: 'transparent',
        backgroundColor: 'rgba(4,13,62, 0.9)',
        flexDirection: "row",
        marginBottom: 2,
    },
    textColor: {},
    colorInput: {
    },

});
