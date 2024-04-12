import * as React from 'react';
import { Text, View, ScrollView, ImageBackground } from 'react-native';
import { styles } from './styles';
import { ThemedButton } from 'react-native-really-awesome-button';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { getUserName, storeUserName } from '../../app/logic/asyncStorageForUserName/userNameStorage';
import EditUsername from "../../components/EditUsername/EditUsername";
import { JoinModalContent } from '../JoinModalContent/JoinModalContent';
import { ReusableModal } from '../../components/ReusableModal/ReusableModal';

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
  
  return (
    <>
      <ImageBackground
        source={require('../../../assets/img/homepage/wallpaper.png')}
        style={styles.container}
      >
          <ScrollView 
            bounces={false}
            contentContainerStyle={styles.scrollViewContainer}
          >
            <EditUsername />
            
            <View style={styles.bottomBtns}>
              <View style={styles.createJoinBtns}>
                
          {/* button for create a game */}
                <ThemedButton 
                  width={150} 
                  name="bruce" 
                  type="anchor" 
                  style={styles.opCreateJoin}
                  onPress={() => navigation.navigate('Lobby' as never)}
                >
                  <Text 
                      style={[styles.buttonText, styles.blackInput]}
                  >
                    Create
                  </Text>
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
                  <Text>Join</Text>
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
                  <Text 
                      style={[styles.buttonText, styles.blackInput]}
                  >
                    History
                  </Text>
                </ThemedButton>
                
                <ThemedButton 
                    width={350} 
                    name="bruce" 
                    type="youtube" 
                    style={styles.buttonText}
                >
                  <Text 
                      style={styles.buttonText}
                  >
                    Exit
                  </Text>
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
};

export default HomeScreen;

