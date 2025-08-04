import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { RadioGroup } from ".";

const meta: Meta = {
  title: "Components/RadioGroup",
  component: RadioGroup.Root,
  argTypes: {
    value: { control: false },
    variant: {
      control: { type: "select" },
      options: ["default", "success", "danger", "warning", "info"],
    },
    theme: {
      control: { type: "radio" },
      options: ["light", "dark"],
    },
    orientation: {
      control: { type: "radio" },
      options: ["horizontal", "vertical"],
    },
    name: {
      control: "text",
      defaultValue: "radio-group",
    },
    sizeStyle: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "md",
  },
  render: (args) => {
    const [value, setValue] = useState("option1");

    return (
      <RadioGroup.Root
        {...args}
        value={value}
        onValueChange={setValue}
        name="example"
      >
        <RadioGroup.Item value="option1">First Option</RadioGroup.Item>
        <RadioGroup.Item value="option2">Second Option</RadioGroup.Item>
        <RadioGroup.Item value="option3">Third Option</RadioGroup.Item>
      </RadioGroup.Root>
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
    const [value, setValue] = useState("option1");

    return (
      <RadioGroup.Root
        {...args}
        value={value}
        onValueChange={setValue}
        name="example"
      >
        <RadioGroup.Item value="option1">First Option</RadioGroup.Item>
        <RadioGroup.Item value="option2">Second Option</RadioGroup.Item>
        <RadioGroup.Item value="option3">Third Option</RadioGroup.Item>
      </RadioGroup.Root>
    );
  },
};

export const Vertical: Story = {
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    orientation: "vertical",
  },
  render: (args) => {
    const [value, setValue] = useState("option1");

    return (
      <RadioGroup.Root
        {...args}
        value={value}
        onValueChange={setValue}
        name="example"
      >
        <RadioGroup.Item value="option1">First Option</RadioGroup.Item>
        <RadioGroup.Item value="option2">Second Option</RadioGroup.Item>
        <RadioGroup.Item value="option3">Third Option</RadioGroup.Item>
      </RadioGroup.Root>
    );
  },
};

export const DefaultValue: Story = {
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "md",
  },
  render: (args) => {
    return (
      <RadioGroup.Root
        {...args}
        onValueChange={(v) => console.log("Value changed:", v)}
        name="example"
        defaultValue="option2"
      >
        <RadioGroup.Item value="option1">First Option</RadioGroup.Item>
        <RadioGroup.Item value="option2">Second Option</RadioGroup.Item>
        <RadioGroup.Item value="option3">Third Option</RadioGroup.Item>
      </RadioGroup.Root>
    );
  },
};

export const Disabled: Story = {
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "md",
  },
  render: (args) => {
    return (
      <RadioGroup.Root
        {...args}
        onValueChange={(v) => console.log("Value changed:", v)}
        name="example"
        defaultValue="option2"
        disabled
      >
        <RadioGroup.Item value="option1">First Option</RadioGroup.Item>
        <RadioGroup.Item value="option2">Second Option</RadioGroup.Item>
        <RadioGroup.Item value="option3">Third Option</RadioGroup.Item>
      </RadioGroup.Root>
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
      <RadioGroup.Root
        {...args}
        onValueChange={(v) => console.log("Value changed:", v)}
        name="example"
        defaultValue="option2"
      >
        <RadioGroup.Item value="option1">First Option</RadioGroup.Item>
        <RadioGroup.Item value="option2">Second Option</RadioGroup.Item>
        <RadioGroup.Item value="option3" disabled>
          Third Option
        </RadioGroup.Item>
      </RadioGroup.Root>
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
    const [value, setValue] = useState("option1");

    return (
      <RadioGroup.Root
        {...args}
        value={value}
        onValueChange={setValue}
        name="example"
      >
        <RadioGroup.Item value="option1" variant="default">
          Default
        </RadioGroup.Item>
        <RadioGroup.Item value="option1" variant="success">
          Success
        </RadioGroup.Item>
        <RadioGroup.Item value="option2" variant="warning">
          Warning
        </RadioGroup.Item>
        <RadioGroup.Item value="option3" variant="danger">
          Danger
        </RadioGroup.Item>
        <RadioGroup.Item value="option4" variant="info">
          Info
        </RadioGroup.Item>
      </RadioGroup.Root>
    );
  },
};

export const IndividualItemSizes: Story = {
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "md",
  },
  render: (args) => {
    const [value, setValue] = useState("option1");

    return (
      <RadioGroup.Root
        {...args}
        value={value}
        onValueChange={setValue}
        name="example"
      >
        <RadioGroup.Item value="option1" sizeStyle="sm">
          Small Size
        </RadioGroup.Item>
        <RadioGroup.Item value="option2" sizeStyle="md">
          Medium Size
        </RadioGroup.Item>
        <RadioGroup.Item value="option3" sizeStyle="lg">
          Large Size
        </RadioGroup.Item>
      </RadioGroup.Root>
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
    const [value, setValue] = useState("option1");

    return (
      <RadioGroup.Root
        {...args}
        value={value}
        onValueChange={setValue}
        name="example"
      >
        <RadioGroup.Item value="option1">First Option</RadioGroup.Item>
        <RadioGroup.Item value="option2">Second Option</RadioGroup.Item>
        <RadioGroup.Item value="option3">Third Option</RadioGroup.Item>
      </RadioGroup.Root>
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
    const [value, setValue] = useState("option1");

    return (
      <RadioGroup.Root
        {...args}
        value={value}
        onValueChange={setValue}
        name="example"
      >
        <RadioGroup.Item value="option1">First Option</RadioGroup.Item>
        <RadioGroup.Item value="option2">Second Option</RadioGroup.Item>
        <RadioGroup.Item value="option3">Third Option</RadioGroup.Item>
      </RadioGroup.Root>
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
    const [value, setValue] = useState("option1");

    return (
      <RadioGroup.Root
        {...args}
        value={value}
        onValueChange={setValue}
        name="example"
      >
        <RadioGroup.Item value="option1">First Option</RadioGroup.Item>
        <RadioGroup.Item value="option2">Second Option</RadioGroup.Item>
        <RadioGroup.Item value="option3">Third Option</RadioGroup.Item>
      </RadioGroup.Root>
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
    const [value, setValue] = useState("option1");

    return (
      <RadioGroup.Root
        {...args}
        value={value}
        onValueChange={setValue}
        name="example"
      >
        <RadioGroup.Item value="option1">First Option</RadioGroup.Item>
        <RadioGroup.Item value="option2">Second Option</RadioGroup.Item>
        <RadioGroup.Item value="option3">Third Option</RadioGroup.Item>
      </RadioGroup.Root>
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
    const [value, setValue] = useState("option1");

    return (
      <RadioGroup.Root
        {...args}
        value={value}
        onValueChange={setValue}
        name="example"
      >
        <RadioGroup.Item value="option1">First Option</RadioGroup.Item>
        <RadioGroup.Item value="option2">Second Option</RadioGroup.Item>
        <RadioGroup.Item value="option3">Third Option</RadioGroup.Item>
      </RadioGroup.Root>
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
    const [value, setValue] = useState("option1");

    return (
      <RadioGroup.Root
        {...args}
        value={value}
        onValueChange={setValue}
        name="example"
      >
        <RadioGroup.Item value="option1">First Option</RadioGroup.Item>
        <RadioGroup.Item value="option2">Second Option</RadioGroup.Item>
        <RadioGroup.Item value="option3">Third Option</RadioGroup.Item>
      </RadioGroup.Root>
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
    const [value, setValue] = useState("option1");

    return (
      <RadioGroup.Root
        {...args}
        value={value}
        onValueChange={setValue}
        name="example"
      >
        <RadioGroup.Item value="option1">First Option</RadioGroup.Item>
        <RadioGroup.Item value="option2">Second Option</RadioGroup.Item>
        <RadioGroup.Item value="option3">Third Option</RadioGroup.Item>
      </RadioGroup.Root>
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
    const [value, setValue] = useState("option1");

    return (
      <RadioGroup.Root
        {...args}
        value={value}
        onValueChange={setValue}
        name="example"
      >
        <RadioGroup.Item value="option1">First Option</RadioGroup.Item>
        <RadioGroup.Item value="option2">Second Option</RadioGroup.Item>
        <RadioGroup.Item value="option3">Third Option</RadioGroup.Item>
      </RadioGroup.Root>
    );
  },
};
