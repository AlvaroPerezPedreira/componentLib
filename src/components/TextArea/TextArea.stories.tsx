import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextArea } from "./TextArea";

const meta: Meta<typeof TextArea> = {
  title: "Components/TextArea",
  component: TextArea,
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

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    thickness: "md",
    disabled: false,
    readOnly: false,
    placeholder: "Write something...",
  },
};

export const DarkTheme: Story = {
  args: {
    variant: "default",
    theme: "dark",
    sizeStyle: "md",
    thickness: "md",
    disabled: false,
    readOnly: false,
    placeholder: "Write something...",
  },
};

export const Disabled: Story = {
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    thickness: "md",
    disabled: true,
    readOnly: false,
    placeholder: "Disabled text area...",
  },
};

export const Placeholder: Story = {
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    thickness: "md",
    disabled: false,
    readOnly: false,
    placeholder: "This is a placeholder",
  },
};

export const MaxLength: Story = {
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    thickness: "md",
    disabled: false,
    readOnly: false,
    placeholder: "Write something...",
    maxLength: 100,
  },
};

export const ReadOnlyWithPlaceholder: Story = {
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    thickness: "md",
    disabled: false,
    readOnly: true,
    placeholder: "This is a read-only text area with a placeholder",
  },
};

export const ReadOnlyWithValue: Story = {
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    thickness: "md",
    disabled: false,
    readOnly: true,
    placeholder: "",
    value: "This is a read-only text area with a value",
  },
};

export const SmallSize: Story = {
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "sm",
    thickness: "md",
    disabled: false,
    readOnly: false,
    placeholder: "Write something...",
  },
};

export const MediumSize: Story = {
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    thickness: "md",
    disabled: false,
    readOnly: false,
    placeholder: "Write something...",
  },
};

export const LargeSize: Story = {
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "lg",
    thickness: "md",
    disabled: false,
    readOnly: false,
    placeholder: "Write something...",
  },
};

export const SmallThickness: Story = {
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    thickness: "sm",
    disabled: false,
    readOnly: false,
    placeholder: "Write something...",
  },
};

export const MediumThickness: Story = {
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    thickness: "md",
    disabled: false,
    readOnly: false,
    placeholder: "Write something...",
  },
};

export const LargeThickness: Story = {
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    thickness: "lg",
    disabled: false,
    readOnly: false,
    placeholder: "Write something...",
  },
};

export const SuccessVariant: Story = {
  args: {
    variant: "success",
    theme: "light",
    sizeStyle: "md",
    thickness: "md",
    disabled: false,
    readOnly: false,
    placeholder: "Write something...",
  },
};

export const WarningVariant: Story = {
  args: {
    variant: "warning",
    theme: "light",
    sizeStyle: "md",
    thickness: "md",
    disabled: false,
    readOnly: false,
    placeholder: "Write something...",
  },
};

export const DangerVariant: Story = {
  args: {
    variant: "danger",
    theme: "light",
    sizeStyle: "md",
    thickness: "md",
    disabled: false,
    readOnly: false,
    placeholder: "Write something...",
  },
};

export const InfoVariant: Story = {
  args: {
    variant: "info",
    theme: "light",
    sizeStyle: "md",
    thickness: "md",
    disabled: false,
    readOnly: false,
    placeholder: "Write something...",
  },
};
