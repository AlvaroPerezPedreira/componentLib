import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react-webpack5";
import { RangeSlider } from "./RangeSlider";

const meta: Meta<typeof RangeSlider> = {
  title: "Components/RangeSlider",
  component: RangeSlider,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "success", "danger", "warning", "info"],
    },
    theme: {
      control: { type: "radio" },
      options: ["light", "dark"],
    },
    sizeStyle: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    disabled: { control: "boolean" },
    min: { control: "number" },
    max: { control: "number" },
    step: { control: "number" },
    defaultValue: { control: "number" },
  },
};

export default meta;

type Story = StoryObj<typeof RangeSlider>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.defaultValue || 50);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <RangeSlider
          {...args}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <div style={{ marginTop: 30 }}>Value: {value}</div>
      </div>
    );
  },
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    min: 0,
    max: 100,
    step: 1,
    defaultValue: 50,
    disabled: false,
  },
};
