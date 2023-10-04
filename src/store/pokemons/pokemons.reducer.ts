import { createSlice, Draft } from '@reduxjs/toolkit';
import { IPokemonState } from './pokemons.interface.ts';

export const initialPokemonsState: IPokemonState = {
  isLoading: false,
  count: 0,
  page: 1,
  pageSize: 10,
  pokemons: [],
  selected: null,
};

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState:initialPokemonsState,
  reducers: {
    setPokemonsLoading: (state: Draft<IPokemonState>, { payload }) => {
      state.isLoading = payload;
    },
    setSelectedPokemon: (state: Draft<IPokemonState>, { payload }) => {
      state.selected = payload;
    },
    setPokemons: (state: Draft<IPokemonState>, { payload }) => {
      state.pokemons = payload.list;
      state.count = payload.count;
    },
    setPokemonsPagination: (state: Draft<IPokemonState>, { payload }) => {
      state.page = payload.page;
      state.pageSize = payload.pageSize;
    },
    clearPokemons: (state: Draft<IPokemonState>) => {
      state.count = initialPokemonsState.count;
      state.isLoading = initialPokemonsState.isLoading;
      state.page = initialPokemonsState.page;
      state.pageSize = initialPokemonsState.pageSize;
      state.pokemons = initialPokemonsState.pokemons;
    },
  },
});

export const {
  setPokemonsLoading,
  setPokemons,
  setPokemonsPagination,
  clearPokemons,
  setSelectedPokemon,
} = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
