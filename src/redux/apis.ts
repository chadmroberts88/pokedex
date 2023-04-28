import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {PokeAPI} from 'pokeapi-types';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://pokeapi.co/api/v2/'}),
  endpoints: builder => ({
    getPokemonByName: builder.query<PokeAPI.Pokemon, string>({
      query: name => `pokemon/${name}`,
    }),
    listPokemon: builder.query<PokeAPI.NamedAPIResourceList, number>({
      query: offset => `pokemon/?limit=50&offset=${offset}`,
      serializeQueryArgs: ({endpointName}) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.results.push(...newItems.results);
      },
      forceRefetch: ({currentArg, previousArg}) => {
        return currentArg !== previousArg;
      },
    }),
  }),
});
