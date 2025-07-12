import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "./Checkbox";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
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

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: "I agree to the terms",
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    disabled: false,
    defaultChecked: false,
    readOnly: false,
  },
};

export const DarkTheme: Story = {
  args: {
    label: "I agree to the terms",
    variant: "default",
    theme: "dark",
    sizeStyle: "md",
    disabled: false,
    defaultChecked: false,
    readOnly: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "I agree to the terms",
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    disabled: true,
    defaultChecked: false,
    readOnly: false,
  },
};

export const ReadOnly: Story = {
  args: {
    label: "I agree to the terms",
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    disabled: false,
    defaultChecked: false,
    readOnly: true,
  },
};

export const SmallSize: Story = {
  args: {
    label: "I agree to the terms",
    variant: "default",
    theme: "light",
    sizeStyle: "sm",
    disabled: false,
    defaultChecked: false,
    readOnly: false,
  },
};

export const MediumSize: Story = {
  args: {
    label: "I agree to the terms",
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    disabled: false,
    defaultChecked: false,
    readOnly: false,
  },
};

export const LargeSize: Story = {
  args: {
    label: "I agree to the terms",
    variant: "default",
    theme: "light",
    sizeStyle: "lg",
    disabled: false,
    defaultChecked: false,
    readOnly: false,
  },
};

export const SuccessVariant: Story = {
  args: {
    label: "I agree to the terms",
    variant: "success",
    theme: "light",
    sizeStyle: "md",
    disabled: false,
    defaultChecked: false,
    readOnly: false,
  },
};

export const WarningVariant: Story = {
  args: {
    label: "I agree to the terms",
    variant: "warning",
    theme: "light",
    sizeStyle: "md",
    disabled: false,
    defaultChecked: false,
    readOnly: false,
  },
};

export const DangerVariant: Story = {
  args: {
    label: "I agree to the terms",
    variant: "danger",
    theme: "light",
    sizeStyle: "md",
    disabled: false,
    defaultChecked: false,
    readOnly: false,
  },
};

export const InfoVariant: Story = {
  args: {
    label: "I agree to the terms",
    variant: "info",
    theme: "light",
    sizeStyle: "md",
    disabled: false,
    defaultChecked: false,
    readOnly: false,
  },
};

export const DefaultChecked: Story = {
  args: {
    label: "I agree to the terms",
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    disabled: false,
    defaultChecked: true,
  },
};

export const ControlledChecked: Story = {
  args: {
    label: "I agree to the terms",
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    disabled: false,
    checked: true,
    defaultChecked: true,
  },
};
