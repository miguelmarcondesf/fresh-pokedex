/** @jsx h */
import { h, Fragment } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";

import { IPokemon } from "@types";
import { Ditto } from "@mocks";

import PokeCard from "../components/PokeCard.tsx"

export default function PokeSearch() {
  const [pokemon, setPokemon] = useState<IPokemon | null>(Ditto);
  const [typedPokemon, setTypedPokemon] = useState('');

  const onSubmit = async (e: Event) => {
    e.preventDefault();

    const res = await fetch('/api/pokemon', {
      method:"POST",
      body: JSON.stringify({ typedPokemon })
    });

    const data = await res.json();

    if(res.ok){
      setPokemon(data)
    }
  }

  const handleInput = (e: any) => {
    setTypedPokemon(e.target.value)
  }

  return (
    <Fragment>
      <form class={tw`mt-4`} onSubmit={onSubmit}>
        <label for="pokemon" class={tw`block mb-2 text-sm font-medium text-gray-900 dark:text-white`}>Search by Pokemon' name</label>
        <input 
          type="text"
          name="pokemon"
          id="pokemon"
          class={tw`border rounded-lg block p-2 bg-gray-600 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500`}
          placeholder="Pokemon Name"
          onChange={handleInput}
        />
      
        <button type="submit" class={tw`mt-4 w-full text-white bg-primary-800 hover:bg-primary-400 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-primary-800`}>Gotta Catch 'Em All</button>
      </form>

      <PokeCard pokemon={ pokemon } hasNavigationBtns={false} />
    </Fragment>
  );
}
