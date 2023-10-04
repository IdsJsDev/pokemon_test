import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks.ts';
import { getPokemons } from '../../store/pokemons/pokemons.thunk.ts';
import TableHeader from '../../widgets/TableHeader/TableHeader.tsx';
import { ListTypeContext } from '../../context/listType.context.ts';
import { ListType } from '../../interfaces/list.interfaces.ts';
import TableList from '../../widgets/TableList/TableList.tsx';
import cls from './TablePage.module.scss'

const TablePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const [type, setType] =useState(ListType.LIST)
  const { page, pageSize } = useAppSelector((state) => state.pokemons);

  useEffect(() => {
    void dispatch(getPokemons());
  }, [page, pageSize]);

  return (
    <ListTypeContext.Provider value={{
      type,
      setType
    }}>
      <div className={cls.container}>
        <TableHeader />
        <TableList />
      </div>
    </ListTypeContext.Provider>);
};

export default TablePage;
