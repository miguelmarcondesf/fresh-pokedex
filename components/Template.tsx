/** @jsx h */
import { h, Fragment, ComponentChildren } from "preact";
import { tw } from "@twind";

import Header from "../islands/Header.tsx";

type Props = {
  children: ComponentChildren;
}

export default function Template({ children }: Props) {
  return (
    <Fragment>
      <Header />
      <div class={tw`mx-auto flex flex-col items-center`}>
        {children}
      </div>
    </Fragment>
  );
}
