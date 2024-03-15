import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

interface Props {
    placeholder?: string;
    style?: object;
    viewStyles?: object;
}

const InputText = ({placeholder, style, viewStyles}: Props) => {
    const [textValue, setTextValue] = useState<string>('');
    return (
        <View style={viewStyles}>
            <TextInput 
                textAlign='center'
                style={style}  
                onChangeText={ textInput => setTextValue(textInput)}
                value={textValue}
                placeholder={placeholder}
                placeholderTextColor={`#fff`}
            />
        </View>
    );
};

export default InputText;

const styles = StyleSheet.create({
    // inputBox: {
    //     display: "flex",
    //     paddingVertical: 20,
    //     paddingHorizontal: 20,
    //     borderWidth: 2,
    //     borderColor: 'rgba(255,255,255,0.15)',
    //     flexDirection: "row",
    //     marginBottom: 15,
    // },
    // textInput: {
    //     width: '90%',
    //     fontSize: 16,
    //     color: '#fff',
    // },
});
