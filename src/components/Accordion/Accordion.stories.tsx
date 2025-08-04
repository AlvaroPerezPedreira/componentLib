import { Meta, StoryObj } from "@storybook/react-webpack5";
import { Accordion, AccordionItem } from "./Accordion";
import InfoIcon from "../../icons/InfoIcon";

const itemsSet1: AccordionItem[] = [
  {
    id: "1",
    title: "Languages Used",
    content: "This UI was written in HTML and CSS.",
    disabled: false,
  },
  {
    id: "2",
    title: "How it Works",
    content:
      "Using sibling and checked selectors, we can style siblings based on checked state.",
    disabled: false,
  },
  {
    id: "3",
    title: "Accessibility",
    content:
      "Keyboard navigation and ARIA attributes improve usability for all users.",
    disabled: false,
  },
  {
    id: "4",
    title: "Customization",
    content:
      "Easily customize the accordion's styles and behavior with props like size, theme, and variant.",
    disabled: false,
  },
];

const disabledItem: AccordionItem = {
  id: "5",
  title: "Disabled Item",
  content: "This item is disabled and cannot be opened.",
  disabled: true,
};

const itemsSet2: AccordionItem[] = [
  {
    id: "1",
    icon: <InfoIcon />,
    title: "Advanced Techniques",
    content:
      "Animations and transitions enhance user experience in interactive elements.",
    disabled: false,
  },
  {
    id: "2",
    icon: <InfoIcon />,
    title: "Accessibility",
    content:
      "Keyboard navigation and ARIA attributes improve usability for all users.",
    disabled: false,
  },
];

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
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

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    items: itemsSet1,
    defaultOpenItems: [],
    multiple: true,
    variant: "default",
    sizeStyle: "md",
    theme: "light",
  },
};

export const DarkTheme: Story = {
  args: {
    items: itemsSet1,
    multiple: true,
    defaultOpenItems: [],
    variant: "default",
    sizeStyle: "md",
    theme: "dark",
  },
};

export const InitiallyOpen: Story = {
  args: {
    items: itemsSet1,
    defaultOpenItems: ["1", "3"],
    multiple: true,
    variant: "default",
    sizeStyle: "md",
    theme: "light",
  },
};

export const WithIcons: Story = {
  args: {
    items: itemsSet2,
    multiple: true,
    defaultOpenItems: [],
    variant: "default",
    sizeStyle: "md",
    theme: "light",
  },
};

export const SingleOpenItem: Story = {
  args: {
    items: itemsSet1,
    multiple: false,
    defaultOpenItems: ["2"],
    variant: "default",
    sizeStyle: "md",
    theme: "light",
  },
};

export const DisabledItem: Story = {
  args: {
    items: [...itemsSet1, disabledItem],
    defaultOpenItems: [],
    multiple: true,
    variant: "default",
    sizeStyle: "md",
    theme: "light",
  },
};

export const SmallSize: Story = {
  args: {
    items: itemsSet1,
    defaultOpenItems: ["1"],
    multiple: true,
    variant: "default",
    sizeStyle: "sm",
    theme: "light",
  },
};

export const MediumSize: Story = {
  args: {
    items: itemsSet1,
    defaultOpenItems: ["1"],
    multiple: true,
    variant: "default",
    sizeStyle: "md",
    theme: "light",
  },
};

export const LargeSize: Story = {
  args: {
    items: itemsSet1,
    defaultOpenItems: ["1"],
    multiple: true,
    variant: "default",
    sizeStyle: "lg",
    theme: "light",
  },
};

export const DefaultVariant: Story = {
  args: {
    items: itemsSet1,
    defaultOpenItems: ["1"],
    multiple: true,
    variant: "default",
    sizeStyle: "md",
    theme: "light",
  },
};

export const SuccessVariant: Story = {
  args: {
    items: itemsSet1,
    defaultOpenItems: ["1"],
    multiple: true,
    variant: "success",
    sizeStyle: "md",
    theme: "light",
  },
};

export const WarningVariant: Story = {
  args: {
    items: itemsSet1,
    defaultOpenItems: ["1"],
    multiple: true,
    variant: "warning",
    sizeStyle: "md",
    theme: "light",
  },
};

export const DangerVariant: Story = {
  args: {
    items: itemsSet1,
    defaultOpenItems: ["1"],
    multiple: true,
    variant: "danger",
    sizeStyle: "md",
    theme: "light",
  },
};

export const InfoVariant: Story = {
  args: {
    items: itemsSet1,
    defaultOpenItems: ["1"],
    multiple: true,
    variant: "info",
    sizeStyle: "md",
    theme: "light",
  },
};
