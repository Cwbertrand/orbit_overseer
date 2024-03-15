import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import { styles } from './HomeScreenStyles';
import { AntDesign } from '@expo/vector-icons';
import InputText from '../../components/InputText';
import { useFonts } from 'expo-font';
import { ThemedButton } from 'react-native-really-awesome-button';
import { useNavigation } from '@react-navigation/native';
import uuid from 'react-native-uuid';
import { useState } from 'react';
import { CopyIdToClipboard } from '../../components/CopyIdToClipboard/CopyIdToClipboard';
import Clipboard from '@react-native-clipboard/clipboard';

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  const [fontsLoaded] = useFonts({
    'Outer-Space': require('../../../assets/fonts/outer_space2/Outer Space.ttf'),
  });

  const navigation = useNavigation();
  return (
    <>
    <ImageBackground
      source={require('../../../assets/img/homepage/bg1.jpg')}
      style={styles.container}
    >
        <ScrollView 
          bounces={false}
          contentContainerStyle={styles.scrollViewContainer}
        >
          <View style={styles.topBtns}>
            <CopyIdToClipboard 
              text={uuid.v4() as string}
              style={styles.inputStyles}
              viewStyles={styles.viewStyles}
              disabled
            />
            <View style={styles.inputRow}>
              <InputText 
                placeholder="User name" 
                style={styles.inputStyles}
                viewStyles={styles.viewStyles}
              /> 
              <TouchableOpacity style={styles.btnEdit}>
                <AntDesign name="edit" size={30} color="white" />
              </TouchableOpacity>
            </View>
          </View>


          <View style={styles.bottomBtns}>
            <View style={styles.createJoinBtns}>
              <ThemedButton 
                width={150} 
                name="bruce" 
                type="anchor" 
                style={styles.opCreateJoin}
                onPress={() => navigation.navigate('Lobby' as never)}
              >
                <Text style={[styles.buttonText, styles.blackInput]}>Create</Text>
              </ThemedButton>
              <ThemedButton width={150} name="rick" type="whatsapp" style={styles.opCreateJoin}>
                <Text style={styles.buttonText}>Join</Text>
              </ThemedButton>
            </View>

            <View>
              <ThemedButton width={350} name="bruce" type="secondary" style={{marginBottom: 10}}>
                <Text style={[styles.buttonText, styles.blackInput]}>History</Text>
              </ThemedButton>
              <ThemedButton width={350} name="bruce" type="youtube" style={styles.buttonText}>
                <Text style={styles.buttonText}>Exit</Text>
              </ThemedButton>
            </View>
          </View>
        </ScrollView>
    </ImageBackground>
    </>
  );
};

export default HomeScreen;

