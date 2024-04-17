import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const AccordionHistory = () => {
    const [openSection, setOpenSection] = useState<number | null>(null);

    const sections = [
        { title: 'Titre party 1', content: 'Contenu de la party 1' },
        { title: 'Titre party 2', content: 'Contenu de la party 2' },
    ];

    const toggleSection = (sectionIndex: number) => {
        setOpenSection(openSection === sectionIndex ? null : sectionIndex);
    };

    const textStyle = { color: 'white' };

    return (
        <View>
            {sections.map((section, index) => (
                <View key={index}>
                    <TouchableOpacity onPress={() => toggleSection(index)}>
                        <Text style={textStyle}>{section.title}</Text>
                    </TouchableOpacity>
                    {openSection === index && <Text style={textStyle}>{section.content}</Text>}
                </View>
            ))}
        </View>
    );
}

export default AccordionHistory;