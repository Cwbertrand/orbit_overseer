import React from "react";
import {ButtonStyles, ButtonText} from './LaunchButton.style';

interface Props {
    onPress?: () => void,
    text?: string
}

const LaunchButton: React.FC<Props> = ({onPress, text}) =>
    <ButtonStyles>
        <ButtonText>{text}</ButtonText>
    </ButtonStyles>

export default LaunchButton;