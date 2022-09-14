/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Header() {
  const listItem = tw`block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:p-0`;

  return (
    <header>
      <nav class={tw`bg-white border-gray-200 px-4 lg:px-6 py-2.5 bg-gray-800`}>
        <div class={tw`flex flex-wrap justify-between items-center mx-auto max-w-screen-xl`}>
          <div id="mobile-menu-2" class={tw`hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}>
            <ul class={tw`flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0`}>
              <li>
                <a href="/" class={listItem} aria-current="page">Pokémon List</a>
              </li>
              <li>
                <a href="/search" class={listItem} aria-current="page">Search</a>
              </li>
              <li>
                <a href="/team" class={listItem} aria-current="page">Team</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
