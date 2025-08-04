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
          maxWidth: 400,
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

export const DarkTheme: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.defaultValue || 50);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: 400,
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
    theme: "dark",
    sizeStyle: "md",
    min: 0,
    max: 100,
    step: 1,
    defaultValue: 50,
    disabled: false,
  },
};

export const StepsMarks: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.defaultValue || 0);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: 400,
          margin: "0 auto",
        }}
      >
        <RangeSlider
          {...args}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          step={100}
          min={0}
          max={1000}
          showTicks={true}
        />
        <div style={{ marginTop: 20 }}>Value: {value}</div>
      </div>
    );
  },
  args: {
    variant: "default",
    theme: "light",
    sizeStyle: "md",
    min: 0,
    max: 100,
    step: 10,
    defaultValue: 0,
    disabled: false,
    showTicks: true,
  },
};

export const Disabled: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.defaultValue || 50);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: 400,
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
    defaultValue: 30,
    disabled: true,
  },
};

export const SmallSize: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.defaultValue || 50);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: 400,
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
    sizeStyle: "sm",
    min: 0,
    max: 100,
    step: 1,
    defaultValue: 30,
    disabled: false,
  },
};

export const MediumSize: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.defaultValue || 50);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: 400,
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
    defaultValue: 30,
    disabled: false,
  },
};

export const LargeSize: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.defaultValue || 50);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: 400,
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
    sizeStyle: "lg",
    min: 0,
    max: 100,
    step: 1,
    defaultValue: 30,
    disabled: false,
  },
};

export const DefaultVariant: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.defaultValue || 50);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: 400,
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

export const SuccessVariant: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.defaultValue || 50);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: 400,
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
    variant: "success",
    theme: "light",
    sizeStyle: "md",
    min: 0,
    max: 100,
    step: 1,
    defaultValue: 50,
    disabled: false,
  },
};

export const DangerVariant: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.defaultValue || 50);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: 400,
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
    variant: "danger",
    theme: "light",
    sizeStyle: "md",
    min: 0,
    max: 100,
    step: 1,
    defaultValue: 50,
    disabled: false,
  },
};

export const WarningVariant: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.defaultValue || 50);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: 400,
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
    variant: "warning",
    theme: "light",
    sizeStyle: "md",
    min: 0,
    max: 100,
    step: 1,
    defaultValue: 50,
    disabled: false,
  },
};

export const InfoVariant: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.defaultValue || 50);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: 400,
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
    variant: "info",
    theme: "light",
    sizeStyle: "md",
    min: 0,
    max: 100,
    step: 1,
    defaultValue: 50,
    disabled: false,
  },
};
