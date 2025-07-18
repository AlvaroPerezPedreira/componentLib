import { Meta, StoryObj } from "@storybook/react-webpack5";
import { Breadcrumb, BreadcrumbItem } from "./Breadcrumb";
import InfoIcon from "../../icons/InfoIcon";
import CustomSeparator from "../../icons/CustomSeparator";

const items: BreadcrumbItem[] = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "Articles", href: "/articles" },
  { id: 3, label: "Development", href: "/articles/development" },
  { id: 4, label: "Current Page", ariaCurrent: true, disabled: true },
];

const itemsWithIcons: BreadcrumbItem[] = [
  { id: 1, label: "Home", href: "/", icon: <InfoIcon /> },
  { id: 2, label: "Articles", href: "/articles", icon: <InfoIcon /> },
  {
    id: 3,
    label: "Development",
    href: "/articles/development",
  },
  {
    id: 4,
    label: "Current Page",
    ariaCurrent: true,
    disabled: true,
    icon: <InfoIcon />,
  },
];

const itemsDisabledKeys: BreadcrumbItem[] = [
  { id: 1, label: "Home", href: "/home" },
  { id: 2, label: "Disabled link", href: "/disabled-link", disabled: true },
  { id: 3, label: "Development", href: "/development" },
  {
    id: 4,
    label: "Current Page disabled link",
    ariaCurrent: true,
    disabled: true,
  },
];

const meta: Meta<typeof Breadcrumb> = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "success", "danger", "warning", "info"], // ajusta según variantes que tengas
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

type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: {
    items,
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    separator: ">",
    separatorVariantColor: false,
  },
};

export const DarkTheme: Story = {
  args: {
    items,
    variant: "default",
    theme: "dark",
    sizeStyle: "md",
    separator: ">",
    separatorVariantColor: false,
  },
};

export const DisabledItems: Story = {
  args: {
    items: itemsDisabledKeys,
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    separator: ">",
    separatorVariantColor: false,
  },
};

export const WithIcons: Story = {
  args: {
    items: itemsWithIcons,
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    separator: ">",
    separatorVariantColor: false,
  },
};

export const CharSeparator: Story = {
  args: {
    items,
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    separator: "/",
    separatorVariantColor: false,
  },
};

export const CharSeparatorColored: Story = {
  args: {
    items,
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    separator: "/",
    separatorVariantColor: true,
  },
};

export const IconSeparator: Story = {
  args: {
    items,
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    separator: <CustomSeparator />,
    separatorVariantColor: false,
  },
};

export const IconSeparatorColored: Story = {
  args: {
    items,
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    separator: <CustomSeparator />,
    separatorVariantColor: true,
  },
};

export const SmallSize: Story = {
  args: {
    items,
    variant: "default",
    theme: "light",
    sizeStyle: "sm",
    separator: ">",
    separatorVariantColor: false,
  },
};

export const MediumSize: Story = {
  args: {
    items,
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    separator: ">",
    separatorVariantColor: false,
  },
};

export const LargeSize: Story = {
  args: {
    items,
    variant: "default",
    theme: "light",
    sizeStyle: "lg",
    separator: ">",
    separatorVariantColor: false,
  },
};

export const SuccessVariant: Story = {
  args: {
    items,
    variant: "success",
    theme: "light",
    sizeStyle: "md",
    separator: ">",
    separatorVariantColor: false,
  },
};

export const WarningVariant: Story = {
  args: {
    items,
    variant: "warning",
    theme: "light",
    sizeStyle: "md",
    separator: ">",
    separatorVariantColor: false,
  },
};

export const DangerVariant: Story = {
  args: {
    items,
    variant: "danger",
    theme: "light",
    sizeStyle: "md",
    separator: ">",
    separatorVariantColor: false,
  },
};

export const InfoVariant: Story = {
  args: {
    items,
    variant: "info",
    theme: "light",
    sizeStyle: "md",
    separator: ">",
    separatorVariantColor: false,
  },
};
