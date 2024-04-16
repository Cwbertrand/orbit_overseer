import {styles} from "./EditUsername.style";
import {CopyIdToClipboard} from "../CopyIdToClipboard/CopyIdToClipboard";
import uuid from "react-native-uuid";
import {TouchableOpacity, View} from "react-native";
import InputText from "../InputText";
import {getUserName, storeUserName} from "../../app/logic/asyncStorageForUserName/userNameStorage";
import {AntDesign} from "@expo/vector-icons";
import * as React from "react";
import {useEffect, useState} from "react";

const EditUsername = () => {
    const [userName, setUserName] = useState<string>('')

    useEffect(() => {
        const loadUserName = async () => {
            const storedUserName = await getUserName();
            if (storedUserName) setUserName(storedUserName);
        };
        loadUserName();
    }, []);

    const handleStoreUserName = async (newUserName: string) => {
        await storeUserName(newUserName);
        setUserName(newUserName);
    };

    return (
            <View style={styles.topBtns}>
                <CopyIdToClipboard
                    text={uuid.v4() as string}
                    style={styles.inputStyles}
                    viewStyles={styles.viewStyles}
                    disabled
                />
                <View style={styles.inputRow}>
                    <InputText
                        placeholder={userName}
                        style={styles.inputStyles}
                        viewStyles={styles.viewStyles}
                        onChangeText={handleStoreUserName}
                    />
                    <TouchableOpacity style={styles.btnEdit} onPress={() => {storeUserName(userName)}}>
                        <AntDesign name="edit" size={30} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
    );
};

export default EditUsername;