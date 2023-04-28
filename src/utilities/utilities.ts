import {PokeAPI} from 'pokeapi-types';

export const extractIdFromUrl = (url: string): string => {
  return url.substring(34, url.length - 1);
};

export const formatText = (text: string): string => {
  return text
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const sortMovesByName = (
  moves: PokeAPI.PokemonMove[] | undefined,
): PokeAPI.PokemonMove[] => {
  const toSort = moves ? [...moves] : [];
  return toSort && toSort.length > 1
    ? toSort.sort((a, b) =>
        a.move.name > b.move.name ? 1 : b.move.name > a.move.name ? -1 : 0,
      )
    : toSort;
};
