import { combineReducers, configureStore } from '@reduxjs/toolkit'
import pokemonsReducer from './pokemons/pokemons.reducer.ts';

const indexReducer = combineReducers({
  pokemons: pokemonsReducer,
})

export const store = configureStore({
  reducer: indexReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
