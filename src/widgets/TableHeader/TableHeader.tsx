import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks.ts';
import {
  initialPokemonsState,
  setPokemonsPagination,
} from '../../store/pokemons/pokemons.reducer.ts';
import cls from './TableHeader.module.scss';

import { AppPaths } from '../../constants/appPaths.ts';
import { useNavigate } from 'react-router-dom';
import ButtonUi from '../../components/ui/ButtonUi/ButtonUi.tsx';
import TablePaginationUi from '../../components/ui/TablePaginationUi/TablePaginationUi.tsx';
import { useListTypeContext } from '../../context/listType.context.ts';
import TextFieldUi from '../../components/ui/TextFieldUi/TextFieldUi.tsx';
import ListTypeSelect from '../../components/ListTypeSelect/ListTypeSelect.tsx';


const TableHeader: React.FC = () => {
  const { page, pageSize, count } = useAppSelector((state) => state.pokemons);
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState('');
  const {type,setType}=useListTypeContext()

  const navigate = useNavigate();

  const searchHandler = () => {
    navigate(AppPaths.POCKEMON_PAGE + search);
  };
  const pageChange = (_val: React.MouseEvent<HTMLButtonElement> | null, pageNumber: number) => {
    dispatch(setPokemonsPagination({
      page: pageNumber + 1,
      pageSize,
    }));
  };

  const pageSizeChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    dispatch(setPokemonsPagination({
      page: initialPokemonsState.page,
      pageSize: event?.target?.value ?? pageSize,
    }));
  };

  const handleKeyDown = (event:React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      searchHandler()
    }
  };

  return (
    <div className={cls.container}>
      <div className={cls.searchGroup}>
        <TextFieldUi
          label='Search'
          variant='outlined'
          size={'small'}
          value={search}
          onKeyDown={handleKeyDown}
          onChange={e => setSearch(e.target.value)}
        />
        <ButtonUi size={'small'} variant={'contained'} onClick={searchHandler}>search</ButtonUi>
      </div>
      <ListTypeSelect className={cls.select} type={type} setType={setType} />
      <TablePaginationUi
        labelRowsPerPage={'Per page'}
        rowsPerPage={pageSize}
        count={count}

        page={page - 1}
        onPageChange={pageChange}
        onRowsPerPageChange={pageSizeChange} />
    </div>
  );
};

export default TableHeader;
