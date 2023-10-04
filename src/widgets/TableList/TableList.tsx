import React, { useMemo } from 'react';
import { useListTypeContext } from '../../context/listType.context.ts';
import { useAppSelector } from '../../store/hooks.ts';
import { ListType } from '../../interfaces/list.interfaces.ts';
import TableListItem from '../../components/TableListItem/TableListItem.tsx';
import TableTileItem from '../../components/TableTileItem/TableTileItem.tsx';
import cls from './TableList.module.scss'

const TableList: React.FC = () => {
  const { type } = useListTypeContext();
  const { pokemons } = useAppSelector((state) => state.pokemons);

  const render = useMemo(()=>{
    switch (type) {
      case ListType.TILE:{
        return <div className={cls.grid}>{pokemons.map(el=><TableTileItem key={el.name} pokemon={el} />)}</div>
      }
      default:{
        return <div className={cls.list}>{pokemons.map(el=><TableListItem key={el.name} pokemon={el} />)}</div>
      }

    }

  },[pokemons, type])

  return <div className={cls.container}>{render}</div>;
};

export default TableList;
