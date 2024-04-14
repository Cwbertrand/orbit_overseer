import React from "react";
import {Text} from "react-native";
import {ThemedButton} from "react-native-really-awesome-button";

interface Props {
    onPress?: () => void,
    text?: string,
    buttonStyle?: object,
}

const LaunchButton: React.FC<Props> = ({onPress, text}) =>
    <ThemedButton
        name="bruce"
        type="anchor"
        backgroundColor={'#25D366'}
        width={350}
        onPress={onPress}
    >
        <Text style={{ fontFamily: 'OuterSpace'}}>{text}</Text>
    </ThemedButton>

export default LaunchButton;