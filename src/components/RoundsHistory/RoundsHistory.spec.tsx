import React from "react";
import { render } from "@testing-library/react";
import RoundsHistory from "./RoundsHistory";
import { IRoundsHistory } from "../../models/RoundsHistory";

const mockHistory: IRoundsHistory[] = [
  { round: 1, winner: "Player 1" },
  { round: 2, winner: "Player 2" },
];

test("should render the correnct amount of rows", () => {
  const container = render(<RoundsHistory history={mockHistory} />);
  expect(container.getAllByTestId("history-row").length).toBe(
    mockHistory.length
  );
});
