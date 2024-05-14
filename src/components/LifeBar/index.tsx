import React from "react";
import { GreenBar, LifeBarContainer, RedBar } from "./style";
import { useState, useEffect } from 'react';

export interface Props {
    width: number;
    opacity: number | undefined | null;
    color: string | undefined | null;
}

const LifeBar: React.FC<Props> = ({ width }) => {

    const [opacity, setOpacity] = useState(1);
    const [color, setColor] = useState("green");

    // Checks the value of life bar width and update the color based on width
    useEffect(() => {
        if (width > 30) {
            setColor("green");
        } else if (width <= 30 && width > 20) {
            setColor("yellow");
        } else if (width <= 20 && width > 10) {
            setColor("orange");
        } else if (width <= 10) {
            setColor("red");
        }
    }, [width]);

    return (
        <LifeBarContainer>
            <GreenBar width={width} opacity={opacity} color={color}/>
            <RedBar width={100 - width} opacity={undefined} color={undefined}/>
        </LifeBarContainer>
    );
};

export default LifeBar;
