import { render, screen } from "@testing-library/react";
import { Input } from "./Input";
import { themes, variants, sizes } from "../../theme";
import "@testing-library/jest-dom";

describe("Input component", () => {
  test("renders with label and placeholder", () => {
    render(<Input label="Name" placeholder="Enter your name" />);
    const input = screen.getByPlaceholderText("Enter your name");
    const label = screen.getByText("Name");
    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute("for", input.id);
  });

  test("applies correct styles based on variant", () => {
    render(<Input variant="danger" />);
    const container = screen.getByRole("textbox").parentElement!;
    expect(container).toHaveStyle({
      "--focus-border-color": variants.danger.color,
    });
  });

  test("applies correct styles based on size", () => {
    render(<Input sizeStyle="lg" />);
    const container = screen.getByRole("textbox").parentElement!;
    expect(container).toHaveStyle({
      "--label-font-size": sizes.lg.labelFontSize,
      "--label-font-size-focused": sizes.lg.labelFontSizeFocused,
    });
    const input = screen.getByRole("textbox");
    expect(input).toHaveStyle({
      width: sizes.lg.width,
      height: sizes.lg.height,
      fontSize: sizes.lg.fontSize,
    });
  });

  test("applies correct styles based on theme", () => {
    render(<Input theme="dark" />);
    const container = screen.getByRole("textbox").parentElement!;
    expect(container).toHaveStyle({
      "--border-color": themes.dark.contrast,
    });
    const input = screen.getByRole("textbox");
    expect(input).toHaveStyle({
      color: themes.dark.color,
    });
  });

  test("applies correct styles based on theme, variant, and sizeStyle", () => {
    render(<Input theme="dark" variant="default" sizeStyle="lg" />);
    const container = screen.getByRole("textbox").parentElement!;
    expect(container).toHaveStyle({
      "--focus-border-color": variants.default.color,
      "--border-color": themes.dark.contrast,
      "--label-font-size": sizes.lg.labelFontSize,
      "--label-font-size-focused": sizes.lg.labelFontSizeFocused,
    });

    const input = screen.getByRole("textbox");
    expect(input).toHaveStyle({
      color: themes.dark.color,
      width: sizes.lg.width,
      height: sizes.lg.height,
      fontSize: sizes.lg.fontSize,
    });
  });

  test("renders disabled input with correct cursor", () => {
    render(<Input disabled />);
    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();
    expect(input).toHaveStyle({ cursor: "not-allowed" });
  });

  test("renders readOnly input with correct cursor", () => {
    render(<Input readOnly />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("readonly");
    expect(input).toHaveStyle({ cursor: "default" });
  });

  test("renders iconEnd when passed", () => {
    const Icon = () => <svg data-testid="icon" />;
    render(<Input iconEnd={<Icon />} />);
    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();

    const input = screen.getByRole("textbox");
    expect(input).toHaveStyle({ paddingRight: "2em" });
  });
});
