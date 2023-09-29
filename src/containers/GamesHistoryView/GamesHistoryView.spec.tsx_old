import React from "react";
import "@testing-library/jest-dom";
import { render, wait } from "@testing-library/react";
import StoreProvider from "../StoreProvider/StoreProvider";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../../store";
import GamesHistoryView from "./GamesHistoryView";
import mockedAxios from "axios";
import { IGameHistory } from "../../models/GameHistory";

let container: any;

const mockData: { data: IGameHistory[] } = {
  data: [
    {
      id: 1,
      winner: "Player 1",
      loser: "Player 2",
      created_at: "2020-10-11",
    },
    {
      id: 2,
      winner: "Player 2",
      loser: "Player 1",
      created_at: "2020-10-11",
    },
  ],
};

beforeEach(() => {
  mockedAxios.get.mockResolvedValueOnce(mockData);

  container = render(
    <Router>
      <StoreProvider store={store}>
        <GamesHistoryView />
      </StoreProvider>
    </Router>
  );
});

test("Should render the same amount of rows", async () => {
  await wait(() => {
    expect(container.queryAllByTestId("history-row").length).toBe(
      mockData.data.length
    );
  });
});
