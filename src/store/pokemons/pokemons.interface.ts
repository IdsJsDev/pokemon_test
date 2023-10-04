export interface IPokemon {
  name: string;
  url: string;
  img?: string
}

interface IAbilities {
  'ability': {
    'name': string,
    'url': string
  },
  'is_hidden': boolean
  'slot': number
}

interface IGameIndices {
  'game_index': number;
  'version': IPokemon;
}

interface IStats {
  'base_stat': number,
  'effort': number,
  'stat': {
    'name': string,
    'url': string,
  }
}

interface ITypes{
  "slot": number
  "type": {
    "name": string
    "url": string
  }
}

export interface IPokemonFull {
  'abilities': IAbilities[],
  'base_experience': number,
  'forms': IPokemon[],
  'game_indices': IGameIndices[],
  'height': number,
  'id': number,
  'is_default': boolean,
  'location_area_encounters': string,
  'name': string,
  'order': number,
  'species': IPokemon,
  moves:{
    move:{
      name: string
    }
  }[],
  'sprites': {
    'back_default': string,
    'back_female': string | null,
    'back_shiny': string,
    'back_shiny_female': string | null,
    'front_default': string,
    'front_female': string | null,
    'front_shiny': string,
    'front_shiny_female': string | null,
    'other': {
      'dream_world': {
        'front_default': string,
        'front_female': null
      },
      'home': {
        'front_default': string,
        'front_female': null,
        'front_shiny': string,
        'front_shiny_female': null
      },
      'official-artwork': {
        'front_default': string,
        'front_shiny': string,
      }
    },
  },
  'stats': IStats[],
  'types': ITypes[],
  'weight': number
}

export interface IPokemonState {
  isLoading: boolean;
  count: number;
  page: number;
  pageSize: number;
  pokemons: IPokemon[];
  selected: IPokemonFull | null
}

export interface IGetPokemonList {
  count: number;
  results: IPokemon[];
}
