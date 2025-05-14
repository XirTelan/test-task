import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Checkbox } from "./checkbox";

describe("Checkbox component", () => {
  test("renders with label", () => {
    render(
      <Checkbox checked={false} onChange={() => {}} label="Accept terms" />
    );
    expect(screen.getByLabelText("Accept terms")).toBeInTheDocument();
  });

  test("does not render label when label is not provided", () => {
    render(<Checkbox checked={false} onChange={() => {}} />);
    expect(screen.queryByText(/.+/)).toBeNull();
  });

  test("is checked when checked is true", () => {
    render(<Checkbox checked={true} onChange={() => {}} label="Checked box" />);
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  test("is not checked when checked is false", () => {
    render(
      <Checkbox checked={false} onChange={() => {}} label="Unchecked box" />
    );
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });

  test("calls onChange when clicked", () => {
    const handleChange = jest.fn();
    render(
      <Checkbox checked={false} onChange={handleChange} label="Click me" />
    );
    fireEvent.click(screen.getByLabelText("Click me"));
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test("sets the id when provided", () => {
    render(
      <Checkbox
        id="custom-id"
        checked={false}
        onChange={() => {}}
        label="Box with ID"
      />
    );
    expect(screen.getByLabelText("Box with ID")).toHaveAttribute(
      "id",
      "custom-id"
    );
  });
});
