import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface LobbyScreenProps {}

const LobbyScreen = (props: LobbyScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>LobbyScreen</Text>
    </View>
  );
};

export default LobbyScreen;

const styles = StyleSheet.create({
  container: {}
});
