import { render, screen } from "@testing-library/react";
import { Breadcrumb } from "./Breadcrumb";
import { themes, variants } from "../../theme";
import "@testing-library/jest-dom";

describe("Breadcrumb component", () => {
  test("renders with default props", () => {
    const items = [
      { id: 1, label: "Home", href: "/" },
      { id: 2, label: "Library", href: "/library" },
    ];
    render(<Breadcrumb items={items} />);
    const breadcrumb = screen.getByRole("navigation");
    expect(breadcrumb).toBeInTheDocument();
  });

  test("renders with custom separator", () => {
    const items = [
      { id: 1, label: "Home", href: "/" },
      { id: 2, label: "Library", href: "/library" },
    ];
    render(<Breadcrumb items={items} separator=">" />);
    const separator = screen.getByText(">");
    expect(separator).toBeInTheDocument();
  });

  test("applies correct styles based on variant", () => {
    const items = [
      { id: 1, label: "Home", href: "/" },
      { id: 2, label: "Library", href: "/library" },
    ];
    render(
      <Breadcrumb items={items} variant="danger" separatorVariantColor={true} />
    );
    const breadcrumb = screen.getByRole("navigation");
    expect(breadcrumb).toHaveStyle({
      "--title-text-color": variants.danger.color,
      "--separator-color": variants.danger.color,
    });
  });

  test("applies correct styles based on theme", () => {
    const items = [
      { id: 1, label: "Home", href: "/" },
      { id: 2, label: "Library", href: "/library" },
    ];
    render(
      <Breadcrumb items={items} theme="dark" separatorVariantColor={false} />
    );
    const breadcrumb = screen.getByRole("navigation");
    expect(breadcrumb).toHaveStyle({
      "--background-color": themes.dark.background,
      "--text-color": themes.dark.color,
      "--separator-color": themes.dark.color,
    });
  });

  test("applies correct styles based on sizeStyle", () => {
    const items = [
      { id: 1, label: "Home", href: "/" },
      { id: 2, label: "Library", href: "/library" },
    ];
    render(<Breadcrumb items={items} sizeStyle="lg" />);

    const breadcrumbItems = screen.getAllByRole("listitem");
    breadcrumbItems.forEach((item) => {
      expect(item).toHaveClass("breadcrumb-item--lg");
    });
  });
});
