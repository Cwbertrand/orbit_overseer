import React from "react";
import {ButtonStyles, ButtonText} from './ReturnButton.style';

interface Props {
    onPress?: () => void,
    text?: string,
    buttonStyle?: object,
}

const ReturnButton: React.FC<Props> = ({onPress, text, buttonStyle}) =>
    <ButtonStyles onPress={onPress} style={buttonStyle}>
        <ButtonText>{text}</ButtonText>
    </ButtonStyles>

export default ReturnButton;