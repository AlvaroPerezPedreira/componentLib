import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";
import "@testing-library/jest-dom";
import { variants, themes, thicknesses } from "../../theme";

describe("Button component", () => {
  test("renders button with label", () => {
    render(<Button label="Click me" />);
    const btn = screen.getByRole("button", { name: /click me/i });
    expect(btn).toBeInTheDocument();
  });

  test("renders button with icon", () => {
    const Icon = () => <svg data-testid="icon" />;
    render(<Button label="Icon button" icon={<Icon />} />);
    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();

    // También botón accesible
    const btn = screen.getByRole("button", { name: /icon button/i });
    expect(btn).toBeInTheDocument();
  });

  test("calls onClick when clicked", async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();
    render(<Button label="Click me" onClick={handleClick} />);
    const btn = screen.getByRole("button", { name: /click me/i });
    await user.click(btn);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("button is disabled when disabled prop is true", () => {
    render(<Button label="Disabled" disabled />);
    const btn = screen.getByRole("button", { name: /disabled/i });
    expect(btn).toBeDisabled();
  });

  test("button has correct aria-label", () => {
    render(<Button label="My button" />);
    const btn = screen.getByRole("button", { name: /my button/i });
    expect(btn).toHaveAttribute("aria-label", "My button");
  });

  test("applies correct CSS variables for variant property", () => {
    const { container } = render(<Button label="Styled" variant="danger" />);
    const wrapperDiv = container.firstChild;
    expect(wrapperDiv).toHaveStyle({
      "--button-color": variants.danger.color,
    });
  });

  test("applies correct CSS variables for thickness property", () => {
    const { container } = render(
      <Button label="Styled" variant="default" thickness="sm" />
    );
    const wrapperDiv = container.firstChild;
    expect(wrapperDiv).toHaveStyle({
      "--button-thickness": thicknesses.sm,
    });
  });

  test("applies correct CSS variables for theme property", () => {
    const { container } = render(
      <Button label="Styled" variant="default" theme="dark" />
    );
    const wrapperDiv = container.firstChild;
    expect(wrapperDiv).toHaveStyle({
      "--button-text-color": themes.dark.color,
    });
  });

  test("applies correct CSS variables for theme and size", () => {
    const { container } = render(
      <Button
        label="Styled"
        theme="dark"
        variant="default"
        sizeStyle="lg"
        thickness="lg"
      />
    );
    const wrapperDiv = container.firstChild;
    expect(wrapperDiv).toHaveStyle({
      "--button-text-color": themes.dark.color,
      "--button-color": variants.default.color,
      "--button-thickness": thicknesses.lg,
    });
  });
});
