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
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Name",
    variant: "default",
    theme: "light",
    disabled: false,
  },
};

export const DarkTheme: Story = {
  args: {
    label: "Name",
    variant: "default",
    theme: "dark",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "Name",
    variant: "default",
    theme: "light",
    disabled: true,
  },
};
