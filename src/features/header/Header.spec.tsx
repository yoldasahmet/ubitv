import {
  cleanup,
  fireEvent,
  renderWithProvider,
  screen,
} from "../../../_test/utils/test-utils";
import Header from "./Header";

describe("renders header component", () => {
  afterEach(cleanup);

  test("test-logic", async () => {
    const initPropValues = {
      title: "testTitle",
    };

    const { asFragment } = renderWithProvider(<Header {...initPropValues} />);

    const searchElement = screen.getByLabelText("search") as HTMLInputElement;
    fireEvent.change(searchElement, { target: { value: "Chicago" } });

    expect(searchElement.value).toBe("Chicago");

    expect(asFragment()).toMatchSnapshot();
  });
});
