/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";

import { IPokemon } from "@types"

import Template from "../../components/Template.tsx"
import PokeCard from "../../components/PokeCard.tsx"

export const handler: Handlers<IPokemon | null> = {
  async GET(_, ctx) {
    const { name } = ctx.params;
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    if (resp.status === 404) {
      return ctx.render(null);
    }

    const pokemon: IPokemon = await resp.json();

    return ctx.render(pokemon);
  },
};

export default function Page({ data: pokemon }: PageProps<IPokemon | null>) {

  return (
    <Template>
      <PokeCard pokemon={pokemon} />
    </Template>
  );
}
