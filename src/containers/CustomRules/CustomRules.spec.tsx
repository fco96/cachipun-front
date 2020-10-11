import React, { useState } from "react";
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import CustomRules from "./CustomRules";
import StoreProvider from "../StoreProvider/StoreProvider";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../../store";
import { IMovement } from "../../models/Movement";
const reactRedux = require("react-redux");

const mockDispatch = jest.fn();
reactRedux.useDispatch = () => mockDispatch;

let container: any;

const newMoves: IMovement[] = [
  { move: "move 1", kills: "move 2" },
  { move: "move 2", kills: "move 3" },
  { move: "move 3", kills: "move 1" },
];
const newMovesString = JSON.stringify(newMoves);

beforeEach(() => {
  container = render(
    <Router>
      <StoreProvider store={store}>
        <CustomRules />
      </StoreProvider>
    </Router>
  );
});

test("should render without crashing", () => {
  expect(container.container).toBeTruthy();
});

test("Should save the new rules", () => {
  const saveBtn = container.getByTestId("saveBtn");
  const inputField = container.getByTestId("inputTextField");
  fireEvent.change(inputField, { target: { value: newMovesString } });
  fireEvent.click(saveBtn);
  expect(mockDispatch).toHaveBeenCalledTimes(1);
});
