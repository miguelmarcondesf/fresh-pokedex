/** @jsx h */
import { h } from "preact";

import Template from "../../components/Template.tsx"
import PokeSearch from "../../islands/PokeSearch.tsx"

export default function Page() {
  return (
    <Template>
      <PokeSearch />
    </Template>
  );
}
