import { Handlers } from "$fresh/server.ts";
import { IPokemon } from '@types';

export const handler: Handlers = {
  async POST(req) {
    const body = await req.json();

    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${body.typedPokemon}`);

    if(resp.status === 404){
      return new Response(null,{status:404});
    }

    const pokemon: IPokemon = await resp.json();

    console.log('pokemon')
    console.log(pokemon)

    return new Response(JSON.stringify(pokemon));
  },
};
