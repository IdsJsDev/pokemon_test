import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks.ts';
import { getPokemonByName } from '../../store/pokemons/pokemons.thunk.ts';
import cls from './PokemonPage.module.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { setSelectedPokemon } from '../../store/pokemons/pokemons.reducer.ts';
import PokemonCard from '../../components/PokemonCard/PokemonCard.tsx';

const PokemonPage: React.FC = () => {
  const {name} = useParams();
  const dispatch = useAppDispatch();
  const {selected } = useAppSelector((state) => state.pokemons);
  const navigate = useNavigate();

  const backHandler =()=>{
    dispatch(setSelectedPokemon(null))
    navigate(-1)
  }

  useEffect(() => {
    name && dispatch(getPokemonByName(name))
  }, [name]);

  return <div className={cls.container}>
    <div className={cls.header}>
      <p className={cls.backBtn} onClick={backHandler}><ArrowBackIcon/>back</p>
    </div>
    <div className={cls.body}>
      {selected ? <PokemonCard pokemon={selected} /> : <p>pokemon not found</p>}
    </div>
  </div>;
};

export default PokemonPage;
