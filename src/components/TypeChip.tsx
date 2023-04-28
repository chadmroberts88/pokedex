import React from 'react';
import {Chip} from 'react-native-paper';
import {formatText} from '../utilities/utilities';
import {typeAccentColors} from '../styles/colors';
import {PokemonType, TypeChipProps} from '../types/types';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TypeChip = (props: TypeChipProps): JSX.Element => {
  const chipStyle = {
    backgroundColor: typeAccentColors[props.type],
  };

  const selectIcon = (type: PokemonType): JSX.Element => {
    let iconName: string;
    switch (type) {
      case 'dark':
        iconName = 'moon-waning-crescent';
        break;
      case 'dragon':
        iconName = 'firefox';
        break;
      case 'electric':
        iconName = 'lightning-bolt';
        break;
      case 'fairy':
        iconName = 'star-four-points';
        break;
      case 'fighting':
        iconName = 'arm-flex';
        break;
      case 'flying':
        iconName = 'bird';
        break;
      case 'grass':
        iconName = 'leaf';
        break;
      case 'ground':
        iconName = 'dots-triangle';
        break;
      case 'ice':
        iconName = 'snowflake';
        break;
      case 'normal':
        iconName = 'pokeball';
        break;
      case 'poison':
        iconName = 'skull';
        break;
      case 'psychic':
        iconName = 'eye';
        break;
      case 'rock':
        iconName = 'octahedron';
        break;
      case 'shadow':
        iconName = 'dharmachakra';
        break;
      case 'steel':
        iconName = 'vector-triangle';
        break;
      case 'unknown':
        iconName = 'progress-question';
        break;
      default:
        iconName = type;
        break;
    }
    return <Icon name={iconName} color="#FFFFFF" size={16} />;
  };

  return (
    <Chip
      elevated={true}
      style={chipStyle}
      textStyle={styles.text}
      icon={() => selectIcon(props.type)}>
      {formatText(props.type)}
    </Chip>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#FFFFFF',
  },
});

export default TypeChip;
