import type { Preview } from "@storybook/react-vite";
import React from "react";
import { themes } from "../src/theme/colors";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
  },
  decorators: [
    (Story, context) => {
      const themeKey = context.args.theme || "light";
      const theme = themes[themeKey] || themes.light;

      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "96vh",
            backgroundColor: theme.background,
            color: theme.color,
          }}
        >
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
