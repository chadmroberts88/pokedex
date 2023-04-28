import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {commonColors} from '../styles/colors';

const LoadingView = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
      <Text style={styles.text}>Loading Pokemon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: commonColors.darkGrey,
  },
});

export default LoadingView;
