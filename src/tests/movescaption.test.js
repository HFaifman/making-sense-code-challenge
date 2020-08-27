import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MovesCaption from "../components/movescaption";

test("It renders the correct number of moves", () => {
  render(<MovesCaption moves={5} />);
  expect(screen.getByText("moves left 5")).toBeInTheDocument();
});

test("It renders a different number of moves", () => {
  render(<MovesCaption moves={10} />);
  expect(screen.getByText("moves left 10")).toBeInTheDocument();
});

test("It renders you lost message when there are no moves left", () => {
  render(<MovesCaption moves={0} />);
  expect(screen.getByText("You lost")).toBeInTheDocument();
});

test("It renders you won message", () => {
  render(<MovesCaption win />);
  expect(screen.getByText("You won")).toBeInTheDocument();
});
