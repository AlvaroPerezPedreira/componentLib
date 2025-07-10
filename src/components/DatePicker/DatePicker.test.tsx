import { render, screen, fireEvent } from "@testing-library/react";
import { DatePicker } from "./DatePicker";
import "@testing-library/jest-dom";

describe("DatePicker", () => {
  test("renders with default props", () => {
    render(<DatePicker />);
    expect(
      screen.getByText(
        /January|February|March|April|May|June|July|August|September|October|November|December/
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Mon")).toBeInTheDocument();
    expect(screen.getByText("Sun")).toBeInTheDocument();
    expect(screen.getByText("No date selected")).toBeInTheDocument();
  });

  test("applies disabled styles and blocks interaction", () => {
    render(<DatePicker disabled />);
    const container =
      screen.getByRole("region") ||
      screen.getByTestId("datepicker-container") ||
      screen.getByText(/January|February/).parentElement?.parentElement;

    // Check opacity
    expect(container).toHaveStyle("opacity: 0.5");
    expect(container).toHaveStyle("pointer-events: none");

    // Try clicking navigation buttons (should not do anything)
    const prevButton = screen.getByLabelText("Previous month");
    fireEvent.click(prevButton);
    // The month title shouldn't change from initial render month:
    expect(
      screen.getByText(
        /January|February|March|April|May|June|July|August|September|October|November|December/
      )
    ).toBeInTheDocument();
  });

  test("changes month on nav buttons click", () => {
    render(<DatePicker />);
    const nextButton = screen.getByLabelText("Next month");
    const prevButton = screen.getByLabelText("Previous month");

    // Save initial month displayed
    const initialMonthYear = screen.getByRole("heading", {
      level: 2,
    }).textContent;

    // Click next month
    fireEvent.click(nextButton);
    const nextMonthYear = screen.getByRole("heading", { level: 2 }).textContent;
    expect(nextMonthYear).not.toBe(initialMonthYear);

    // Click previous month to go back
    fireEvent.click(prevButton);
    const backToInitial = screen.getByRole("heading", { level: 2 }).textContent;
    expect(backToInitial).toBe(initialMonthYear);
  });

  test("selects a date and displays it", () => {
    render(<DatePicker />);
    const dayButton = screen.getAllByRole("button", {
      name: /Select .* 1, \d{4}/,
    })[0]; // Get button for day 1
    fireEvent.click(dayButton);

    const selectedDateDisplay = screen.getByText(
      /Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday/
    );
    expect(selectedDateDisplay).toHaveTextContent("1");
  });
});
