import React from "react";
import {ButtonStyles, ButtonText} from './ReturnButton.style';

interface Props {
    onPress?: () => void,
    text?: string
}

const ReturnButton: React.FC<Props> = ({onPress, text}) =>
    <ButtonStyles onPress={onPress}>
        <ButtonText>{text}</ButtonText>
    </ButtonStyles>

export default ReturnButton;