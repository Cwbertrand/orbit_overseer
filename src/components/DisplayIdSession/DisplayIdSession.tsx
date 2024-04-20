import uuid from "react-native-uuid";
import {styles} from "./styles";
import {CopyIdToClipboard} from "../CopyIdToClipboard/CopyIdToClipboard";
import * as React from "react";
import {View} from "react-native";
import { useAppSelector } from "../../app/redux/store/store";

interface Props {
    placeholder?: string;
    style?: object;
    viewStyles?: object;
    disabled?: boolean;
    text?: string;
    userId?: string;
}

export const DisplayIdSession = () => {
    const { playerId } = useAppSelector(state => state.game);
    
    return (
        <View style={{ alignItems: 'center', marginTop: 10 }}>
            <CopyIdToClipboard
                text={playerId as string}
                style={styles.inputStyles}
                viewStyles={styles.viewStyles}
                disabled
            />
        </View>
    );
};