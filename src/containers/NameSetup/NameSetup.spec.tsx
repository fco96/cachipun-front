import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import StoreProvider from "../StoreProvider/StoreProvider";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../../store";
import NameSetup from "./NameSetup";

let container: any;

beforeEach(() => {
  container = render(
    <Router>
      <StoreProvider store={store}>
        <NameSetup />
      </StoreProvider>
    </Router>
  );
});

test("should render without crashing", () => {
  expect(container.container).toBeTruthy();
});

test("The button should be disabled if the names are not filled", () => {
  const input1 = container.getByTestId("player1input");
  const input2 = container.getByTestId("player2input");
  const btn = container.getByTestId("startBtn");
  fireEvent.change(input1, { target: { value: "" } });
  fireEvent.change(input2, { target: { value: "" } });
  expect(btn).toBeDisabled();
});

test("The button should be disabled if the names are not filled", () => {
  const input1 = container.getByTestId("player1input");
  const input2 = container.getByTestId("player2input");
  const btn = container.getByTestId("startBtn");
  fireEvent.change(input1, { target: { value: "Juanito" } });
  fireEvent.change(input2, { target: { value: "Pepito" } });
  expect(btn).toBeEnabled();
});
