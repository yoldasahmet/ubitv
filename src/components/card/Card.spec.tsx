import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Card";

jest.mock("../../assets/images/ph.png", () => ({
  placeHolder: "",
}));

test("renders card component", () => {
  const { asFragment } = render(
    <Card
      id="testid"
      imgPath="testPath"
      title="testTitle"
      subTitle="testSubTitle"
      tags={[{ text: "testtag" }]}
    />
  );

  expect(screen.getByText(/testTitle/i)).toBeInTheDocument();
  expect(screen.getByText(/testSubTitle/i)).toBeInTheDocument();
  expect(screen.getByAltText("testTitle")).toHaveAttribute("src", "testPath");

  expect(asFragment()).toMatchSnapshot();
});
