import React, { HTMLAttributes } from 'react';
import { ListType } from '../../interfaces/list.interfaces.ts';
import cls from './ListTypeSelect.module.scss';
import cn from 'classnames'
import ListIcon from '@mui/icons-material/List';
import GridViewIcon from '@mui/icons-material/GridView';

interface Props extends HTMLAttributes<HTMLDivElement> {
  type: ListType;
  setType: (val: ListType) => void;
}

const btns = [
  {
    label:<ListIcon />,
    type: ListType.LIST
  },
  {
    label:<GridViewIcon />,
    type: ListType.TILE
  },
]

const ListTypeSelect: React.FC<Props> = ({ type, setType, className, ...props }) => {

  const selectHandler = (val:ListType)=>{
    setType(val)
  }
  return (
    <div className={cn(cls.container,className)} {...props}>
      {btns.map(el=>(
        <div
          key={el.type}
          className={cn(cls.btn,{[cls.active]:type===el.type})}
          onClick={()=>selectHandler(el.type)}>
          {el.label}
        </div>
      ))}
    </div>);
};

export default ListTypeSelect;
