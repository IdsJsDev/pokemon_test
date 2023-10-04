import {createContext, useContext} from 'react'
import { ListType } from '../interfaces/list.interfaces.ts';

const contextInitial = {
    type: ListType.LIST,
    setType: ()=>{}
}

export interface IListTypeContext {
    type:ListType,
    setType: (val:ListType)=>void
}

export const ListTypeContext = createContext<IListTypeContext>(contextInitial)
export const useListTypeContext = (): IListTypeContext => useContext(ListTypeContext)
