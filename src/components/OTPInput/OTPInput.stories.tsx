import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { OTPInput } from "./OTPInput";

const meta: Meta<typeof OTPInput> = {
  title: "Components/OTPInput",
  component: OTPInput,
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
    sizeStyle: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
    },
    length: {
      control: { type: "number", min: 4, max: 8 },
    },
    placeholder: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof OTPInput>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <OTPInput {...args} value={value} onChange={(val) => setValue(val)} />
    );
  },
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    length: 6,
    placeholder: "",
    variantTextColor: false,
  },
};

export const DarkTheme: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <OTPInput {...args} value={value} onChange={(val) => setValue(val)} />
    );
  },
  args: {
    variant: "default",
    theme: "dark",
    sizeStyle: "md",
    length: 6,
    placeholder: "",
    variantTextColor: false,
  },
};

export const WithPlaceholder: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <OTPInput {...args} value={value} onChange={(val) => setValue(val)} />
    );
  },
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    length: 6,
    placeholder: "001100",
    variantTextColor: false,
  },
};

export const WithVariantTextColor: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <OTPInput {...args} value={value} onChange={(val) => setValue(val)} />
    );
  },
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    length: 6,
    placeholder: "",
    variantTextColor: true,
  },
};

export const CustomLength: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <OTPInput {...args} value={value} onChange={(val) => setValue(val)} />
    );
  },
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    length: 10,
    placeholder: "",
    variantTextColor: false,
  },
};

export const SmallSize: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <OTPInput {...args} value={value} onChange={(val) => setValue(val)} />
    );
  },
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "sm",
    length: 6,
    placeholder: "001100",
    variantTextColor: false,
  },
};

export const MediumSize: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <OTPInput {...args} value={value} onChange={(val) => setValue(val)} />
    );
  },
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    length: 6,
    placeholder: "001100",
    variantTextColor: false,
  },
};

export const LargeSize: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <OTPInput {...args} value={value} onChange={(val) => setValue(val)} />
    );
  },
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "lg",
    length: 6,
    placeholder: "001100",
    variantTextColor: false,
  },
};

export const DefaultVariant: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <OTPInput {...args} value={value} onChange={(val) => setValue(val)} />
    );
  },
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    length: 6,
    placeholder: "",
    variantTextColor: false,
  },
};

export const SuccessVariant: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <OTPInput {...args} value={value} onChange={(val) => setValue(val)} />
    );
  },
  args: {
    variant: "success",
    theme: "light",
    sizeStyle: "md",
    length: 6,
    placeholder: "",
    variantTextColor: false,
  },
};

export const WarningVariant: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <OTPInput {...args} value={value} onChange={(val) => setValue(val)} />
    );
  },
  args: {
    variant: "warning",
    theme: "light",
    sizeStyle: "md",
    length: 6,
    placeholder: "",
    variantTextColor: false,
  },
};

export const DangerVariant: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <OTPInput {...args} value={value} onChange={(val) => setValue(val)} />
    );
  },
  args: {
    variant: "danger",
    theme: "light",
    sizeStyle: "md",
    length: 6,
    placeholder: "",
    variantTextColor: false,
  },
};

export const InfoVariant: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <OTPInput {...args} value={value} onChange={(val) => setValue(val)} />
    );
  },
  args: {
    variant: "info",
    theme: "light",
    sizeStyle: "md",
    length: 6,
    placeholder: "",
    variantTextColor: false,
  },
};
