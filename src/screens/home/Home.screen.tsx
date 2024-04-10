import * as React from 'react';
import { Text, View, ScrollView, ImageBackground } from 'react-native';
import { styles } from './styles';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { ThemedButton } from 'react-native-really-awesome-button';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { getUserName, storeUserName } from '../../app/logic/asyncStorageForUserName/userNameStorage';
import EditUsername from "../../components/EditUsername/EditUsername";

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  const [fontsLoaded] = useFonts({
    'Outer-Space': require('../../../assets/fonts/outer_space2/OuterSpace.ttf'),
  });
  const navigation = useNavigation();
  const [userName, setUserName] = useState<string>('')

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      }
    }

    prepare();
  }, [fontsLoaded]);


  const handleStoreUserName = async (newUserName: string) => {
    await storeUserName(newUserName);
    setUserName(newUserName);
  };


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
          <EditUsername />
          
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
              <ThemedButton 
                  width={150} 
                  name="rick" 
                  type="whatsapp" 
                  style={styles.opCreateJoin}
              >
                <Text style={styles.buttonText}>Join</Text>
              </ThemedButton>
            </View>

            <View>
              <ThemedButton 
                  width={350} 
                  name="bruce" 
                  type="secondary" 
                  style={{marginBottom: 10}}
                  onPress={() => navigation.navigate('History' as never)}
              >
                <Text style={[styles.buttonText, styles.blackInput]}>History</Text>
              </ThemedButton>
              
              <ThemedButton 
                  width={350} 
                  name="bruce" 
                  type="youtube" 
                  style={styles.buttonText}
              >
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

