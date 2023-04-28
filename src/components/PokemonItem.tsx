import React, {memo} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {PokemonItemProps} from '../types/types';
import {formatText, extractIdFromUrl} from '../utilities/utilities';
import {commonColors} from '../styles/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PokemonItem = (props: PokemonItemProps): JSX.Element => {
  const id: string = extractIdFromUrl(props.item.url);

  const handlePress = (): void => {
    props.navigation.navigate('Pokemon Details', {name: props.item.name});
  };

  return (
    <Pressable style={styles.itemContainer} onPress={handlePress}>
      <Image
        source={require('../../assets/images/PokeballRed.png')}
        resizeMode="contain"
        style={styles.backgroundImage}
      />
      <Image
        style={styles.image}
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.id}>{`#${id}`}</Text>
        <Text style={styles.name}>{formatText(props.item.name)}</Text>
      </View>
      <View>
        <Icon name="arrow-right" color={commonColors.darkGrey} size={16} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: 24,
    borderRadius: 10,
    marginTop: 12,
    marginHorizontal: 8,
    paddingVertical: 8,
    paddingLeft: 16,
    backgroundColor: '#FFFFFF',
    shadowColor: commonColors.shadowGrey,
    shadowOffset: {width: -2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
    overflow: 'hidden',
  },
  backgroundImage: {
    opacity: 0.07,
    position: 'absolute',
    left: -40,
    height: 140,
    width: 140,
    zIndex: -1,
  },
  image: {
    width: 70,
    height: 70,
  },
  textContainer: {
    flex: 1,
    rowGap: 2,
  },
  id: {
    fontSize: 18,
    color: commonColors.darkGrey,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default memo(PokemonItem);
