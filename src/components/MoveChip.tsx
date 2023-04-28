import React from 'react';
import {formatText} from '../utilities/utilities';
import {MoveChipProps} from '../types/types';
import {StyleSheet} from 'react-native';
import {View, Text} from 'react-native';
import {commonColors} from '../styles/colors';

const MoveChip = (props: MoveChipProps): JSX.Element => {
  return (
    <View style={styles.chip}>
      <Text style={styles.text}>{formatText(props.move)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  chip: {
    backgroundColor: commonColors.lightGrey,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },
  text: {
    fontSize: 10,
    fontWeight: '500',
  },
});

export default MoveChip;
