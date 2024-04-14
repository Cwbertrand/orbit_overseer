import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import {styles} from "./styles";

interface Props {
    placeholder?: string;
    style?: object;
    viewStyles?: object;
    disabled?: boolean;
    text?: string; 
}

export const CopyIdToClipboard = ({  viewStyles, text }: Props) => {
    const [textValue, setTextValue] = useState<string>(text || '');
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = () => {
        Clipboard.setString(textValue);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <>
            <TouchableOpacity
                style={viewStyles}
                onPress={copyToClipboard} 
                disabled={isCopied}
            >
                <Text style={{color: '#fff'}}>{text}</Text>
            </TouchableOpacity>
            {isCopied && <Text style={styles.copiedText}>Copied</Text>}
        </>
        
    );
};