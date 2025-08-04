import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from ".";
import InfoIcon from "../../icons/InfoIcon";

const meta: Meta<typeof Card.Root> = {
  title: "Components/Card",
  component: Card.Root,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "success", "danger", "warning", "info"],
    },
    theme: {
      control: { type: "radio" },
      options: ["light", "dark"],
    },
    sizeStyle: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card.Root>;

export const BasicCard: Story = {
  args: {
    theme: "light",
    variant: "default",
    sizeStyle: "md",
  },
  render: (args) => {
    return (
      <Card.Root {...args}>
        <Card.Image
          src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
  },
};

export const FullCard: Story = {
  args: {
    theme: "light",
    variant: "danger",
    sizeStyle: "md",
  },
  render: (args) => {
    return (
      <Card.Root {...args}>
        <Card.Image
          src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
          <Card.Features variant="success">
            <Card.Feature variant="info">Bluetooth 5.0</Card.Feature>
            <Card.Feature>Noise Cancelling</Card.Feature>
            <Card.Feature>20h Battery</Card.Feature>
          </Card.Features>
          <Card.Bottom>
            <Card.Price oldPrice="$199.99" newPrice="$129.99" />
            <Card.Button icon={<InfoIcon />}>Add to Cart</Card.Button>
          </Card.Bottom>
        </Card.Content>
      </Card.Root>
    );
  },
};

export const DarkTheme: Story = {
  args: {
    theme: "dark",
    variant: "danger",
    sizeStyle: "md",
  },
  render: (args) => {
    return (
      <Card.Root {...args}>
        <Card.Image
          src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
          <Card.Features variant="success">
            <Card.Feature variant="info">Bluetooth 5.0</Card.Feature>
            <Card.Feature>Noise Cancelling</Card.Feature>
            <Card.Feature>20h Battery</Card.Feature>
          </Card.Features>
          <Card.Bottom>
            <Card.Price newPrice="$129.99" />
            <Card.Button>Add to Cart</Card.Button>
          </Card.Bottom>
        </Card.Content>
      </Card.Root>
    );
  },
};

export const CustomVariantTag: Story = {
  args: {
    theme: "light",
    variant: "default",
    sizeStyle: "md",
  },
  render: (args) => {
    return (
      <Card.Root {...args}>
        <Card.Image
          src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Sample Product"
        />
        <Card.Content>
          <Card.Tag variant="danger">New</Card.Tag>
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
            <Card.Price newPrice="$129.99" />
            <Card.Button>Add to Cart</Card.Button>
          </Card.Bottom>
        </Card.Content>
      </Card.Root>
    );
  },
};

export const CustomVariantFeatures: Story = {
  args: {
    theme: "light",
    variant: "default",
    sizeStyle: "md",
  },
  render: (args) => {
    return (
      <Card.Root {...args}>
        <Card.Image
          src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
          <Card.Features variant="success">
            <Card.Feature>Bluetooth 5.0</Card.Feature>
            <Card.Feature>Noise Cancelling</Card.Feature>
            <Card.Feature>20h Battery</Card.Feature>
          </Card.Features>
          <Card.Bottom>
            <Card.Price newPrice="$129.99" />
            <Card.Button>Add to Cart</Card.Button>
          </Card.Bottom>
        </Card.Content>
      </Card.Root>
    );
  },
};

export const CustomVariantPerFeature: Story = {
  args: {
    theme: "light",
    variant: "default",
    sizeStyle: "md",
  },
  render: (args) => {
    return (
      <Card.Root {...args}>
        <Card.Image
          src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            <Card.Feature variant="success">Success Feature</Card.Feature>
            <Card.Feature variant="warning">Warning Feature</Card.Feature>
            <Card.Feature variant="danger">Danger Feature</Card.Feature>{" "}
            <Card.Feature variant="info">Info Feature</Card.Feature>
          </Card.Features>
          <Card.Bottom>
            <Card.Price newPrice="$129.99" />
            <Card.Button>Add to Cart</Card.Button>
          </Card.Bottom>
        </Card.Content>
      </Card.Root>
    );
  },
};

export const WithOldPrice: Story = {
  args: {
    theme: "light",
    variant: "default",
    sizeStyle: "md",
  },
  render: (args) => {
    return (
      <Card.Root {...args}>
        <Card.Image
          src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
  },
};

export const ButtonWithIcon: Story = {
  args: {
    theme: "light",
    variant: "default",
    sizeStyle: "md",
  },
  render: (args) => {
    return (
      <Card.Root {...args}>
        <Card.Image
          src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            <Card.Price newPrice="$129.99" />
            <Card.Button icon={<InfoIcon />}>Add to Cart</Card.Button>
          </Card.Bottom>
        </Card.Content>
      </Card.Root>
    );
  },
};

export const SmallSize: Story = {
  args: {
    theme: "light",
    variant: "default",
    sizeStyle: "sm",
  },
  render: (args) => {
    return (
      <Card.Root {...args}>
        <Card.Image
          src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            <Card.Price newPrice="$129.99" />
            <Card.Button>Add to Cart</Card.Button>
          </Card.Bottom>
        </Card.Content>
      </Card.Root>
    );
  },
};

export const MediumSize: Story = {
  args: {
    theme: "light",
    variant: "default",
    sizeStyle: "md",
  },
  render: (args) => {
    return (
      <Card.Root {...args}>
        <Card.Image
          src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            <Card.Price newPrice="$129.99" />
            <Card.Button>Add to Cart</Card.Button>
          </Card.Bottom>
        </Card.Content>
      </Card.Root>
    );
  },
};

export const LargeSize: Story = {
  args: {
    theme: "light",
    variant: "default",
    sizeStyle: "lg",
  },
  render: (args) => {
    return (
      <Card.Root {...args}>
        <Card.Image
          src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            <Card.Price newPrice="$129.99" />
            <Card.Button>Add to Cart</Card.Button>
          </Card.Bottom>
        </Card.Content>
      </Card.Root>
    );
  },
};

export const SuccessVariant: Story = {
  args: {
    theme: "light",
    variant: "success",
    sizeStyle: "md",
  },
  render: (args) => {
    return (
      <Card.Root {...args}>
        <Card.Image
          src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            <Card.Price newPrice="$129.99" />
            <Card.Button>Add to Cart</Card.Button>
          </Card.Bottom>
        </Card.Content>
      </Card.Root>
    );
  },
};

export const WarningVariant: Story = {
  args: {
    theme: "light",
    variant: "warning",
    sizeStyle: "md",
  },
  render: (args) => {
    return (
      <Card.Root {...args}>
        <Card.Image
          src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            <Card.Price newPrice="$129.99" />
            <Card.Button>Add to Cart</Card.Button>
          </Card.Bottom>
        </Card.Content>
      </Card.Root>
    );
  },
};

export const DangerVariant: Story = {
  args: {
    theme: "light",
    variant: "danger",
    sizeStyle: "md",
  },
  render: (args) => {
    return (
      <Card.Root {...args}>
        <Card.Image
          src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            <Card.Price newPrice="$129.99" />
            <Card.Button>Add to Cart</Card.Button>
          </Card.Bottom>
        </Card.Content>
      </Card.Root>
    );
  },
};

export const InfoVariant: Story = {
  args: {
    theme: "light",
    variant: "info",
    sizeStyle: "md",
  },
  render: (args) => {
    return (
      <Card.Root {...args}>
        <Card.Image
          src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            <Card.Price newPrice="$129.99" />
            <Card.Button>Add to Cart</Card.Button>
          </Card.Bottom>
        </Card.Content>
      </Card.Root>
    );
  },
};
