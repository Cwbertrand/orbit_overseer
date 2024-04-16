import * as React from 'react';
import { Text, View, ScrollView, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();
import {globalStyles} from "../../globals/styles";
import {NavBar, ButtonGroup} from './styles';
import { ThemedButton } from 'react-native-really-awesome-button';
import { useNavigation } from '@react-navigation/native';
import { getUserName, storeUserName } from '../../app/logic/asyncStorageForUserName/userNameStorage';
import EditUsername from "../../components/EditUsername/EditUsername";
import {JoinModalContent} from '../../components/JoinModalContent/JoinModalContent';
import { ReusableModal } from '../../components/ReusableModal/ReusableModal';
import {DisplayIdSession} from "../../components/DisplayIdSession/DisplayIdSession";
import { useAppDispatch, useAppSelector } from '../../app/redux/store/store';
import { createGame, setGameId, setPlayers } from '../../app/redux/slice/gameReducer';
import uuid from "react-native-uuid";
import {useCallback, useEffect, useState} from "react";

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState<string>('');
  const [modalVisible, setModalVisible] = useState(false);
  
  // load username 
  const dispatch = useAppDispatch();

  useEffect(() => {
    const loadUserName = async () => {
      const storedUserName = await getUserName();
      if (storedUserName) setUserName(storedUserName);
    };
    loadUserName();
  }, []);

  // handle username
  const handleCreateGame = () => {
    dispatch(createGame());
    const currentPlayer = {
      userId: uuid.v4() as string,
      name: userName,
      status: false,
      isCreator: true
    }
    dispatch(setPlayers([currentPlayer]));
    navigation.navigate('Lobby' as never)
  };

  const handleStoreUserName = async (newUserName: string) => {
    await storeUserName(newUserName);
    setUserName(newUserName);
  };
  
  // Import font style
  const [fontsLoaded, fontError] = useFonts({
    'OuterSpace': require('../../../assets/fonts/OuterSpace.ttf'),
  });
  
  // load font style
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  
  return (
    <>
      <ImageBackground
        source={require('../../../assets/img/homepage/home.png')}
        style={globalStyles.container}
      >
          <ScrollView 
            bounces={false}
            contentContainerStyle={globalStyles.scrollViewContainer}
          >
            <DisplayIdSession />
              
            <EditUsername />
            
            <NavBar  onLayout={onLayoutRootView}>
                <ButtonGroup>
                  {/* button for create a game */}
                  <ThemedButton
                      width={150}
                      name="bruce"
                      type="anchor"
                      onPress={handleCreateGame}
                  >
                    <Text style={{ fontFamily: 'OuterSpace'}}>Create</Text>
                  </ThemedButton>

                  {/* button for joining a game */}
                  <ThemedButton
                      width={150}
                      backgroundColor={'#25D366'}
                      name="bruce"
                      type="anchor"
                      onPress={() => setModalVisible(true)}
                  >
                    <Text style={{ fontFamily: 'OuterSpace'}}>Join</Text>
                  </ThemedButton>
                </ButtonGroup>

                <View>
                  {/* button to see party history */}
                  <ThemedButton
                      width={350}
                      name="bruce"
                      type="secondary"
                      style={{marginBottom: 10}}
                      onPress={() => navigation.navigate('History' as never)}
                  >
                    <Text style={{ fontFamily: 'OuterSpace'}}>History</Text>
                  </ThemedButton>

                  <ThemedButton
                      width={350}
                      name="bruce"
                      type="anchor"
                      backgroundColor={'#cc0000'}
                  >
                    <Text style={{ fontFamily: 'OuterSpace'}}>Exit</Text>
                  </ThemedButton>
                </View>
            </NavBar>
            
          </ScrollView>
      </ImageBackground>
      
      {/* ReusableModal Component */}
      <ReusableModal 
        visible={modalVisible} 
        transparent={true} 
        dismiss={() => setModalVisible(false)} 
        margin={60}
      >
        <JoinModalContent />
      </ReusableModal>
    </>
  );
};

export default HomeScreen;

