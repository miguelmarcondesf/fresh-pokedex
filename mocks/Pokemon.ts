import { IPokemon } from '@types';

export const Ditto: IPokemon = {
  name: 'ditto',
  id: 132,
  sprites: { 
    back_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png",
    front_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  },
  types: [{ type: {
    name: "normal",
    url:"https://pokeapi.co/api/v2/type/1/"
    }}],
  stats: [
    {
      base_stat: 48,
      stat: {
        name:"hp",
        url:"https://pokeapi.co/api/v2/stat/1/"
      }
    },
    {
      base_stat: 48,
      stat: {
        name:"attack",
        url:"https://pokeapi.co/api/v2/stat/2/"
      }
    },
    {
      base_stat: 48,
      stat: {
        name:"defense",
        url:"https://pokeapi.co/api/v2/stat/3/"
      }
    },
    {
      base_stat: 48,
      stat: {
        name:"special-attack",
        url:"https://pokeapi.co/api/v2/stat/4/"
      }
    },
    {
      base_stat: 48,
      stat: {
        name:"special-defense",
        url:"https://pokeapi.co/api/v2/stat/5/"
      }
    },
    {
      base_stat: 48,
      stat: {
        name:"speed",
        url:"https://pokeapi.co/api/v2/stat/6/"
      }
    },
  ]
}
