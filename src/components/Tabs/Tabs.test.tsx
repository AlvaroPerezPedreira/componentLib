import { render, screen } from "@testing-library/react";
import { Tabs } from "./index";
import { themes, variants } from "../../theme";
import "@testing-library/jest-dom";

describe("Tabs component", () => {
  test("renders with default props", () => {
    render(
      <Tabs.Root>
        <Tabs.Trigger value="tesla">Tesla</Tabs.Trigger>
        <Tabs.Trigger value="davinci">da Vinci</Tabs.Trigger>
        <Tabs.Trigger value="newton">Newton</Tabs.Trigger>
        <Tabs.Content value="tesla">
          <h1>Nikola Tesla</h1>
          <p>
            Serbian-American inventor and electrical engineer known for his
            contributions to the development of alternating current (AC)
            electrical systems. Tesla held over 300 patents and was considered
            one of the most innovative minds of his time.
          </p>
        </Tabs.Content>
        <Tabs.Content value="davinci">
          <h1>da Vinci</h1>
          <p>
            Italian polymath of the Renaissance who is known for his works in
            art, science, and engineering. He is widely regarded as one of the
            most diversely talented individuals ever to have lived.
          </p>
        </Tabs.Content>
        <Tabs.Content value="newton">
          <h1>Isaac Newton</h1>
          <p>
            English mathematician, physicist, and astronomer who is widely
            recognized as one of the most influential scientists of all time. He
            made significant contributions to many fields, including
            mathematics, physics, and astronomy.
          </p>
        </Tabs.Content>
      </Tabs.Root>
    );
    const tabs = screen.getByRole("tablist");
    expect(tabs).toBeInTheDocument();
  });

  test("applies correct styles based on variant", () => {
    render(
      <Tabs.Root variant="danger">
        <Tabs.Trigger value="tesla">Tesla</Tabs.Trigger>
        <Tabs.Trigger value="davinci">da Vinci</Tabs.Trigger>
        <Tabs.Trigger value="newton">Newton</Tabs.Trigger>
        <Tabs.Content value="tesla">
          <h1>Nikola Tesla</h1>
          <p>
            Serbian-American inventor and electrical engineer known for his
            contributions to the development of alternating current (AC)
            electrical systems. Tesla held over 300 patents and was considered
            one of the most innovative minds of his time.
          </p>
        </Tabs.Content>
        <Tabs.Content value="davinci">
          <h1>da Vinci</h1>
          <p>
            Italian polymath of the Renaissance who is known for his works in
            art, science, and engineering. He is widely regarded as one of the
            most diversely talented individuals ever to have lived.
          </p>
        </Tabs.Content>
        <Tabs.Content value="newton">
          <h1>Isaac Newton</h1>
          <p>
            English mathematician, physicist, and astronomer who is widely
            recognized as one of the most influential scientists of all time. He
            made significant contributions to many fields, including
            mathematics, physics, and astronomy.
          </p>
        </Tabs.Content>
      </Tabs.Root>
    );
    const tabs_trigger = screen.getAllByTestId("tabs-trigger")[0];
    expect(tabs_trigger).toHaveStyle({
      "--variant-highlight": variants.danger.highlight,
      "--variant-border": variants.danger.contrast,
      "--variant-color": variants.danger.color,
      "--variant-textColor": variants.danger.textColor,
    });
  });

  test("applies correct styles based on theme", () => {
    render(
      <Tabs.Root theme="dark">
        <Tabs.Trigger value="tesla">Tesla</Tabs.Trigger>
        <Tabs.Trigger value="davinci">da Vinci</Tabs.Trigger>
        <Tabs.Trigger value="newton">Newton</Tabs.Trigger>
        <Tabs.Content value="tesla">
          <h1>Nikola Tesla</h1>
          <p>
            Serbian-American inventor and electrical engineer known for his
            contributions to the development of alternating current (AC)
            electrical systems. Tesla held over 300 patents and was considered
            one of the most innovative minds of his time.
          </p>
        </Tabs.Content>
        <Tabs.Content value="davinci">
          <h1>da Vinci</h1>
          <p>
            Italian polymath of the Renaissance who is known for his works in
            art, science, and engineering. He is widely regarded as one of the
            most diversely talented individuals ever to have lived.
          </p>
        </Tabs.Content>
        <Tabs.Content value="newton">
          <h1>Isaac Newton</h1>
          <p>
            English mathematician, physicist, and astronomer who is widely
            recognized as one of the most influential scientists of all time. He
            made significant contributions to many fields, including
            mathematics, physics, and astronomy.
          </p>
        </Tabs.Content>
      </Tabs.Root>
    );
    const tabs_trigger = screen.getAllByTestId("tabs-trigger")[0];
    expect(tabs_trigger).toHaveStyle({
      "--theme-text-color": themes.dark.color,
      "--theme-contrast": themes.dark.contrast,
      "--theme-background": themes.dark.background,
    });
  });

  test("applies correct styles based on size", () => {
    render(
      <Tabs.Root sizeStyle="lg">
        <Tabs.Trigger value="tesla">Tesla</Tabs.Trigger>
        <Tabs.Trigger value="davinci">da Vinci</Tabs.Trigger>
        <Tabs.Trigger value="newton">Newton</Tabs.Trigger>
        <Tabs.Content value="tesla">
          <h1>Nikola Tesla</h1>
          <p>
            Serbian-American inventor and electrical engineer known for his
            contributions to the development of alternating current (AC)
            electrical systems. Tesla held over 300 patents and was considered
            one of the most innovative minds of his time.
          </p>
        </Tabs.Content>
        <Tabs.Content value="davinci">
          <h1>da Vinci</h1>
          <p>
            Italian polymath of the Renaissance who is known for his works in
            art, science, and engineering. He is widely regarded as one of the
            most diversely talented individuals ever to have lived.
          </p>
        </Tabs.Content>
        <Tabs.Content value="newton">
          <h1>Isaac Newton</h1>
          <p>
            English mathematician, physicist, and astronomer who is widely
            recognized as one of the most influential scientists of all time. He
            made significant contributions to many fields, including
            mathematics, physics, and astronomy.
          </p>
        </Tabs.Content>
      </Tabs.Root>
    );
    const tabs_trigger = screen.getAllByTestId("tabs-trigger")[0];
    expect(tabs_trigger).toHaveClass("tabs-trigger--lg");
  });
});
