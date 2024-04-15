import {styles} from "./style";
import {TouchableOpacity, View} from "react-native";
import InputText from "../InputText/InputText";
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
            <View style={styles.inputUsername}>
                <InputText
                    placeholder={userName}
                    style={styles.TextInput}
                    viewStyles={styles.viewStyles}
                    onSave={handleStoreUserName}
                />
                
                {/*Edit button*/}
                <TouchableOpacity style={styles.btnEdit} onPress={() => storeUserName(userName)}>
                    <AntDesign name="edit" size={30} color="white" />
                </TouchableOpacity>
            </View>
    );
};

export default EditUsername;