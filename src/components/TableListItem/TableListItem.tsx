import React from 'react';
import { IPokemon } from '../../store/pokemons/pokemons.interface.ts';
import cls from './TableListItem.module.scss';
import { useNavigate } from 'react-router-dom';
import { AppPaths } from '../../constants/appPaths.ts';

interface Props {
  pokemon: IPokemon;
}

const TableListItem: React.FC<Props> = ({ pokemon }) => {
  const navigate = useNavigate();
  return (
    <div className={cls.container} onClick={()=>navigate(AppPaths.POCKEMON_PAGE+pokemon.name)}>
      {pokemon?.img && <img className={cls.image} src={pokemon?.img} alt={'pokemonImg'} />}
      <p className={cls.title}>{pokemon.name}</p>
    </div>
  );
};

export default TableListItem;
