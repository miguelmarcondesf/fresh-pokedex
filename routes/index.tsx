/** @jsx h */
import { h, Fragment } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { tw } from "@twind";

import Counter from "../islands/Counter.tsx";
import Header from "../islands/Header.tsx";

interface IPokemonRequest {
  results: [ { name: string; url: string; } ]
}

export const handler: Handlers<IPokemonRequest[] | null> = {
  async GET(_, ctx) {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const pokemonRequest = await resp.json();

    console.log(pokemonRequest)
    return ctx.render(pokemonRequest);
  },
};

export default function Home({ data }: PageProps<IPokemonRequest | null>) {
  const pokemonList = data?.results.map((pokemon, index) => {
    return (
      <a 
        href={`/${pokemon.name}`}
        class={tw`block py-2 pr-4 pl-3 text-white rounded bg-primary-800 hover:bg-primary-400`}
      >{`${index+1} - ${pokemon.name}`}</a>
    )
  })

  return (
    <Fragment>
      <Header />
      <div class={tw`grid grid-cols-4 gap-1 p-4`}>
        { pokemonList }
      </div>
      <Counter start={3} />
    </Fragment>
  );
}
