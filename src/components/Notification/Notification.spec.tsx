import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Notification from "./Notification";

const mockFn = jest.fn();
const mockContent = "This is the content of the notification";
let container: any;

beforeEach(() => {
  container = render(
    <Notification isVisible={true} closeFn={mockFn} type="is-danger">
      {mockContent}
    </Notification>
  );
});

test("should have the text content", () => {
  expect(container.queryByText(mockContent)).not.toBeNull();
});

test("should call the function when it closes", () => {
  const btn = container.getByTestId("closeBtn");
  fireEvent.click(btn);
  expect(mockFn).toBeCalledTimes(1);
});

test("should hide the notification when isInvisible is false", () => {
  container = render(
    <Notification isVisible={false} closeFn={mockFn} type="is-danger">
      {mockContent}
    </Notification>
  );
  expect(container.container.querySelector(".is-hidden")).toBeTruthy();
});
