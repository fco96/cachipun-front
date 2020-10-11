import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import StoreProvider from "../StoreProvider/StoreProvider";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../../store";
import GameView from "./GameView";

let container: any;

beforeEach(() => {
  container = render(
    <Router>
      <StoreProvider store={store}>
        <GameView />
      </StoreProvider>
    </Router>
  );
});

test("should render without crashing", () => {
  expect(container.container).toBeTruthy();
});
