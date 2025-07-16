import { render, screen } from "@testing-library/react";
import { RangeSlider } from "./RangeSlider";
import { themes, variants } from "../../theme";
import "@testing-library/jest-dom";

describe("RangeSlider component", () => {
  test("renders with default props", () => {
    render(<RangeSlider />);
    const slider = screen.getByRole("slider");
    expect(slider).toBeInTheDocument();
  });

  test("applies correct styles based on variant", () => {
    render(<RangeSlider variant="danger" />);
    const slider = screen.getByTestId("rangeSlider-container");
    expect(slider).toHaveStyle({
      "--slider-variant-color": variants.danger.color,
      "--slider-variant-contrast": variants.danger.contrast,
    });
  });

  test("applies correct styles based on theme", () => {
    render(<RangeSlider theme="dark" />);
    const slider = screen.getByTestId("rangeSlider-container");
    expect(slider).toHaveStyle({
      "--slider-ball-outline": themes.dark.color,
    });
  });

  test("applies correct styles based on size", () => {
    render(<RangeSlider sizeStyle="lg" />);
    const slider = screen.getByTestId("rangeSlider");
    expect(slider).toHaveClass("rangeSlider--lg");
  });

  test("renders with custom min and max values", () => {
    render(<RangeSlider min={10} max={100} />);
    const slider = screen.getByRole("slider");
    expect(slider).toHaveAttribute("min", "10");
    expect(slider).toHaveAttribute("max", "100");
  });

  test("renders with custom step value", () => {
    render(<RangeSlider step={5} />);
    const slider = screen.getByRole("slider");
    expect(slider).toHaveAttribute("step", "5");
  });
});
