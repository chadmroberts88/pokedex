import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {PokemonDetailsProps, PokemonType} from '../types/types';
import {formatText, sortMovesByName} from '../utilities/utilities';
import {pokemonApi} from '../redux/apis';
import {typeBackgroundColors} from '../styles/colors';
import {Text} from 'react-native-paper';

import LoadingView from '../components/LoadingView';
import TypeChip from '../components/TypeChip';
import MoveChip from '../components/MoveChip';

const PokemonDetails = (props: PokemonDetailsProps): JSX.Element => {
  const {data, isLoading} = pokemonApi.useGetPokemonByNameQuery(
    props.route.params.name,
  );

  const pokemonType = data?.types[0].type.name as PokemonType;

  const containerStyle = {
    flex: 1,
    backgroundColor:
      data !== undefined ? typeBackgroundColors[pokemonType] : '#D3D3D3',
  };

  return isLoading ? (
    <LoadingView />
  ) : (
    <View style={containerStyle}>
      <Image
        source={require('../../assets/images/Pokeball.png')}
        resizeMode="cover"
        style={styles.backgroundImage}
      />

      <View style={styles.header}>
        <Text style={styles.name}>{formatText(props.route.params.name)}</Text>
        <Text style={styles.id}>#{data?.id}</Text>
        <Image
          style={styles.image}
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data?.id}.png`,
          }}
        />
      </View>

      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}>
        <View>
          <Text style={styles.sectionHeading}>Types</Text>
          <View style={styles.typesContainer}>
            {data?.types.map((item, index) => (
              <TypeChip
                key={`${item.type.name}${index}`}
                type={item.type.name as PokemonType}
              />
            ))}
          </View>
        </View>

        <View style={styles.statsContainer}>
          <View>
            <Text style={styles.sectionHeading}>Height</Text>
            <Text>{data?.height ?? '-'} m</Text>
          </View>
          <View>
            <Text style={styles.sectionHeading}>Weight</Text>
            <Text>{data?.weight ?? '-'} kg</Text>
          </View>
        </View>

        <View>
          <Text style={styles.sectionHeading}>Moves</Text>
          <View style={styles.movesContainer}>
            {sortMovesByName(data?.moves)?.map((item, index) => (
              <MoveChip
                key={`${item.move.name}${index}`}
                move={item.move.name}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 180,
    alignItems: 'center',
  },
  backgroundImage: {
    opacity: 0.2,
    position: 'absolute',
    height: 225,
    width: 225,
    zIndex: -1,
    alignSelf: 'center',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: -80,
  },
  typesContainer: {
    flex: 1,
    flexDirection: 'row',
    columnGap: 8,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 32,
  },
  movesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 8,
    rowGap: 8,
    paddingBottom: 40,
  },
  scrollContent: {
    rowGap: 16,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
    paddingTop: 24,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    zIndex: -1,
  },
  name: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 16,
  },
  id: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default PokemonDetails;
