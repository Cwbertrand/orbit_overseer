import React, { useState } from 'react';
import { View, TouchableOpacity, Text} from 'react-native';
import { useAppDispatch, useAppSelector } from '../../app/redux/store/store';
import { changePlayerStatus } from '../../app/redux/slice/gameReducer';
import { styles } from './styles';

// @ts-ignore
const Button3D = ({ validateSwitch, disabled }) => {
    const [isPressed, setIsPressed] = useState(false);
    const { playerId, playerName } = useAppSelector(state => state.game);
    const dispatch = useAppDispatch();

    const handlePress = () => {
        if (validateSwitch() && !disabled) {
            setIsPressed(!isPressed);
            dispatch(changePlayerStatus(playerId as string));
        } else {
            alert('Button cannot be toggled due to validation failure or it is disabled.');
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.button, isPressed ? styles.pressed : styles.notPressed]}
                onPress={handlePress}
                disabled={disabled}
            >
                <Text style={styles.text}>{isPressed ? 'ready' : 'not ready'}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Button3D;
