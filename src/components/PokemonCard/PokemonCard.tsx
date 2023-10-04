import React from 'react';
import cls from './PokemonCard.module.scss';
import { IPokemonFull } from '../../store/pokemons/pokemons.interface.ts';
import TagGroup from '../TagGroup/TagGroup.tsx';

interface IProps {
  pokemon: IPokemonFull;
}

const PokemonCard: React.FC<IProps> = ({ pokemon }) => {

  const moves = pokemon.moves.map((el,index)=>(
    <p key={index}>{el.move.name}</p>
  ))
  const stats = pokemon.stats.map((el,index)=>(
    <p key={index}>{el.stat.name}: {el.base_stat}</p>
  ))

  return (
    <div className={cls.container}>
      <div className={cls.images}>
        {pokemon.sprites.front_default && <img className={cls.image} src={pokemon.sprites.front_default} alt={'front_default'} />}
        {pokemon.sprites.back_default && <img className={cls.image} src={pokemon.sprites.back_default} alt={'front_default'} />}
        {pokemon.sprites.front_female && <img className={cls.image} src={pokemon.sprites.front_female} alt={'front_default'} />}
        {pokemon.sprites.back_female && <img className={cls.image} src={pokemon.sprites.back_female} alt={'front_default'} />}
      </div>

      <p className={cls.name}>{pokemon.name}</p>
      <div className={cls.body}>
        <TagGroup label={'Stats'} tags={stats}/>
        <TagGroup label={'Moves'} tags={moves}/>
      </div>

    </div>);
};

export default PokemonCard;
