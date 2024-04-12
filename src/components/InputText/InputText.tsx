import * as React from 'react';
import { useState } from 'react';
import { View, TextInput } from 'react-native';

interface Props {
    placeholder?: string;
    style?: object;
    viewStyles?: object;
    value?: any;
    onSave?: (text: string) => void;
}

const InputText = ({placeholder, style, viewStyles, onSave}: Props) => {
    const [textValue, setTextValue] = useState<string>('');
    const handleEndEditing = () => {
        if (onSave != undefined) onSave(textValue);
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