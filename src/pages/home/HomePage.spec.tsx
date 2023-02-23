import { rest } from "msw";
import { setupServer } from "msw/node";
import {
  renderWithProvider,
  screen,
  waitFor,
} from "../../../_test/utils/test-utils";
import HomePage from "./HomePage";

import mockData from "../../../_test/mocks/data.json";

const server = setupServer(
  rest.get("https://api.tvmaze.com/shows", (req, res, ctx) => {
    return res(ctx.json(mockData));
  })
);

beforeAll((): void => {
  server.listen();
});

afterEach((): void => {
  server.resetHandlers();
});

afterAll((): void => {
  server.close();
});

test("renders home page", async () => {
  const { asFragment } = renderWithProvider(<HomePage />);

  await waitFor(() => {
    expect(screen.queryByLabelText(/Loading.../i)).not.toBeInTheDocument();
  });

  await waitFor(() => {
    expect(
      screen.getByText("The Daily Show with Jon Stewart")
    ).toBeInTheDocument();
  });

  expect(asFragment()).toMatchSnapshot();
});
