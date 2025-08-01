import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from ".";

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

export const Default: StoryObj<typeof Card.Root> = {
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
            <Card.Feature variant="danger">Bluetooth 5.0</Card.Feature>
            <Card.Feature>Noise Cancelling</Card.Feature>
            <Card.Feature>20h Battery</Card.Feature>
          </Card.Features>

          <Card.Bottom>
            <Card.Price oldPrice="$199.99" newPrice="$129.99" />
            <Card.Button
              icon={<span className="card-icon">🛒</span>}
              variant="danger"
            >
              Add to Cart
            </Card.Button>
          </Card.Bottom>
        </Card.Content>
      </Card.Root>
    );
  },
};
