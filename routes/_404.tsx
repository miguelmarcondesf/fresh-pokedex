/** @jsx h */
import { h } from "preact";

import { UnknownPageProps } from "$fresh/server.ts";

import Template from "../components/Template.tsx";

export default function NotFoundPage({ url }: UnknownPageProps) {
  return (
    <Template>
      <p>Wild {url.pathname} fled!</p>
    </Template>
  );
}
