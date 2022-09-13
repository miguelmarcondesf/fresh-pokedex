/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { tw } from "@twind";

import { IPokemon } from "@types"

export const handler: Handlers<IPokemon | null> = {
  async GET(_, ctx) {
    const { name } = ctx.params;
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const user: IPokemon = await resp.json();
    return ctx.render(user);
  },
};

export default function Page({ data: pokemon }: PageProps<IPokemon | null>) {
  if (!pokemon) {
    return <h1>Pokemon not found</h1>;
  }

  return (
    <div class={tw`p-4 mx-auto flex flex-col items-center`}>
      <a href={`/`} class="button">HOME</a>
      <a href={`/${pokemon.id - 1}`} class="button">PREV</a>
      <a href={`/${pokemon.id + 1}`} class="button">NEXT</a>

      <img src={pokemon.sprites.front_default} width={128} height={128} />
      <img src={pokemon.sprites.back_default} width={128} height={128} />
      <h1>{pokemon.id}</h1>
      <h1>{pokemon.name}</h1>

      {pokemon.types?.map((type) => <p>{type.type.name}</p>)}
      {pokemon.stats?.map((stat) => <p>{stat.stat.name}: {stat.base_stat}</p>)}
    </div>
  );
}
