import { render, screen } from "@testing-library/react";
import { OTPInput } from "./OTPInput";
import { themes, variants } from "../../theme";
import "@testing-library/jest-dom";

describe("OTPInput component", () => {
  test("renders with correct number of inputs", () => {
    render(<OTPInput length={4} />);
    const inputs = screen.getAllByRole("textbox");
    expect(inputs).toHaveLength(4);
  });

  test("renders with default props", () => {
    render(<OTPInput />);
    const inputs = screen.getAllByRole("textbox");
    expect(inputs).toHaveLength(6);
  });

  test("renders with custom placeholder", () => {
    render(<OTPInput placeholder="0000" length={4} />);
    const inputs = screen.getAllByRole("textbox");
    inputs.forEach((input, index) => {
      expect(input).toHaveAttribute("placeholder", "0");
    });
  });

  test("applies correct styles based on variant", () => {
    render(<OTPInput theme="dark" variant="default" variantTextColor={true} />);

    const container = screen.getByTestId("otp-container");

    expect(container).toHaveStyle({
      "--otp-text-color": variants.default.color,
      "--otp-underline-active": variants.default.color,
    });
  });

  test("applies correct styles based on variant", () => {
    render(<OTPInput theme="dark" variant="warning" variantTextColor={true} />);

    const container = screen.getByTestId("otp-container");

    expect(container).toHaveStyle({
      "--otp-text-color": variants.warning.color,
      "--otp-underline-active": variants.warning.color,
    });
  });

  test("applies correct styles based on theme", () => {
    render(<OTPInput theme="dark" variantTextColor={false} />);

    const container = screen.getByTestId("otp-container");

    expect(container).toHaveStyle({
      "--otp-text-color": themes.dark.color,
      "--otp-border": themes.dark.contrast,
      "--otp-placeholder-color": themes.dark.contrast,
    });
  });

  test("applies correct styles based on size", () => {
    render(<OTPInput theme="dark" sizeStyle="sm" variantTextColor={false} />);

    const container = screen.getByTestId("otp-inputs");
    expect(container).toHaveClass("otp-inputs--sm");

    const inputs = screen.getAllByRole("textbox");
    inputs.forEach((input) => {
      expect(input).toHaveClass("otp-input--sm");
    });
  });
});
