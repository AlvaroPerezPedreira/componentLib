import { Meta, StoryObj } from "@storybook/react-webpack5";
import { Button } from "./Button";
import InfoIcon from "../../icons/InfoIcon";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
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
    thickness: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: "Button",
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    thickness: "md",
    disabled: false,
    onClick: () => alert("Clicked!"),
  },
};

export const DarkTheme: Story = {
  args: {
    label: "Button",
    variant: "default",
    theme: "dark",
    sizeStyle: "md",
    thickness: "md",
    disabled: false,
    onClick: () => alert("Clicked!"),
  },
};

export const Disabled: Story = {
  args: {
    label: "Button",
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    thickness: "md",
    disabled: true,
    onClick: () => alert("Clicked!"),
  },
};

export const SmallSize: Story = {
  args: {
    label: "Button",
    variant: "default",
    theme: "light",
    sizeStyle: "sm",
    thickness: "md",
    disabled: false,
    onClick: () => alert("Clicked!"),
  },
};

export const MediumSize: Story = {
  args: {
    label: "Button",
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    thickness: "md",
    disabled: false,
    onClick: () => alert("Clicked!"),
  },
};

export const LargeSize: Story = {
  args: {
    label: "Button",
    variant: "default",
    theme: "light",
    sizeStyle: "lg",
    thickness: "md",
    disabled: false,
    onClick: () => alert("Clicked!"),
  },
};

export const SmallThickness: Story = {
  args: {
    label: "Button",
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    thickness: "sm",
    disabled: false,
    onClick: () => alert("Clicked!"),
  },
};

export const MediumThickness: Story = {
  args: {
    label: "Button",
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    thickness: "md",
    disabled: false,
    onClick: () => alert("Clicked!"),
  },
};

export const LargeThickness: Story = {
  args: {
    label: "Button",
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    thickness: "lg",
    disabled: false,
    onClick: () => alert("Clicked!"),
  },
};

export const SuccessVariant: Story = {
  args: {
    label: "Button",
    variant: "success",
    theme: "light",
    sizeStyle: "md",
    thickness: "md",
    disabled: false,
    onClick: () => alert("Clicked!"),
  },
};

export const WarningVariant: Story = {
  args: {
    label: "Button",
    variant: "warning",
    theme: "light",
    sizeStyle: "md",
    thickness: "md",
    disabled: false,
    onClick: () => alert("Clicked!"),
  },
};

export const DangerVariant: Story = {
  args: {
    label: "Button",
    variant: "danger",
    theme: "light",
    sizeStyle: "md",
    thickness: "md",
    disabled: false,
    onClick: () => alert("Clicked!"),
  },
};

export const InfoVariant: Story = {
  args: {
    label: "Button",
    variant: "info",
    theme: "light",
    sizeStyle: "md",
    thickness: "md",
    disabled: false,
    onClick: () => alert("Clicked!"),
  },
};

export const WithIcon: Story = {
  args: {
    label: "Button with Icon",
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    thickness: "md",
    disabled: false,
    onClick: () => alert("Clicked!"),
    icon: <InfoIcon />,
  },
};
