import React from "react";
import {Text} from "react-native";
import {ThemedButton} from "react-native-really-awesome-button";

interface Props {
    onPress?: () => void,
    text?: string,
    buttonStyle?: object,
    disabled?: boolean,
}

const LaunchButton: React.FC<Props> = ({onPress, text, disabled}) =>
    <ThemedButton
        name="bruce"
        type="anchor"
        backgroundColor={ disabled ? 'gray' : '#25D366' }
        width={350}
        style={{marginBottom: 10}}
        onPress={onPress}
        disabled={disabled}
    >
        <Text style={{ fontFamily: 'OuterSpace'}}>{text}</Text>
    </ThemedButton>

export default LaunchButton;