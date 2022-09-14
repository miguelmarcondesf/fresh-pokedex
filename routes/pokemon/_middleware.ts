import { MiddlewareHandlerContext } from "$fresh/server.ts";

interface State {
  data: string;
}

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext<State>,
) {
  console.log('middle')
  console.log(req)
  ctx.state.data = "Ash";
  const resp = await ctx.next();
  return resp;
}
