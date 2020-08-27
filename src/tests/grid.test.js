import React from "react";
import { render, screen } from "@testing-library/react";
import { walls } from "../constants/constants";
import "@testing-library/jest-dom";
import Grid from "../components/grid";

test("It renders the correct number of columns and rows", () => {
  render(<Grid rows={5} columns={5} walls={walls} />);
  expect(screen.getAllByTestId("gridItem")).toHaveLength(25);
});

test("It renders a different number of columns and rows", () => {
  render(<Grid rows={6} columns={6} walls={walls} />);
  expect(screen.getAllByTestId("gridItem")).toHaveLength(36);
});

test("It renders no columns and rows", () => {
  render(<Grid />);
  expect(screen.queryAllByTestId("gridItem")).toHaveLength(0);
});

test("It renders the ball component", () => {
  render(<Grid walls={walls} rows={5} columns={5} userPosition={0} />);
  expect(screen.getByTestId("ball")).toBeInTheDocument();
});

test("initial position to have yellow background", () => {
  render(
    <Grid
      walls={walls}
      rows={5}
      columns={5}
      userPosition={0}
      initialPosition={0}
    />
  );
  expect(screen.getAllByTestId("gridItem")[0]).toHaveStyle(
    "background: yellow"
  );
});

test("initial position in a different location to have yellow background", () => {
  render(
    <Grid
      walls={walls}
      rows={5}
      columns={5}
      userPosition={0}
      initialPosition={2}
    />
  );
  expect(screen.getAllByTestId("gridItem")[2]).toHaveStyle(
    "background: yellow"
  );
});

test("final position to have green background", () => {
  render(
    <Grid
      walls={walls}
      rows={5}
      columns={5}
      userPosition={0}
      initialPosition={0}
    />
  );
  expect(screen.getAllByTestId("gridItem")[24]).toHaveStyle(
    "background: green"
  );
});

test.each([walls])("renders the walls in the proper indexes", (a) => {
  render(
    <Grid
      rows={5}
      columns={5}
      userPosition={0}
      initialPosition={0}
      walls={walls}
    />
  );
  expect(screen.getAllByTestId("gridItem")[a]).toHaveStyle(
    "background:lightgrey"
  );
});
