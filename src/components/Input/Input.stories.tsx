import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
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

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Input",
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    disabled: false,
    readOnly: false,
    placeholder: "",
  },
};

export const DarkTheme: Story = {
  args: {
    label: "Input",
    variant: "default",
    theme: "dark",
    sizeStyle: "md",
    disabled: false,
    readOnly: false,
    placeholder: "",
  },
};

export const Disabled: Story = {
  args: {
    label: "Input",
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    disabled: true,
    readOnly: false,
    placeholder: "",
  },
};

export const Placeholder: Story = {
  args: {
    label: "Input",
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    disabled: false,
    readOnly: false,
    placeholder: "Placeholder text",
  },
};

export const ReadOnly: Story = {
  args: {
    label: "Read Only Input",
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    disabled: false,
    readOnly: true,
    placeholder: "",
  },
};

export const ReadOnlyWithPlaceholder: Story = {
  args: {
    label: "Read Only Input",
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    disabled: false,
    readOnly: true,
    placeholder: "Placeholder text",
  },
};

export const SmallSize: Story = {
  args: {
    label: "Small size input",
    variant: "default",
    theme: "light",
    sizeStyle: "sm",
    disabled: false,
    readOnly: false,
    placeholder: "",
  },
};

export const MediumSize: Story = {
  args: {
    label: "Medium size input",
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    disabled: false,
    readOnly: false,
    placeholder: "",
  },
};

export const LargeSize: Story = {
  args: {
    label: "Large size input",
    variant: "default",
    theme: "light",
    sizeStyle: "lg",
    disabled: false,
    readOnly: false,
    placeholder: "",
  },
};

export const SuccessVariant: Story = {
  args: {
    label: "Success variant",
    variant: "success",
    theme: "light",
    sizeStyle: "md",
    disabled: false,
    readOnly: false,
    placeholder: "",
  },
};

export const WarningVariant: Story = {
  args: {
    label: "Warning variant",
    variant: "warning",
    theme: "light",
    sizeStyle: "md",
    disabled: false,
    readOnly: false,
    placeholder: "",
  },
};

export const DangerVariant: Story = {
  args: {
    label: "Danger variant",
    variant: "danger",
    theme: "light",
    sizeStyle: "md",
    disabled: false,
    readOnly: false,
    placeholder: "",
  },
};

export const InfoVariant: Story = {
  args: {
    label: "Info variant",
    variant: "info",
    theme: "light",
    sizeStyle: "md",
    disabled: false,
    readOnly: false,
    placeholder: "",
  },
};
