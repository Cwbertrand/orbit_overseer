import React, {useEffect, useState} from 'react';
import {SwitchButton, SwitchContainer, SwitchText} from "./style";

export interface SwitchProps {
    id: number;
    value: string | number;
    valueType: string;
}

const GameSwitch : React.FC<SwitchProps> = ({id, value, valueType }) => {
    const [switchValue, setSwitchValue] = useState(false);

    useEffect(() => {
        // Reset switchValue to false when GameElementsList changes
        setSwitchValue(false);
    }, [value]);

    return (
        <SwitchContainer>
            <SwitchButton
                value={switchValue}
                trackColor={{ false: '#cecece', true: '#cecece' }}
                ios_backgroundColor="#cecece"
                thumbColor={ (valueType === 'color') ? value as string : "#ffffff"}
            >
            </SwitchButton>
            {(valueType === 'color' ? '' : <SwitchText>{value}</SwitchText>)}
        </SwitchContainer>
    );
};

export default GameSwitch;