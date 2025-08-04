import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "./Switch";
import { LeftArrowIcon, RightArrowIcon } from "../../icons";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
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

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "md",
  },
};

export const DarkTheme: Story = {
  args: {
    variant: "default",
    theme: "dark",
    sizeStyle: "md",
  },
};

export const WithStartIcon: Story = {
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    startIcon: <LeftArrowIcon />,
  },
};

export const WithEndIcon: Story = {
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    endIcon: <RightArrowIcon />,
  },
};

export const WithIcons: Story = {
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    startIcon: <LeftArrowIcon />,
    endIcon: <RightArrowIcon />,
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
  },
};

export const MediumSize: Story = {
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "md",
  },
};

export const LargeSize: Story = {
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "lg",
  },
};

export const DefaultVariant: Story = {
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "md",
  },
};

export const SuccessVariant: Story = {
  args: {
    variant: "success",
    theme: "light",
    sizeStyle: "md",
  },
};

export const WarningVariant: Story = {
  args: {
    variant: "warning",
    theme: "light",
    sizeStyle: "md",
  },
};

export const DangerVariant: Story = {
  args: {
    variant: "danger",
    theme: "light",
    sizeStyle: "md",
  },
};

export const InfoVariant: Story = {
  args: {
    variant: "info",
    theme: "light",
    sizeStyle: "md",
  },
};
