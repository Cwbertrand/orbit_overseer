import React from "react";
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
        type="anchor"
        backgroundColor={'#cc0000'}
        width={350}
        onPress={onPress} 
        style={buttonStyle}
    >
        <Text style={{ fontFamily: 'OuterSpace'}}>{text}</Text>
    </ThemedButton>

export default ReturnButton;