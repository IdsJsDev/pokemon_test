import { AppDispatch, RootState } from '../index.ts';
import { setPokemons, setPokemonsLoading, setSelectedPokemon } from './pokemons.reducer.ts';
import axios, { AxiosResponse } from 'axios';
import { API } from '../../constants/apiPath.ts';
import { IGetPokemonList, IPokemonFull } from './pokemons.interface.ts';
import { pokemonImgUrl } from '../../utils/pokemonImgUrl.ts';


export const getPokemons = () => async (dispatch: AppDispatch, getState: () => RootState) => {
  const {pokemons:{pageSize,page}} = getState()
  try {
    dispatch(setPokemonsLoading(true));
    const { data: {count,results} }: AxiosResponse<IGetPokemonList> = await axios.get(API.POKEMON, {
      params: {
        limit: pageSize,
        offset: pageSize *(page-1),
      },
    });
    dispatch(setPokemons({count,list: results.map(el=>({...el, img:pokemonImgUrl(el.url)}))}));
  } catch (e) {
    // console.log(e);
  } finally {
    dispatch(setPokemonsLoading(false));
  }
};

export const getPokemonByName = (name: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setPokemonsLoading(true));
    const { data }: AxiosResponse<IPokemonFull> = await axios.get(API.POKEMON+name);
    dispatch(setSelectedPokemon(data));
  }catch (e) {
    // console.log(e);
  } finally {
    dispatch(setPokemonsLoading(false));
  }
};

