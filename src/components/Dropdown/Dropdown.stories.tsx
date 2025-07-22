import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Dropdown } from ".";

const meta: Meta<typeof Dropdown.Root> = {
  title: "Components/Dropdown",
  component: Dropdown.Root,
};

export default meta;

type Story = StoryObj<typeof Dropdown.Root>;

export const Default: Story = {
  render: () => {
    return (
      <Dropdown.Root>
        <Dropdown.Trigger>Open Dropdown</Dropdown.Trigger>
        <Dropdown.Menu>
          <Dropdown.Item>First Option</Dropdown.Item>
          <Dropdown.Item>Second Option</Dropdown.Item>
          <Dropdown.Item>Third Option</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Root>
    );
  },
};
