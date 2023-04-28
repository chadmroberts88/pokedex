import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PokeAPI} from 'pokeapi-types';

export type RootStackParamsList = {
  'Pokemon List': undefined;
  'Pokemon Details': {name: string};
};

export type PokemonListProps = NativeStackScreenProps<
  RootStackParamsList,
  'Pokemon List'
>;

export type PokemonDetailsProps = NativeStackScreenProps<
  RootStackParamsList,
  'Pokemon Details'
>;

export type PokemonItemProps = PokemonListProps & {
  item: PokeAPI.NamedAPIResource;
};

export type PokemonType =
  | 'bug'
  | 'dark'
  | 'dragon'
  | 'electric'
  | 'fairy'
  | 'fighting'
  | 'fire'
  | 'flying'
  | 'ghost'
  | 'grass'
  | 'ground'
  | 'ice'
  | 'normal'
  | 'poison'
  | 'psychic'
  | 'rock'
  | 'shadow'
  | 'steel'
  | 'unknown'
  | 'water';

export type TypeChipProps = {
  type: PokemonType;
};

export type MoveChipProps = {
  move: string;
};
