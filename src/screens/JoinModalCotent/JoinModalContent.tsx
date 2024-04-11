import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import EditUsername from '../../components/EditUsername/EditUsername';
import { ThemedButton } from 'react-native-really-awesome-button';

export const JoinModalContent = () => {
    return (
        <View style={styles.container}>
            <EditUsername />
            <View> 
                <ThemedButton 
                    width={150} 
                    name="bruce" 
                    type="anchor" 
                    style={styles.startButton}
                >
                    <Text style={[styles.textColor, styles.colorInput]}>Démarre le joue</Text>
                </ThemedButton>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#10ffff",
        width: 300,
        height: 350
    },
    startButton: {
        marginBottom: 30
    },
    textColor: {},
    colorInput: {
    },

});
