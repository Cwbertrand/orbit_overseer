import React from "react";
import {styles} from "../../screens/home/styles";
import {Text} from "react-native";
import {ThemedButton} from "react-native-really-awesome-button";

interface Props {
    onPress?: () => void,
    text?: string,
    buttonStyle?: object,
}

const ReturnButton: React.FC<Props> = ({onPress, text, buttonStyle}) =>
    <ThemedButton
        name="bruce"
        type="youtube"
        width={350}
        onPress={onPress} 
        style={buttonStyle}
    >
        <Text
            style={styles.buttonText}
        >
            {text}
        </Text>
    </ThemedButton>


export default ReturnButton;