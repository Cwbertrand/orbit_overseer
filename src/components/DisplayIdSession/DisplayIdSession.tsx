import uuid from "react-native-uuid";
import {styles} from "./styles";
import {CopyIdToClipboard} from "../CopyIdToClipboard/CopyIdToClipboard";
import * as React from "react";
import {View} from "react-native";

interface Props {
    placeholder?: string;
    style?: object;
    viewStyles?: object;
    disabled?: boolean;
    text?: string;
}

export const DisplayIdSession = () => {
    
    return (
        <View style={{ alignItems: 'center', marginTop: 10 }}>
            <CopyIdToClipboard
                text={uuid.v4() as string}
                style={styles.inputStyles}
                viewStyles={styles.viewStyles}
                disabled
            />
        </View>
       
    );
};