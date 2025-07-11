import { render, screen, fireEvent } from "@testing-library/react";
import { Accordion } from "./Accordion";
import { themes, variants } from "../../theme";
import "@testing-library/jest-dom";

const items = [
  { id: 1, title: "Item 1", content: "Content 1" },
  { id: 2, title: "Item 2", content: "Content 2", disabled: true },
  { id: 3, title: "Item 3", content: "Content 3" },
];

describe("Accordion component", () => {
  test("renders all items", () => {
    render(<Accordion items={items} />);
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
    expect(screen.getByText("Item 3")).toBeInTheDocument();
  });

  test("opens multiple items if multiple is true", () => {
    render(<Accordion items={items} multiple />);
    const item1 = screen.getByText("Item 1");
    const item3 = screen.getByText("Item 3");

    fireEvent.click(item1);
    fireEvent.click(item3);

    expect(screen.getByText("Content 1")).toBeVisible();
    expect(screen.getByText("Content 3")).toBeVisible();
  });

  test("only one item opens if multiple is false", () => {
    render(<Accordion items={items} multiple={false} />);
    const item1 = screen.getByText("Item 1");
    const item3 = screen.getByText("Item 3");

    fireEvent.click(item1);
    expect(screen.getByText("Content 1")).toBeVisible();

    fireEvent.click(item3);
    expect(screen.queryByText("Content 1")).not.toBeVisible();
    expect(screen.getByText("Content 3")).toBeVisible();
  });

  test("defaultOpenItems works", () => {
    render(<Accordion items={items} defaultOpenItems={[1]} />);
    expect(screen.getByText("Content 1")).toBeVisible();
  });

  test("disabled item cannot be toggled", () => {
    render(<Accordion items={items} />);
    fireEvent.click(screen.getByText("Item 2"));
    expect(screen.queryByText("Content 2")).not.toBeVisible();
  });

  test("keyboard interaction works (Enter)", () => {
    render(<Accordion items={items} />);
    const header = screen
      .getByText("Item 1")
      .closest(".accordion-header") as HTMLElement;
    header.focus();
    fireEvent.keyDown(header, { key: "Enter", code: "Enter" });
    expect(screen.getByText("Content 1")).toBeVisible();
  });

  test("keyboard interaction works (Space)", () => {
    render(<Accordion items={items} />);
    const header = screen
      .getByText("Item 3")
      .closest(".accordion-header") as HTMLElement;
    header.focus();
    fireEvent.keyDown(header, { key: " ", code: "Space" });
    expect(screen.getByText("Content 3")).toBeVisible();
  });

  test("applies correct styles based on theme, variant and size", () => {
    render(
      <Accordion items={items} theme="dark" variant="danger" sizeStyle="lg" />
    );
    const container = screen.getByRole("list").parentElement!;

    expect(container).toHaveStyle(
      `--background-color: ${themes.dark.background}`
    );
    expect(container).toHaveStyle(`--text-color: ${themes.dark.color}`);

    expect(container).toHaveStyle(
      `--title-text-color: ${variants.danger.color}`
    );
  });
});
