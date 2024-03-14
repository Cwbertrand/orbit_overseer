import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface testProps {}

const test = (props: testProps) => {
  return (
    <View style={styles.container}>
      <Text>test</Text>
    </View>
  );
};

export default test;

const styles = StyleSheet.create({
  container: {}
});
