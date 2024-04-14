import * as React from 'react';
import { styles } from './styles';
import { Text, View} from 'react-native';
import EditUsername from '../../components/EditUsername/EditUsername';
import { ThemedButton } from 'react-native-really-awesome-button';
import {DisplayIdSession} from "../../components/DisplayIdSession/DisplayIdSession";

export const JoinModalContent = () => {
    return (
        <View style={styles.container}>
            
            <DisplayIdSession />
            <EditUsername />
            
            <View> 
                <ThemedButton 
                    width={150}
                    backgroundColor={'#25D366'}
                    name="bruce"
                    type="anchor"
                    style={styles.Button}
                >
                    <Text style={{ fontFamily: 'OuterSpace'}}>Join</Text>
                </ThemedButton>
            </View>
        </View>
    );
};