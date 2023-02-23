import { rest } from "msw";
export const handlers = [
  rest.get("/shows", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json());
  }),
];
