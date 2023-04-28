import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {commonColors} from '../styles/colors';

const ListLoadingIndicator = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
      <Text style={styles.text}>Loading More Pokemon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 4,
    marginTop: 8,
    marginHorizontal: 8,
    paddingVertical: 4,
    paddingHorizontal: 4,
  },
  text: {
    color: commonColors.darkGrey,
  },
});

export default ListLoadingIndicator;
