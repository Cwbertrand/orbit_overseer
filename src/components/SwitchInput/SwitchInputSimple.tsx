import React, { useState } from 'react';
import { View, Switch, StyleSheet } from 'react-native';

const SwitchInputSimple = ({ validateSwitch }: any) => {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        // Call the validation function passed as a prop
        if (validateSwitch()) {
            setIsEnabled(previousState => !previousState); // Toggle the switch state
        } else {
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
