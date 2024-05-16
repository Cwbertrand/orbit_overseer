import React, { useState } from 'react';
import {ButtonContainer, ButtonText} from "./style";

export interface ButtonProps {
    id: number;
    value: string;
    valueType?: string;
}

const GameButton : React.FC<ButtonProps> = ({id, value, valueType}) => {
    
    return (
        <ButtonContainer value={value} type={valueType}>
            <ButtonText>{(valueType === 'color') ? '' : value}</ButtonText>
        </ButtonContainer>
    );
};

export default GameButton;