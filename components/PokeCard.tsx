/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

import { IPokemon } from "@types"

interface Props {
  pokemon: IPokemon | null;
  hasNavigationBtns?: boolean;
}

export default function PokeCard({ pokemon, hasNavigationBtns = true }: Props) {
  const navigationBtnStyle = tw`m-4 w-full text-white bg-primary-800 hover:bg-primary-400 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-primary-800`

  if (!pokemon) return <h1>Pokemon not found</h1>;

  return (
    <div class={tw`mx-auto flex flex-col items-center`}>
      <img src={pokemon.sprites.front_default} width={128} height={128} />
      <img src={pokemon.sprites.back_default} width={128} height={128} />
      <h1>{pokemon.id}</h1>
      <h1>{pokemon.name}</h1>

      {pokemon.types.map((type) => <p>{type.type.name}</p>)}
      {pokemon.stats.map((stat) => <p>{stat.stat.name}: {stat.base_stat}</p>)}

      {hasNavigationBtns &&
        <div class={tw`mt-6`}>
          <a
            href={`/pokemon/${pokemon.id - 1}`}
            class={navigationBtnStyle}
          >PREV</a>
          <a
            href={`/pokemon/${pokemon.id + 1}`}
            class={navigationBtnStyle}
          >NEXT</a>
        </div>
      }
    </div>
  );
}
