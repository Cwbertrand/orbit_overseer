import React from "react";
import {ButtonStyles, ButtonText} from './ReturnButton.style';

interface Props {
    onPress?: () => void,
    text?: string
}

const ReturnButton: React.FC<Props> = ({onPress, text}) =>
    <ButtonStyles>
        <ButtonText>{text}</ButtonText>
    </ButtonStyles>

export default ReturnButton;