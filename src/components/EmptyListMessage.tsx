import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {commonColors} from '../styles/colors';

const EmptyListMessage = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No Pokemon Found</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: commonColors.lightGrey,
  },
});

export default EmptyListMessage;
