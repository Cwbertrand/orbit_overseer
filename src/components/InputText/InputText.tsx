import * as React from 'react';
import { useState } from 'react';
import { View, TextInput } from 'react-native';

interface Props {
    placeholder?: string;
    style?: object;
    viewStyles?: object;
    value?: any;
    onChangeText?: (text: string) => void;
}

const InputText = ({placeholder, style, viewStyles, onChangeText }: Props) => {
    const [textValue, setTextValue] = useState<string>('');
    const handleEndEditing = () => {
        if (onChangeText  != undefined) onChangeText (textValue);
    };
    return (
        <View style={viewStyles}>
            <TextInput 
                textAlign='center'
                style={style}  
                onChangeText={setTextValue}
                onEndEditing={handleEndEditing}
                value={textValue}
                placeholder={placeholder}
                placeholderTextColor={`#fff`}
            />
        </View>
    );
};

export default InputText;