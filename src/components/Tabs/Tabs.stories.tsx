import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs } from ".";

const meta: Meta<typeof Tabs.Root> = {
  title: "Components/Tabs",
  component: Tabs.Root,
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

type Story = StoryObj<typeof Tabs.Root>;

export const Default: Story = {
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "md",
  },
  render: (args) => {
    return (
      <Tabs.Root defaultValue="davinci" {...args}>
        <Tabs.Trigger value="tesla">Tesla</Tabs.Trigger>
        <Tabs.Trigger value="davinci">da Vinci</Tabs.Trigger>
        <Tabs.Trigger value="newton">Newton</Tabs.Trigger>

        <Tabs.Content value="tesla">
          <h1>Nikola Tesla</h1>
          <p>
            Serbian-American inventor and electrical engineer known for his
            contributions to the development of alternating current (AC)
            electrical systems. Tesla held over 300 patents and was considered
            one of the most innovative minds of his time.
          </p>
          <p>
            His groundbreaking work with wireless technology and electromagnetic
            fields laid the foundation for many modern electrical devices we use
            today.
          </p>
        </Tabs.Content>

        <Tabs.Content value="davinci">
          <h1>Leonardo da Vinci</h1>
          <p>
            Italian Renaissance polymath who excelled as an artist, inventor,
            engineer, scientist, and mathematician. Best known for masterpieces
            like the Mona Lisa and The Last Supper, da Vinci was truly ahead of
            his time.
          </p>
          <p>
            His notebooks contain designs for helicopters, tanks, submarines,
            and countless other inventions that wouldn't be built for centuries
            after his death.
          </p>
        </Tabs.Content>

        <Tabs.Content value="newton">
          <h1>Isaac Newton</h1>
          <p>
            English physicist, mathematician, and astronomer who formulated the
            laws of motion and universal gravitation. His work "Principia
            Mathematica" is considered one of the most important scientific
            works ever written.
          </p>
          <p>
            Newton also made significant contributions to optics and
            mathematics, including the development of calculus, fundamentally
            changing our understanding of the natural world.
          </p>
        </Tabs.Content>
      </Tabs.Root>
    );
  },
};
