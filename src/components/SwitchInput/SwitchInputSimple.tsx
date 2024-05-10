import React, { useState } from 'react';
import { View, Switch, StyleSheet } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../app/redux/store/store';
import { changePlayerStatus } from '../../app/redux/slice/gameReducer';

const SwitchInputSimple = ({ validateSwitch, disabled }: any) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const {playerId, playerName} = useAppSelector(state => state.game);
    const dispatch = useAppDispatch();

    
    const toggleSwitch = () => {
        // Call the validation function passed as a prop
        if (validateSwitch()) {
            dispatch(changePlayerStatus(playerId as string))
            setIsEnabled(previousState => !previousState);
        } else {
            dispatch(changePlayerStatus(playerId as string))
            alert('Switch cannot be toggled due to validation failure.');
        }
    };

    return (
        <View style={styles.container}>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                disabled={disabled}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default SwitchInputSimple;

