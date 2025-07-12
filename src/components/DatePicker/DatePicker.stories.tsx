import type { Meta, StoryObj } from "@storybook/react-vite";
import { DatePicker } from "./DatePicker";
import { useState } from "react";

const meta: Meta<typeof DatePicker> = {
  title: "Components/DatePicker",
  component: DatePicker,
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

type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    disabled: false,
  },
};

export const DarkTheme: Story = {
  args: {
    variant: "default",
    theme: "dark",
    sizeStyle: "md",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    disabled: true,
  },
};

export const SmallSize: Story = {
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "sm",
    disabled: false,
  },
};

export const MediumSize: Story = {
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    disabled: false,
  },
};

export const LargeSize: Story = {
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "lg",
    disabled: false,
  },
};

export const SuccessVariant: Story = {
  args: {
    variant: "success",
    theme: "light",
    sizeStyle: "md",
    disabled: false,
  },
};

export const WarninngVariant: Story = {
  args: {
    variant: "warning",
    theme: "light",
    sizeStyle: "md",
    disabled: false,
  },
};

export const DangerVariant: Story = {
  args: {
    variant: "danger",
    theme: "light",
    sizeStyle: "md",
    disabled: false,
  },
};

export const InfoVariant: Story = {
  args: {
    variant: "info",
    theme: "light",
    sizeStyle: "md",
    disabled: false,
  },
};
