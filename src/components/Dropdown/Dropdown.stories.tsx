import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Dropdown } from ".";

const meta: Meta<typeof Dropdown.Root> = {
  title: "Components/Dropdown",
  component: Dropdown.Root,
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

type Story = StoryObj<typeof Dropdown.Root>;

export const Default: Story = {
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "md",
  },
  render: (args) => {
    return (
      <Dropdown.Root {...args}>
        <Dropdown.Trigger>Open Dropdown</Dropdown.Trigger>
        <Dropdown.Menu>
          <Dropdown.Item>First Option</Dropdown.Item>
          <Dropdown.Item>Second Option</Dropdown.Item>
          <Dropdown.Item>Third Option</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Root>
    );
  },
};

export const DarkTheme: Story = {
  args: {
    variant: "default",
    theme: "dark",
    sizeStyle: "md",
  },
  render: (args) => {
    return (
      <Dropdown.Root {...args}>
        <Dropdown.Trigger>Open Dropdown</Dropdown.Trigger>
        <Dropdown.Menu>
          <Dropdown.Item>First Option</Dropdown.Item>
          <Dropdown.Item>Second Option</Dropdown.Item>
          <Dropdown.Item>Third Option</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Root>
    );
  },
};

export const DisabledItem: Story = {
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "md",
  },
  render: (args) => {
    return (
      <Dropdown.Root {...args}>
        <Dropdown.Trigger>Open Dropdown</Dropdown.Trigger>
        <Dropdown.Menu>
          <Dropdown.Item>First Option</Dropdown.Item>
          <Dropdown.Item>Second Option</Dropdown.Item>
          <Dropdown.Item disabled>Disabled option</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Root>
    );
  },
};

export const HrefItem: Story = {
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "md",
  },
  render: (args) => {
    return (
      <Dropdown.Root {...args}>
        <Dropdown.Trigger>Open Dropdown</Dropdown.Trigger>
        <Dropdown.Menu>
          <Dropdown.Item>First Option</Dropdown.Item>
          <Dropdown.Item>Second Option</Dropdown.Item>
          <Dropdown.Item href="https://google.com">Href option</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Root>
    );
  },
};

export const IndividualItemVariants: Story = {
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "md",
  },
  render: (args) => {
    return (
      <Dropdown.Root {...args}>
        <Dropdown.Trigger>Open Dropdown</Dropdown.Trigger>
        <Dropdown.Menu>
          <Dropdown.Item variant="default">Default Variant</Dropdown.Item>
          <Dropdown.Item variant="success">Success Variant</Dropdown.Item>
          <Dropdown.Item variant="warning">Warning Variant</Dropdown.Item>
          <Dropdown.Item variant="danger">Danger Variant</Dropdown.Item>
          <Dropdown.Item variant="info">Info Variant</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Root>
    );
  },
};

export const SmallSize: Story = {
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "sm",
  },
  render: (args) => {
    return (
      <Dropdown.Root {...args}>
        <Dropdown.Trigger>Open Dropdown</Dropdown.Trigger>
        <Dropdown.Menu>
          <Dropdown.Item>First Option</Dropdown.Item>
          <Dropdown.Item>Second Option</Dropdown.Item>
          <Dropdown.Item>Third Option</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Root>
    );
  },
};

export const MediumSize: Story = {
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "md",
  },
  render: (args) => {
    return (
      <Dropdown.Root {...args}>
        <Dropdown.Trigger>Open Dropdown</Dropdown.Trigger>
        <Dropdown.Menu>
          <Dropdown.Item>First Option</Dropdown.Item>
          <Dropdown.Item>Second Option</Dropdown.Item>
          <Dropdown.Item>Third Option</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Root>
    );
  },
};

export const LargeSize: Story = {
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "lg",
  },
  render: (args) => {
    return (
      <Dropdown.Root {...args}>
        <Dropdown.Trigger>Open Dropdown</Dropdown.Trigger>
        <Dropdown.Menu>
          <Dropdown.Item>First Option</Dropdown.Item>
          <Dropdown.Item>Second Option</Dropdown.Item>
          <Dropdown.Item>Third Option</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Root>
    );
  },
};

export const DefaultVariant: Story = {
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "md",
  },
  render: (args) => {
    return (
      <Dropdown.Root {...args}>
        <Dropdown.Trigger>Open Dropdown</Dropdown.Trigger>
        <Dropdown.Menu>
          <Dropdown.Item>First Option</Dropdown.Item>
          <Dropdown.Item>Second Option</Dropdown.Item>
          <Dropdown.Item>Third Option</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Root>
    );
  },
};

export const SuccessVariant: Story = {
  args: {
    variant: "success",
    theme: "light",
    sizeStyle: "md",
  },
  render: (args) => {
    return (
      <Dropdown.Root {...args}>
        <Dropdown.Trigger>Open Dropdown</Dropdown.Trigger>
        <Dropdown.Menu>
          <Dropdown.Item>First Option</Dropdown.Item>
          <Dropdown.Item>Second Option</Dropdown.Item>
          <Dropdown.Item>Third Option</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Root>
    );
  },
};

export const WarningVariant: Story = {
  args: {
    variant: "warning",
    theme: "light",
    sizeStyle: "md",
  },
  render: (args) => {
    return (
      <Dropdown.Root {...args}>
        <Dropdown.Trigger>Open Dropdown</Dropdown.Trigger>
        <Dropdown.Menu>
          <Dropdown.Item>First Option</Dropdown.Item>
          <Dropdown.Item>Second Option</Dropdown.Item>
          <Dropdown.Item>Third Option</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Root>
    );
  },
};

export const DangerVariant: Story = {
  args: {
    variant: "danger",
    theme: "light",
    sizeStyle: "md",
  },
  render: (args) => {
    return (
      <Dropdown.Root {...args}>
        <Dropdown.Trigger>Open Dropdown</Dropdown.Trigger>
        <Dropdown.Menu>
          <Dropdown.Item>First Option</Dropdown.Item>
          <Dropdown.Item>Second Option</Dropdown.Item>
          <Dropdown.Item>Third Option</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Root>
    );
  },
};

export const InfoVariant: Story = {
  args: {
    variant: "info",
    theme: "light",
    sizeStyle: "md",
  },
  render: (args) => {
    return (
      <Dropdown.Root {...args}>
        <Dropdown.Trigger>Open Dropdown</Dropdown.Trigger>
        <Dropdown.Menu>
          <Dropdown.Item>First Option</Dropdown.Item>
          <Dropdown.Item>Second Option</Dropdown.Item>
          <Dropdown.Item>Third Option</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Root>
    );
  },
};
