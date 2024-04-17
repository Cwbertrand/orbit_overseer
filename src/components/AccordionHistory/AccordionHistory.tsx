import React, { useState } from 'react';
import { View, Text, TouchableOpacity, LayoutAnimation } from 'react-native';
import { styles } from './styles';

const AccordionHistory = () => {
    const [openSection, setOpenSection] = useState<number | null>(null);

    const sections = [
        { title: 'Titre party 1', content: 'Contenu de la party 1' },
        { title: 'Titre party 2', content: 'Contenu de la party 2' },
    ];

    const toggleSection = (sectionIndex: number) => {
        // Prépare une animation de mise en page
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setOpenSection(openSection === sectionIndex ? null : sectionIndex);
    };

    return (
        <View style={styles.container}>
            {sections.map((section, index) => (
                <View style={styles.section} key={index}>
                    <TouchableOpacity onPress={() => toggleSection(index)}>
                        <Text style={styles.title}>{section.title}</Text>
                    </TouchableOpacity>
                    {openSection === index && <Text style={styles.content}>{section.content}</Text>}
                </View>
            ))}
        </View>
    );
}

export default AccordionHistory;