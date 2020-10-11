import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { IMovement } from "../../models/Movement";
import MovementSelector from "./MovementSelector";

const mockFn = jest.fn();
const mockMovements: IMovement[] = [
  { move: "move 1", kills: "move 2" },
  { move: "move 2", kills: "move 3" },
  { move: "move 3", kills: "move 1" },
];
let container: any;

beforeEach(() => {
  container = render(
    <MovementSelector
      onOk={mockFn}
      isVisible={true}
      movements={mockMovements}
    />
  );
});

test("should have the correct amount of options", () => {
  expect(container.queryAllByTestId("selectOption").length).toBe(
    mockMovements.length
  );
});

test("the button is disabled if no option is selected", () => {
  expect(container.queryByText("Ok")).toBeDisabled();
});

test("the button is enabled if an option is selected", () => {
  const firstOption = container.queryAllByTestId("selectOption")[0];
  const select = container.container.querySelector("select");
  fireEvent.change(select, { target: { value: firstOption.value } });
  expect(container.queryByText("Ok")).toBeEnabled();
});

test("should call the function when ok is pressed", () => {
  const firstOption = container.queryAllByTestId("selectOption")[0];
  const select = container.container.querySelector("select");
  fireEvent.change(select, { target: { value: firstOption.value } });
  fireEvent.click(container.queryByText("Ok"));
  expect(mockFn).toBeCalledTimes(1);
});

test("should show selector when isInvisible is true", () => {
  expect(container.container.querySelector(".is-hidden")).not.toBeTruthy();
});

test("should hide selector when isInvisible is false", () => {
  container = render(
    <MovementSelector
      onOk={mockFn}
      isVisible={false}
      movements={mockMovements}
    />
  );
  expect(container.container.querySelector(".is-hidden")).toBeTruthy();
});
