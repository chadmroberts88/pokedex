import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamsList} from './src/types/types';
import {ApiProvider} from '@reduxjs/toolkit/query/react';
import {Provider as PaperProvider} from 'react-native-paper';
import {pokemonApi} from './src/redux/apis';

import PokemonList from './src/screens/PokemonList';
import PokemonDetails from './src/screens/PokemonDetails';
import {commonColors} from './src/styles/colors';

const Stack = createNativeStackNavigator<RootStackParamsList>();

const screenOptions = {
  headerStyle: {
    backgroundColor: commonColors.darkRed,
  },
  headerTintColor: '#FFFFFF',
  headerShadowVisible: false,
};

function App(): JSX.Element {
  return (
    <ApiProvider api={pokemonApi}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Pokemon List"
              component={PokemonList}
              options={{...screenOptions, title: 'Pokemon'}}
            />
            <Stack.Screen
              name="Pokemon Details"
              component={PokemonDetails}
              options={{...screenOptions, title: 'Details'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </ApiProvider>
  );
}

export default App;
