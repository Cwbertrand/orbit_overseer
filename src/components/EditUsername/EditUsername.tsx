import {styles} from "./styles";
import {TouchableOpacity, View} from "react-native";
import InputText from "../InputText/InputText";
import {getUserName, storeUserName} from "../../app/logic/asyncStorageForUserName/userNameStorage";
import {AntDesign} from "@expo/vector-icons";
import * as React from "react";
import {useEffect, useState} from "react";
import { useAppDispatch, useAppSelector } from "../../app/redux/store/store";
import { setPlayerName } from "../../app/redux/slice/gameReducer";

const EditUsername = ({showButton = true}) => {
    const [userName, setUserName] = useState<string>('')
    const { playerName } = useAppSelector(state => state.game);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const loadUserName = async () => {
            const storedUserName = await getUserName();
            if (storedUserName) {
                setUserName(storedUserName);
                dispatch(setPlayerName(storedUserName));
            } 
        };
        loadUserName();
    }, []);

    const handleStoreUserName = async (newUserName: string) => {
        await storeUserName(newUserName);
        setUserName(newUserName);
        dispatch(setPlayerName(newUserName));
    };

    return (
            <View style={styles.inputUsername}>
                <InputText
                    placeholder={playerName as string}
                    style={styles.TextInput}
                    viewStyles={styles.viewStyles}
                    onChangeText={handleStoreUserName}
                />

                {/*Edit button with condition*/}
                {showButton && (
                <TouchableOpacity style={styles.btnEdit} onPress={() => storeUserName(userName)}>
                    <AntDesign name="edit" size={20} color="#40ec69" />
                </TouchableOpacity>
                )}
            </View>
    );
};

export default EditUsername;