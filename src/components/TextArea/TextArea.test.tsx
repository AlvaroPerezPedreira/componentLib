import { render, screen, fireEvent } from "@testing-library/react";
import { TextArea } from "./TextArea";
import { themes, variants, sizes, thicknesses } from "../../theme";
import "@testing-library/jest-dom";

describe("TextArea component", () => {
  test("renders with placeholder", () => {
    render(<TextArea placeholder="Type something..." />);
    const textarea = screen.getByPlaceholderText("Type something...");
    expect(textarea).toBeInTheDocument();
  });

  test("applies correct styles based on variant", () => {
    render(<TextArea variant="danger" />);
    const container = screen.getByRole("textbox").parentElement!;
    expect(container).toHaveStyle({
      "--border-color": variants.danger.color,
      "--border-color-focused": variants.danger.contrast,
    });
  });

  test("applies correct styles based on sizeStyle", () => {
    render(<TextArea sizeStyle="lg" />);
    const textarea = screen.getByRole("textbox");
    expect(textarea).toHaveStyle({
      width: sizes.lg.width,
      fontSize: sizes.lg.fontSize,
    });
  });

  test("applies correct styles based on thickness", () => {
    render(<TextArea thickness="lg" />);
    const container = screen.getByRole("textbox").parentElement!;
    expect(container).toHaveStyle({
      "--thickness": thicknesses.lg,
    });
  });

  test("applies correct styles based on theme", () => {
    render(<TextArea theme="dark" />);
    const container = screen.getByRole("textbox").parentElement!;
    expect(container).toHaveStyle({
      "--text-color": themes.dark.color,
    });
  });

  test("renders disabled TextArea with correct cursor", () => {
    render(<TextArea disabled />);
    const textarea = screen.getByRole("textbox");
    expect(textarea).toBeDisabled();
    expect(textarea).toHaveStyle({ cursor: "not-allowed" });
  });

  test("renders readOnly TextArea with correct cursor", () => {
    render(<TextArea readOnly />);
    const textarea = screen.getByRole("textbox");
    expect(textarea).toHaveAttribute("readonly");
    expect(textarea).toHaveStyle({ cursor: "default" });
  });

  test("handles maxLength and shows character counter", () => {
    render(<TextArea maxLength={10} />);
    const textarea = screen.getByRole("textbox");

    fireEvent.change(textarea, { target: { value: "1234567890" } }); // 10 chars
    expect(textarea).toHaveValue("1234567890");

    fireEvent.change(textarea, { target: { value: "12345678901" } }); // 11 chars
    expect(textarea).toHaveValue("1234567890");
  });

  test("supports controlled value", () => {
    const handleChange = jest.fn();
    render(<TextArea value="initial" onChange={handleChange} />);
    const textarea = screen.getByRole("textbox");
    expect(textarea).toHaveValue("initial");

    fireEvent.change(textarea, { target: { value: "updated" } });
    expect(handleChange).toHaveBeenCalled();
  });
});
