import React, {useMemo, useState} from 'react';
import {FlatList, StyleSheet, TextInput, View} from 'react-native';
import {pokemonApi} from '../redux/apis';
import {PokemonListProps} from '../types/types';
import {PokeAPI} from 'pokeapi-types';
import {formatText} from '../utilities/utilities';

import PokemonItem from '../components/PokemonItem';
import ListLoadingIndicator from '../components/ListLoadingIndicator';
import EmptyListMessage from '../components/EmptyListMessage';
import {commonColors} from '../styles/colors';

const PokemonList = (props: PokemonListProps): JSX.Element => {
  const OFFSET_SIZE = 50;
  const [offset, setOffset] = useState<number>(0);
  const [searchText, setSearchText] = useState<string>('');
  const {data, isFetching} = pokemonApi.useListPokemonQuery(offset);

  const handleFetchMore = (): void => {
    if (!isFetching) {
      setOffset(prev => prev + OFFSET_SIZE);
    }
  };

  const handleOnChangeText = (text: string): void => {
    setSearchText(text);
  };

  const filteredData = useMemo((): PokeAPI.NamedAPIResource[] | undefined => {
    return data?.results.filter(item =>
      formatText(item.name).toLowerCase().includes(searchText.toLowerCase()),
    );
  }, [data?.results, searchText]);

  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search Pokemon"
          onChangeText={handleOnChangeText}
        />
      </View>
      <FlatList
        contentContainerStyle={styles.list}
        data={filteredData}
        renderItem={({item}) => <PokemonItem item={item} {...props} />}
        initialNumToRender={OFFSET_SIZE}
        keyExtractor={item => item.name}
        onEndReached={
          data !== undefined &&
          searchText === '' &&
          data.results.length < data.count
            ? handleFetchMore
            : null
        }
        onEndReachedThreshold={0.5}
        ListFooterComponent={isFetching ? <ListLoadingIndicator /> : null}
        ListEmptyComponent={<EmptyListMessage />}
      />
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    flexGrow: 1,
  },
  inputContainer: {
    backgroundColor: commonColors.darkRed,
  },
  input: {
    height: 40,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
});

export default PokemonList;
