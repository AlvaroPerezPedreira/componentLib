import { render, screen } from "@testing-library/react";
import { Dropdown } from "./index";
import { themes, variants } from "../../theme";
import "@testing-library/jest-dom";

describe("Dropdown component", () => {
  test("renders with default props", () => {
    render(
      <Dropdown.Root>
        <Dropdown.Trigger>Open Dropdown</Dropdown.Trigger>
        <Dropdown.Menu>
          <Dropdown.Item>First Option</Dropdown.Item>
          <Dropdown.Item>Second Option</Dropdown.Item>
          <Dropdown.Item>Third Option</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Root>
    );
    const dropdown = screen.getByRole("combobox");
    expect(dropdown).toBeInTheDocument();
  });

  test("applies correct styles based on variant", () => {
    render(
      <Dropdown.Root variant="danger">
        <Dropdown.Trigger>Open Dropdown</Dropdown.Trigger>
        <Dropdown.Menu>
          <Dropdown.Item>First Option</Dropdown.Item>
          <Dropdown.Item>Second Option</Dropdown.Item>
          <Dropdown.Item>Third Option</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Root>
    );
    const dropdown = screen.getByTestId("dropdown-menu");
    expect(dropdown).toHaveStyle({
      "--variant-highlight": variants.danger.highlight,
      "--variant-color": variants.danger.color,
    });
  });

  test("applies correct styles based on theme", () => {
    render(
      <Dropdown.Root theme="dark">
        <Dropdown.Trigger>Open Dropdown</Dropdown.Trigger>
        <Dropdown.Menu>
          <Dropdown.Item>First Option</Dropdown.Item>
          <Dropdown.Item>Second Option</Dropdown.Item>
          <Dropdown.Item>Third Option</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Root>
    );
    const dropdown = screen.getByTestId("dropdown-menu");
    expect(dropdown).toHaveStyle({
      "--theme-background": themes.dark.background,
      "--theme-text-color": themes.dark.color,
    });
  });

  test("applies correct styles based on size", () => {
    render(
      <Dropdown.Root sizeStyle="lg">
        <Dropdown.Trigger>Open Dropdown</Dropdown.Trigger>
        <Dropdown.Menu>
          <Dropdown.Item>First Option</Dropdown.Item>
          <Dropdown.Item>Second Option</Dropdown.Item>
          <Dropdown.Item>Third Option</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Root>
    );
    const dropdown = screen.getByTestId("dropdown-root");
    expect(dropdown).toHaveClass("dropdown-root--lg");
  });

  test("renders with custom options", () => {
    const options = ["Option 1", "Option 2", "Option 3"];
    render(
      <Dropdown.Root sizeStyle="lg">
        <Dropdown.Trigger>Open Dropdown</Dropdown.Trigger>
        <Dropdown.Menu>
          <Dropdown.Item>{options[0]}</Dropdown.Item>
          <Dropdown.Item>{options[1]}</Dropdown.Item>
          <Dropdown.Item>{options[2]}</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Root>
    );
    options.forEach((option) => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });
});
