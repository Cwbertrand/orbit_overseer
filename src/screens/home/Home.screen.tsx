import * as React from 'react';
import {useCallback, useEffect, useState} from 'react';
import { Text, View, ScrollView, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();
import {globalStyles} from "../../globals/styles";
import { styles } from './styles';
import { ThemedButton } from 'react-native-really-awesome-button';
import { useNavigation } from '@react-navigation/native';
import { getUserName, storeUserName } from '../../app/logic/asyncStorageForUserName/userNameStorage';
import EditUsername from "../../components/EditUsername/EditUsername";
import {JoinModalContent} from '../../components/JoinModalContent/JoinModalContent';
import { ReusableModal } from '../../components/ReusableModal/ReusableModal';
import {DisplayIdSession} from "../../components/DisplayIdSession/DisplayIdSession";

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState<string>('');
  const [modalVisible, setModalVisible] = useState(false);
  
  // load username 
  useEffect(() => {
    const loadUserName = async () => {
      const storedUserName = await getUserName();
      if (storedUserName) setUserName(storedUserName);
    };
    loadUserName();
  }, []);

  // handle username
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
            
            <View style={styles.bottomBtns} onLayout={onLayoutRootView}>
              <View style={styles.createJoinBtns}>
                
          {/* button for create a game */}
                <ThemedButton 
                  width={150} 
                  name="bruce" 
                  type="anchor"
                  onPress={() => navigation.navigate('Lobby' as never)}
                >
                  <Text style={{ fontFamily: 'OuterSpace'}}>Create</Text>
                </ThemedButton>
                
          {/* button for joining a game */}
                <ThemedButton 
                    width={150} 
                    backgroundColor={'#25D366'}
                    name="bruce" 
                    type="anchor" 
                    style={styles.opCreateJoin}
                    onPress={() => setModalVisible(true)} 
                >
                  <Text style={{ fontFamily: 'OuterSpace'}}>Join</Text>
                </ThemedButton>
              </View>
              
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
            </View>
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
}

export default HomeScreen;