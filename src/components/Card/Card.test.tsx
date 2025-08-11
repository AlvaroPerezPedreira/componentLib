import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Card } from ".";
import "@testing-library/jest-dom";
import { variants, themes, thicknesses } from "../../theme";

describe("Card component", () => {
  test("renders with content", () => {
    render(
      <Card.Root>
        <Card.Image
          src="https://rvb-img.reverb.com/image/upload/s--s0lmRIU3--/f_auto,t_large/v1707330068/xy6mjqgi3ikpkfhxcvib.jpg"
          alt="Sample Product"
        />
        <Card.Content>
          <Card.Title>Wireless Headphones</Card.Title>
          <Card.Description>
            Experience high-quality sound without the wires. Perfect for travel,
            workouts, and everyday use.
          </Card.Description>
          <Card.Bottom>
            <Card.Price newPrice="$129.99" />
            <Card.Button>Add to Cart</Card.Button>
          </Card.Bottom>
        </Card.Content>
      </Card.Root>
    );
    const title = screen.getByText(/wireless headphones/i);
    const description = screen.getByText(
      /experience high-quality sound without the wires/i
    );
    const price = screen.getByText("$129.99");
    const button = screen.getByRole("button", { name: /add to cart/i });
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});

test("applies correct styles based on theme", () => {
  render(
    <Card.Root theme="dark">
      <Card.Image
        src="https://rvb-img.reverb.com/image/upload/s--s0lmRIU3--/f_auto,t_large/v1707330068/xy6mjqgi3ikpkfhxcvib.jpg"
        alt="Sample Product"
      />
      <Card.Content>
        <Card.Title>Wireless Headphones</Card.Title>
        <Card.Description>
          Experience high-quality sound without the wires. Perfect for travel,
          workouts, and everyday use.
        </Card.Description>
        <Card.Bottom>
          <Card.Price newPrice="$129.99" />
          <Card.Button>Add to Cart</Card.Button>
        </Card.Bottom>
      </Card.Content>
    </Card.Root>
  );
  const card = screen.getByTestId("card-root");
  expect(card).toHaveStyle({
    "--background-color": themes.dark.background,
  });
});

test("applies correct styles based on size", () => {
  render(
    <Card.Root sizeStyle="lg">
      <Card.Image
        src="https://rvb-img.reverb.com/image/upload/s--s0lmRIU3--/f_auto,t_large/v1707330068/xy6mjqgi3ikpkfhxcvib.jpg"
        alt="Sample Product"
      />
      <Card.Content>
        <Card.Title>Wireless Headphones</Card.Title>
        <Card.Description>
          Experience high-quality sound without the wires. Perfect for travel,
          workouts, and everyday use.
        </Card.Description>
        <Card.Bottom>
          <Card.Price newPrice="$129.99" />
          <Card.Button>Add to Cart</Card.Button>
        </Card.Bottom>
      </Card.Content>
    </Card.Root>
  );
  const card = screen.getByTestId("card-root");
  const cardtitle = screen.getByTestId("card-title");
  expect(card).toHaveClass("card-root--lg");
  expect(cardtitle).toHaveClass("card-title--lg");
});

test("applies correct styles based on variant", () => {
  render(
    <Card.Root variant="danger">
      <Card.Image
        src="https://rvb-img.reverb.com/image/upload/s--s0lmRIU3--/f_auto,t_large/v1707330068/xy6mjqgi3ikpkfhxcvib.jpg"
        alt="Sample Product"
      />
      <Card.Content>
        <Card.Tag>New</Card.Tag>
        <Card.Category>Electronics</Card.Category>
        <Card.Title>Wireless Headphones</Card.Title>
        <Card.Description>
          Experience high-quality sound without the wires. Perfect for travel,
          workouts, and everyday use.
        </Card.Description>
        <Card.Features>
          <Card.Feature>Bluetooth 5.0</Card.Feature>
          <Card.Feature>Noise Cancelling</Card.Feature>
          <Card.Feature>20h Battery</Card.Feature>
        </Card.Features>
        <Card.Bottom>
          <Card.Price oldPrice="$199.99" newPrice="$129.99" />
          <Card.Button>Add to Cart</Card.Button>
        </Card.Bottom>
      </Card.Content>
    </Card.Root>
  );
  const cardTag = screen.getByTestId("card-tag");
  expect(cardTag).toHaveStyle({
    "--variant-color": variants.danger.color,
    "--variant-text-color": variants.danger.textColor,
  });
});
