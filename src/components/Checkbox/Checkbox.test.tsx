import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Checkbox } from "./Checkbox";
import "@testing-library/jest-dom";

describe("Checkbox component", () => {
  test("renders with label", () => {
    render(<Checkbox label="Accept Terms" />);
    expect(screen.getByLabelText("Accept Terms")).toBeInTheDocument();
  });

  test("handles defaultChecked (uncontrolled)", () => {
    render(<Checkbox label="Uncontrolled" defaultChecked />);
    const input = screen.getByLabelText("Uncontrolled") as HTMLInputElement;
    expect(input.checked).toBe(true);
    fireEvent.click(input);
    expect(input.checked).toBe(false);
  });

  test("handles controlled checked prop", () => {
    const handleChange = jest.fn();
    render(
      <Checkbox label="Controlled" checked={true} onChange={handleChange} />
    );
    const input = screen.getByLabelText("Controlled") as HTMLInputElement;
    expect(input.checked).toBe(true);
    fireEvent.click(input);
    expect(handleChange).toHaveBeenCalled();
  });

  test("does not toggle onChange in readOnly mode", () => {
    const handleChange = jest.fn();
    render(
      <Checkbox
        label="Read Only"
        defaultChecked
        readOnly
        onChange={handleChange}
      />
    );
    const input = screen.getByLabelText("Read Only") as HTMLInputElement;
    expect(input.checked).toBe(true);
    fireEvent.click(input);
    expect(handleChange).not.toHaveBeenCalled();
    expect(input.checked).toBe(true); // still checked
  });

  test("applies disabled attribute", () => {
    render(<Checkbox label="Disabled" disabled />);
    const input = screen.getByLabelText("Disabled") as HTMLInputElement;
    expect(input.disabled).toBe(true);
  });

  test("renders with different size styles", () => {
    render(
      <>
        <Checkbox label="Small" sizeStyle="sm" />
        <Checkbox label="Medium" sizeStyle="md" />
        <Checkbox label="Large" sizeStyle="lg" />
      </>
    );

    expect(screen.getByLabelText("Small").parentElement).toHaveClass(
      "checkbox-container--sm"
    );
    expect(screen.getByLabelText("Medium").parentElement).toHaveClass(
      "checkbox-container--md"
    );
    expect(screen.getByLabelText("Large").parentElement).toHaveClass(
      "checkbox-container--lg"
    );
  });

  test("applies custom id if provided", () => {
    render(<Checkbox id="custom-id" label="With ID" />);
    const input = screen.getByLabelText("With ID") as HTMLInputElement;
    expect(input.id).toBe("custom-id");
  });

  test("supports keyboard interaction", () => {
    render(<Checkbox label="Press Space" />);
    const input = screen.getByLabelText("Press Space") as HTMLInputElement;
    input.focus();
    fireEvent.keyDown(input, { key: " " });
    fireEvent.click(input);
    expect(input.checked).toBe(true);
  });
});
