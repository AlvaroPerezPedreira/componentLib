import { render, screen } from "@testing-library/react";
import { Switch } from "./Switch";
import { themes, variants } from "../../theme";
import "@testing-library/jest-dom";

describe("Switch component", () => {
  test("renders with default props", () => {
    render(<Switch />);
    const switchElement = screen.getByRole("switch");
    expect(switchElement).toBeInTheDocument();
  });

  test("applies correct styles based on variant", () => {
    render(<Switch variant="danger" />);
    const switchElement = screen.getByTestId("switch-container");
    expect(switchElement).toHaveStyle({
      "--variant-color": variants.danger.color,
      "--variant-text-color": variants.danger.textColor,
    });
  });

  test("applies correct styles based on theme", () => {
    render(<Switch theme="dark" />);
    const switchElement = screen.getByTestId("switch-container");
    expect(switchElement).toHaveStyle({
      "--background-color": themes.dark.background,
      "--text-color": themes.dark.color,
    });
  });

  test("applies correct styles based on size", () => {
    render(<Switch sizeStyle="lg" />);
    const switchElement = screen.getByTestId("switch-container");
    expect(switchElement).toHaveClass("switch-label--lg");
  });

  test("renders with start and end icons", () => {
    render(
      <Switch startIcon={<span>Start</span>} endIcon={<span>End</span>} />
    );
    const startIcon = screen.getByText("Start");
    const endIcon = screen.getByText("End");
    expect(startIcon).toBeInTheDocument();
    expect(endIcon).toBeInTheDocument();
  });

  test("is disabled when disabled prop is true", () => {
    render(<Switch disabled />);
    const switchElement = screen.getByRole("switch");
    expect(switchElement).toBeDisabled();
  });
});
