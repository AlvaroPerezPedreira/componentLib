import { render, screen } from "@testing-library/react";

import { themes, variants } from "../../theme";
import "@testing-library/jest-dom";
import { RadioGroup } from ".";

describe("RadioGroup component", () => {
  test("renders with children and name", () => {
    render(
      <RadioGroup.Root name="options" defaultValue="1">
        <RadioGroup.Item value="1">Option 1</RadioGroup.Item>
        <RadioGroup.Item value="2">Option 2</RadioGroup.Item>
      </RadioGroup.Root>
    );
    expect(screen.getByLabelText("options")).toBeInTheDocument();
    expect(screen.getByLabelText("options")).toHaveAttribute(
      "role",
      "radiogroup"
    );

    expect(screen.getByLabelText("Option 1")).toBeInTheDocument();
    expect(screen.getByLabelText("Option 2")).toBeInTheDocument();
  });

  test("selects the default radio item", () => {
    render(
      <RadioGroup.Root defaultValue="2">
        <RadioGroup.Item value="1">A</RadioGroup.Item>
        <RadioGroup.Item value="2">B</RadioGroup.Item>
      </RadioGroup.Root>
    );
    const radio = screen.getByDisplayValue("2");
    expect(radio).toBeChecked();
  });

  test("applies correct styles based on variant", () => {
    render(
      <RadioGroup.Root variant="danger" defaultValue="x">
        <RadioGroup.Item value="x">X</RadioGroup.Item>
      </RadioGroup.Root>
    );
    const label = screen.getByText("X").parentElement!;
    expect(label).toHaveStyle({
      "--variant-color": variants.danger.color,
      "--variant-hover": variants.danger.highlight,
    });
  });

  test("applies correct styles based on theme", () => {
    render(
      <RadioGroup.Root theme="dark" defaultValue="dark">
        <RadioGroup.Item value="dark">Dark</RadioGroup.Item>
      </RadioGroup.Root>
    );
    const label = screen.getByText("Dark").parentElement!;
    expect(label).toHaveStyle({
      "--theme-text-color": themes.dark.color,
      "--theme-contrast": themes.dark.contrast,
    });
  });

  test("applies correct styles based on sizeStyle", () => {
    render(
      <RadioGroup.Root sizeStyle="lg" defaultValue="1">
        <RadioGroup.Item value="1">Large</RadioGroup.Item>
      </RadioGroup.Root>
    );
    const label = screen.getByText("Large").parentElement!;
    expect(label).toHaveClass("radio-wrapper--lg");
  });

  test("disabled prop disables all items", () => {
    render(
      <RadioGroup.Root disabled defaultValue="a">
        <RadioGroup.Item value="a">A</RadioGroup.Item>
        <RadioGroup.Item value="b">B</RadioGroup.Item>
      </RadioGroup.Root>
    );
    const inputs = screen.getAllByRole("radio");
    inputs.forEach((input) => expect(input).toBeDisabled());

    const labels = screen.getAllByText(/A|B/).map((el) => el.parentElement!);
    labels.forEach((label) =>
      expect(label).toHaveClass("radio-wrapper--disabled")
    );
  });

  test("local disabled overrides group enabled", () => {
    render(
      <RadioGroup.Root defaultValue="1">
        <RadioGroup.Item value="1" disabled>
          One
        </RadioGroup.Item>
        <RadioGroup.Item value="2">Two</RadioGroup.Item>
      </RadioGroup.Root>
    );
    const inputOne = screen.getByDisplayValue("1");
    const inputTwo = screen.getByDisplayValue("2");

    expect(inputOne).toBeDisabled();
    expect(inputTwo).not.toBeDisabled();
  });

  test("orientation changes layout class", () => {
    render(
      <RadioGroup.Root orientation="vertical" defaultValue="yes">
        <RadioGroup.Item value="yes">Yes</RadioGroup.Item>
      </RadioGroup.Root>
    );
    const group = screen.getByRole("radiogroup");
    expect(group).toHaveClass("radio-group--vertical");
  });

  test("controlled mode works with value prop", () => {
    render(
      <RadioGroup.Root value="b" onValueChange={() => {}}>
        <RadioGroup.Item value="a">A</RadioGroup.Item>
        <RadioGroup.Item value="b">B</RadioGroup.Item>
      </RadioGroup.Root>
    );
    expect(screen.getByDisplayValue("b")).toBeChecked();
    expect(screen.getByDisplayValue("a")).not.toBeChecked();
  });
});
